import React, { forwardRef, useState } from "react";
import s from "../Accordion.module.scss";
import clsx from "clsx";
import ArrowForwardIos from "../../icons/ArrowForwardIos";
import type { AccordionProps } from "../types";

// Omit "expanded" | "onExpand" which are only required for controlled accordions
interface UncontrolledAccordionProps
  extends Omit<AccordionProps, "expanded" | "onExpand"> {}

const UncontrolledAccordion = forwardRef<
  HTMLDivElement,
  UncontrolledAccordionProps
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
      defaultExpanded = false,
      disabled = false,
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

    const [expanded, setExpanded] = useState(defaultExpanded);

    function handleClick() {
      setExpanded(!expanded);
    }

    return (
      <div
        className={containerClassNames}
        ref={ref}
        data-expanded={expanded}
        data-unmountonexit={unmountOnExit}
        aria-disabled={disabled}
        {...props}
      >
        <button
          className={summaryClassNames}
          onClick={handleClick}
          disabled={disabled}
        >
          {summary}
          {icon ? (
            <div className={s.icon}>{icon}</div>
          ) : (
            <ArrowForwardIos className={s.icon} size={16} />
          )}
        </button>
        <div className={rootClassNames}>
          {(!unmountOnExit || expanded) && children}
        </div>
        {actions && <div className={actionsClassNames}>{actions}</div>}
      </div>
    );
  },
);

UncontrolledAccordion.displayName = "UncontrolledAccordion";

export default UncontrolledAccordion;
