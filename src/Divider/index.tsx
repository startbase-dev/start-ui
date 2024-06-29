import { createElement, forwardRef } from "react";
import s from "./index.module.css";
import type { IndexProps } from "./types";

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  const {
    children = null,
    variant = "fullWidth",
    orientation = "horizontal",
    contentAlign = "middle",
    component = "div",
    ...dividerProps
  } = props;

  const componentParams = {
    className: s.root,
    ref, role: "separator",
    "aria-orientation": orientation,
    "data-variant": variant,
    "data-align": contentAlign,
    ...dividerProps
  };

  // Void elements throw error if a child is passed
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

  if (voidElements.includes(component)) return createElement(
    component,
    componentParams,
    null
  );

  return createElement(
    component,
    componentParams,
    children
  );
});

Index.displayName = "Divider";

export default Index;
