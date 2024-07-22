import React, { forwardRef, useState } from "react";
import s from "../Accordion.module.scss";
import clsx from "clsx";
import ArrowForwardIos from "../../icons/ArrowForwardIos";
import type { AccordionProps } from "../types";

// Omit "expanded" | "onExpand" which are only required for controlled accordions
interface UncontrolledAccordionProps extends Omit<AccordionProps, "expanded" | "onExpand"> { };

const UncontrolledAccordion = forwardRef<HTMLDivElement, UncontrolledAccordionProps>(({
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
}, ref) => {
  const [animationClass, setAnimationClass] = useState("none");
  const expandAnimation = animationClass === "expand";
  const collapseAnimation = animationClass === "collapse";

  const containerClassNames = clsx(s.container, containerClassName);
  const summaryClassNames = clsx(s.summary, summaryClassName);
  const rootClassNames = clsx(s.root, className, { [s.expand]: expandAnimation, [s.collapse]: collapseAnimation });
  const actionsClassNames = clsx(s.actions, actionsClassName, { [s.expand]: expandAnimation, [s.collapse]: collapseAnimation });

  // Uncontrolled expanded state
  const [uExpanded, setUExpanded] = useState(defaultExpanded);

  function handleAnimation(state: boolean) {
    if (unmountOnExit) return setAnimationClass("none");
    const nextAnimationClass = state ? "expand" : "collapse";
    setAnimationClass(nextAnimationClass);
  };

  function handleClick() {
    handleAnimation(!uExpanded);
    setUExpanded(!uExpanded)
  };

  // TODO: Inquire where the "ref" and "...props" should be passed to, container or root

  return (
    <div
      className={containerClassNames}
      ref={ref}
      data-expanded={uExpanded}
      aria-disabled={disabled}
      {...props}
    >
      <button className={summaryClassNames} onClick={handleClick} disabled={disabled}>
        {summary}
        {icon ?
          <div className={s.icon}>{icon}</div> :
          <ArrowForwardIos className={s.icon} size={16} />}
      </button>
      <div className={rootClassNames}>
        {(!unmountOnExit || uExpanded) && children}
      </div>
      {actions &&
        <div className={actionsClassNames}>
          {actions}
        </div>}
    </div>
  );
});

UncontrolledAccordion.displayName = "UncontrolledAccordion";

export default UncontrolledAccordion;
