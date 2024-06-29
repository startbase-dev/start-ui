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

  return createElement(
    component,
    {
      className: s.root,
      ref, role: "separator",
      "aria-orientation": orientation,
      "data-variant": variant,
      "data-align": contentAlign,
      ...dividerProps
    },
    children
  );
});

Index.displayName = "Divider";

export default Index;
