import { createElement, forwardRef } from "react";
import s from "./Divider.module.scss";
import clsx from "clsx";
import type { DividerProps } from "./types";

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    children = null,
    variant = "fullWidth",
    orientation = "horizontal",
    contentAlign = "middle",
    component = "div",
    className = "",
    ...rest
  } = props;

  const rootClassNames = clsx(s.root, className);

  const componentParams = {
    className: rootClassNames,
    ref,
    role: "separator",
    "aria-orientation": orientation,
    "data-variant": variant,
    "data-align": contentAlign,
    ...rest,
  };

  // Void elements throw error if a child is passed: https://developer.mozilla.org/en-US/docs/Glossary/Void_element
  // Avoid passing child if a void element is used
  const voidElements = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ];

  // Return void divider
  if (voidElements.includes(component))
    return createElement(component, componentParams, null);

  // Return normal divider
  return createElement(component, componentParams, children);
});

Divider.displayName = "Divider";

export default Divider;
