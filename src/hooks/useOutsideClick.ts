import { useEffect, RefObject } from 'react';

interface UseOutsideClickProps {
  ref: RefObject<HTMLElement>;
  handler: () => void;
  withoutRef?: RefObject<HTMLElement>;
}

export function useOutsideClick({
  ref,
  handler,
  withoutRef,
}: UseOutsideClickProps): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref?.current && !ref?.current.contains(event.target as Node)) {
        if (withoutRef?.current) {
          if (
            withoutRef?.current !== event.currentTarget &&
            !withoutRef?.current.contains(event.target as Node)
          ) {
            handler();
          }
        } else {
          handler();
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler, ref, withoutRef]);
}
