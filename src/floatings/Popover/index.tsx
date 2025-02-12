import React, {
  cloneElement,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  RefObject,
} from 'react';

import { arrow, offset, shift, flip, Middleware } from '@floating-ui/core';
import { autoUpdate } from '@floating-ui/dom';
import { FloatingPortal, useFloating } from '@floating-ui/react';
import cx from 'clsx';

import { useOutsideClick } from '../../hooks/useOutsideClick';

import FloatingArrow from '../FloatingArrow';

import styles from './Popover.module.scss';

const OFFSET = 4;

import type { PopoverProps } from './types';

const Popover = forwardRef<HTMLElement, PopoverProps>(
  (
    {
      popper,
      open = false,
      placement = 'bottom',
      trigger = 'click',
      className,
      spacing = 0,
      hideArrow = true,
      openDelay = false,
      closeDelay = true,
      clickToClose = true,
      children,
    },
    ref
  ) => {
    const [visible, setVisible] = useState(open);
    const [hiding, setHiding] = useState(false);
    const closeTimerRef = useRef<number | null>(null);
    const openTimerRef = useRef<number | null>(null);
    const arrowRef = useRef<HTMLDivElement | null>(null);
    const popoverRef = useRef<HTMLDivElement | null>(null);

    let arrowMiddleware: Middleware[] = [];
    if (!hideArrow) {
      arrowMiddleware = [
        arrow({
          element: arrowRef?.current,
        }),
      ];
    }

    const { x, y, strategy, refs, middlewareData } = useFloating({
      placement,
      whileElementsMounted: autoUpdate,
      middleware: [
        offset(OFFSET + spacing),
        flip({ padding: OFFSET }),
        shift({ padding: OFFSET, crossAxis: true }),
        ...arrowMiddleware,
      ],
    });

    const show = useCallback(() => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
      }

      let delay = 0;
      if (typeof openDelay === 'boolean') {
        delay = 300;
      } else if (typeof openDelay === 'number') {
        delay = openDelay;
      }

      setHiding(false);
      openTimerRef.current = window.setTimeout(() => {
        setVisible(true);
      }, delay);
    }, [openDelay]);

    const hide = useCallback(() => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
      }
      setHiding(true);
      closeTimerRef.current = window.setTimeout(
        () => {
          setVisible(false);
          setHiding(false);
        },
        closeDelay === true ? 200 : closeDelay === false ? 0 : closeDelay
      );
    }, [closeDelay]);

    const handleClick = useCallback(() => {
      if (trigger === 'hover' && clickToClose) {
        hide();
      }

      if (trigger === 'click') {
        if (visible) {
          hide();
        } else {
          show();
        }
      }
    }, [trigger, clickToClose, hide, visible, show]);

    const handleMouseEnter = useCallback(() => {
      if (trigger !== 'hover') {
        return;
      }
      show();
    }, [show, trigger]);

    const handleMouseLeave = useCallback(() => {
      if (trigger !== 'hover') {
        return;
      }

      if (popoverRef.current && !popoverRef.current.matches(':hover')) {
        hide();
      }
    }, [hide, trigger]);

    const handleClickOutside = useCallback(() => {
      hide();
    }, [hide]);

    useEffect(() => {
      const reference = refs?.domReference?.current;
      const popoverElement = popoverRef.current;

      if (reference) {
        reference.addEventListener('click', handleClick);
        reference.addEventListener('mouseenter', handleMouseEnter);
        reference.addEventListener('mouseleave', handleMouseLeave);
      }

      if (popoverElement) {
        popoverElement.addEventListener('mouseenter', handleMouseEnter);
        popoverElement.addEventListener('mouseleave', handleMouseLeave);
      }

      return function cleanup() {
        if (reference) {
          reference.removeEventListener('click', handleClick);
          reference.removeEventListener('mouseenter', handleMouseEnter);
          reference.removeEventListener('mouseleave', handleMouseLeave);
        }

        if (popoverElement) {
          popoverElement.removeEventListener('mouseenter', handleMouseEnter);
          popoverElement.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }, [refs, handleClick, handleMouseEnter, handleMouseLeave]);

    useOutsideClick({
      ref: refs?.domReference as RefObject<HTMLElement>,
      handler: handleClickOutside,
      withoutRef: refs.floating as RefObject<HTMLElement>,
    });

    const popover = (
      <div
        ref={(el) => {
          popoverRef.current = el;
          refs.setFloating(el);
        }}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 2,
          width: 'max-content',
          maxWidth: `calc(100svw - ${OFFSET * 2}px)`,
        }}
        className={cx(
          styles.popover,
          {
            [styles.visible]: visible,
            [styles.hidden]: !visible,
            [styles.animate]: hiding,
          },
          className && { [className]: true }
        )}
      >
        {!hideArrow && (
          <FloatingArrow
            placement={placement}
            ref={arrowRef}
            x={middlewareData?.arrow?.x}
            y={middlewareData?.arrow?.y}
          />
        )}
        {children}
      </div>
    );

    const handleMultipleRef = (el: HTMLElement) => {
      refs.setReference(el);
      if (typeof ref === 'function') {
        ref(el);
      } else if (ref) {
        ref.current = el;
      }
    };

    return (
      <>
        {cloneElement(popper, { ref: handleMultipleRef })}
        <FloatingPortal>{popover}</FloatingPortal>
      </>
    );
  }
);

Popover.displayName = 'Popover';

export default Popover;
export { type PopoverProps };
