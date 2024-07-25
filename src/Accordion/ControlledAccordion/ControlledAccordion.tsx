import React, { forwardRef, useEffect, useRef } from "react";
import s from "../Accordion.module.scss";
import clsx from "clsx";
import ArrowForwardIos from "../../icons/ArrowForwardIos";
import type { AccordionProps } from "../types";

// make expanded | onExpand required
interface ControlledAccordionProps extends AccordionProps {
  expanded: boolean;
  onExpand: () => void;
}

const ControlledAccordion = forwardRef<
  HTMLDivElement,
  ControlledAccordionProps
>(
  (
    {
      children,
      summary,
      actions,
      className,
      summaryClassName,
      actionsClassName,
      containerClassName,
      expanded,
      onExpand,
      icon,
      unmountOnExit = false,
      ...props
    },
    ref,
  ) => {
    const containerClassNames = clsx(s.container, containerClassName);
    const summaryClassNames = clsx(s.summary, summaryClassName);
    const rootClassNames = clsx(s.root, className);
    const actionsClassNames = clsx(s.actions, actionsClassName);

    function handleClick() {
      onExpand();
    }

    const actionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!actionsRef.current) return;

      const focusableElements = actionsRef.current.querySelectorAll(
        "a, button, input, textarea, select, [tabindex]"
      );
      focusableElements.forEach(el => {
        const tabIndex = expanded ? "0" : "-1";
        el.setAttribute("tabIndex", tabIndex);
      });
    }, [expanded]);

    return (
      <div
        className={containerClassNames}
        ref={ref}
        data-expanded={expanded}
        data-unmountonexit={unmountOnExit}
        {...props}
      >
        <button className={summaryClassNames} onClick={handleClick}>
          {summary}
          {icon ? (
            <div className={s.icon}>{icon}</div>
          ) : (
            <ArrowForwardIos className={s.icon} size={16} />
          )}
        </button>
        <div className={rootClassNames} tabIndex={expanded ? 0 : -1}>
          {(!unmountOnExit || expanded) && children}
        </div>
        {actions && <div className={actionsClassNames} ref={actionsRef} tabIndex={-1}>{actions}</div>}
      </div>
    );
  },
);

ControlledAccordion.displayName = "ControlledAccordion";

export default ControlledAccordion;
