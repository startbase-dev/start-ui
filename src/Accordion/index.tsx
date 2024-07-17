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
  const rootClassNames = clsx(s.root, className);
  const headClassNames = clsx(s.head, headClassName);
  const bodyClassNames = clsx(s.body, bodyClassName);
  const footClassnames = clsx(s.foot, footClassName);

  // uncontrolled expanded is used when expanded prop is not given
  const [ucExpanded, setUcExpanded] = useState(defaultExpanded);

  const dataExpanded = typeof expanded === "boolean" ? expanded : ucExpanded;

  function handleClick() {
    setUcExpanded(!ucExpanded);
  };

  // TODO: Fix keyframes running on page load
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
