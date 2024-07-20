import React, { forwardRef, useState, useEffect, useRef } from "react";
import s from "./Accordion.module.scss";
import ArrowForwardIos from "../icons/ArrowForwardIos";
import clsx from "clsx";
import type { AccordionProps } from "./types";

const Index = forwardRef<HTMLDivElement, AccordionProps>(({
  className,
  headClassName,
  bodyClassName,
  footClassName,
  head,
  body,
  foot,
  expanded,
  onExpand,
  defaultExpanded = false,
  ...props
}, ref) => {
  const [animationClass, setAnimationClass] = useState("none");
  const expandAnimation = animationClass === "expand";
  const collapseAnimation = animationClass === "collapse";

  const rootClassNames = clsx(s.root, className);
  const headClassNames = clsx(s.head, headClassName);
  const bodyClassNames = clsx(s.body, bodyClassName, { [s.expand]: expandAnimation, [s.collapse]: collapseAnimation });
  const footClassnames = clsx(s.foot, footClassName, { [s.expand]: expandAnimation, [s.collapse]: collapseAnimation });

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
      className={rootClassNames}
      ref={ref}
      data-expanded={dataExpanded}
      data-test={expanded}
      {...props}
    >
      {head &&
        <button className={headClassNames} onClick={handleClick}>
          {head}
          <ArrowForwardIos className={s.icon} size={16} />
        </button>}
      {body && <div className={bodyClassNames}>
        {body}
      </div>}
      {foot && <div className={footClassnames}>
        {foot}
      </div>}
    </div>
  );
});

Index.displayName = "Accordion";

export default Index;
