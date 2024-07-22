import React, { forwardRef, useState, useEffect, useRef } from "react";
import s from "../Accordion.module.scss";
import clsx from "clsx";
import ArrowForwardIos from "../../icons/ArrowForwardIos";
import type { AccordionProps } from "../types";

// make expanded | onExpand required
interface ControlledAccordionProps extends AccordionProps {
  expanded: boolean;
  onExpand: () => void;
};

const ControlledAccordion = forwardRef<HTMLDivElement, ControlledAccordionProps>(({
  children,
  summary,
  actions,
  className,
  summaryClassName,
  actionsClassName,
  containerClassName,
  expanded,
  onExpand,
  defaultExpanded = false,
  icon,
  ...props
}, ref) => {
  const [animationClass, setAnimationClass] = useState("none");
  const expandAnimation = animationClass === "expand";
  const collapseAnimation = animationClass === "collapse";

  const containerClassNames = clsx(s.container, containerClassName);
  const summaryClassNames = clsx(s.summary, summaryClassName);
  const rootClassNames = clsx(s.root, className, { [s.expand]: expandAnimation, [s.collapse]: collapseAnimation });
  const actionsClassNames = clsx(s.actions, actionsClassName, { [s.expand]: expandAnimation, [s.collapse]: collapseAnimation });

  // controlled expanded state
  const [cExpanded, setCExpanded] = useState(defaultExpanded);

  function handleAnimation(state: boolean) {
    const nextAnimationClass = state ? "expand" : "collapse";
    setAnimationClass(nextAnimationClass);
  };

  function handleClick() {
    onExpand();

    // this local state is redundant but removing it causes an initial flicker with the animation so it stays
    handleAnimation(!cExpanded);
    setCExpanded(!cExpanded);
  };

  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    };

    handleAnimation(expanded);
    setCExpanded(expanded);
  }, [expanded]);

  return (
    <div
      className={containerClassNames}
      ref={ref}
      data-expanded={expanded}
      {...props}
    >
      <button className={summaryClassNames} onClick={handleClick}>
        {summary}
        {icon ?
        <div className={s.icon}>{icon}</div> :
        <ArrowForwardIos className={s.icon} size={16} />}
      </button>
      <div className={rootClassNames}>
        {children}
      </div>
      {actions && 
        <div className={actionsClassNames}>
          {actions}
        </div>}
    </div>
  );
});

ControlledAccordion.displayName = "ControlledAccordion";

export default ControlledAccordion;
