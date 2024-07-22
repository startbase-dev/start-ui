import React, { forwardRef, useState, useEffect, useRef } from "react";
import s from "./Accordion.module.scss";
import ArrowForwardIos from "../icons/ArrowForwardIos";
import clsx from "clsx";
import type { AccordionProps } from "./types";

const Index = forwardRef<HTMLDivElement, AccordionProps>(({
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
  ...props
}, ref) => {
  const [animationClass, setAnimationClass] = useState("none");
  const expandAnimation = animationClass === "expand";
  const collapseAnimation = animationClass === "collapse";

  const containerClassNames = clsx(s.container, containerClassName);
  const summaryClassNames = clsx(s.summary, summaryClassName);
  const rootClassNames = clsx(s.root, className, { [s.expand]: expandAnimation, [s.collapse]: collapseAnimation });
  const actionsClassNames = clsx(s.actions, actionsClassName, { [s.expand]: expandAnimation, [s.collapse]: collapseAnimation });

  // uncontrolled expanded is used when expanded prop is not given
  const [ucExpanded, setUcExpanded] = useState(defaultExpanded);

  const controlled = typeof expanded === "boolean";
  const dataExpanded = controlled ? expanded : ucExpanded;

  function handleAnimation(state: boolean) {
    const nextAnimationClass = state ? "expand" : "collapse";
    setAnimationClass(nextAnimationClass);
  };

  function handleClick() {
    if (controlled) {
      if (onExpand) onExpand();
      return;
    };

    handleAnimation(!ucExpanded);
    setUcExpanded(!ucExpanded);
  };

  const effectCountRef = useRef(0);

  useEffect(() => {
    // prevent animations from running on page load
    if (controlled && effectCountRef.current > 0) {
      handleAnimation(expanded);
    };
    
    effectCountRef.current += 1;
  }, [controlled, expanded]);

  // TODO: to be added: disabled, unmountOnExit, aria controls,
  // BUG: There is an initial flicker with onClick when the component is controlled

  return (
    <div
      className={containerClassNames}
      ref={ref}
      data-expanded={dataExpanded}
      {...props}
    >
      <button className={summaryClassNames} onClick={handleClick}>
        {summary}
        <ArrowForwardIos className={s.icon} size={16} />
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

Index.displayName = "Accordion";

export default Index;
