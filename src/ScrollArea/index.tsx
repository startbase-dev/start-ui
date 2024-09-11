import React, { forwardRef, CSSProperties } from "react";
import s from "./ScrollArea.module.scss";
import { ScrollAreaProps } from "./types";

const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ orientation, className, style, children, ...rest }, ref) => {
    const getScrollContainerStyles = (): CSSProperties => {
      let scrollStyles: CSSProperties = {
        overflowX: orientation === "horizontal" ? "auto" : "hidden",
        overflowY: orientation === "vertical" ? "auto" : "hidden",
        WebkitOverflowScrolling: "touch", // Optional: Smooth scrolling on iOS
      };

      if (style) {
        scrollStyles = { ...scrollStyles, ...style };
      }

      return scrollStyles;
    };

    return (
      <div
        className={`${s.root} ${className}`}
        ref={ref}
        style={getScrollContainerStyles()}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

ScrollArea.displayName = "ScrollArea";

export default ScrollArea;
