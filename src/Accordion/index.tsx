import React, { forwardRef, useState } from "react";
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

  const dataExpanded = typeof expanded === "boolean" ? expanded : ucExpanded;

  function handleClick() {
    const nextAnimationClass = ucExpanded ? "collapse" : "expand";

    setAnimationClass(nextAnimationClass);
    setUcExpanded(!ucExpanded);
  };

  // TODO: to be added: disabled, controlled, unmountOnExit, aria controls,

  return (
    <div
      className={rootClassNames}
      ref={ref}
      data-expanded={dataExpanded}
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
