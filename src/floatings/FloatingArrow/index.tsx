import React, { forwardRef, CSSProperties } from "react";
import cx from "clsx";
import styles from "./FloatingArrow.module.scss";

const OFFSET = 5;

interface FloatingArrowProps {
  placement?:
    | "top"
    | "top-end"
    | "top-start"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";
  x?: number | null;
  y?: number | null;
}

const FloatingArrow = forwardRef<HTMLDivElement, FloatingArrowProps>(
  ({ placement = "bottom", x, y }, ref) => {
    let style: CSSProperties = {};

    switch (placement) {
      case "top":
        style = { bottom: (y ?? 0) - OFFSET, left: x ?? 0 };
        break;
      case "top-end":
        style = { bottom: (y ?? 0) - OFFSET, left: (x ?? 0) + 10 };
        break;
      case "top-start":
        style = { bottom: (y ?? 0) - OFFSET, left: (x ?? 0) - 10 };
        break;
      case "bottom":
        style = { top: (y ?? 0) - OFFSET, left: x ?? 0 };
        break;
      case "bottom-start":
        style = { top: (y ?? 0) - OFFSET, left: (x ?? 0) - 10 };
        break;
      case "bottom-end":
        style = { top: (y ?? 0) - OFFSET, left: (x ?? 0) + 10 };
        break;
      case "left":
        style = { top: y ?? 0, right: (x ?? 0) - OFFSET };
        break;
      case "left-start":
        style = { top: (y ?? 0) - 5, right: (x ?? 0) - OFFSET };
        break;
      case "left-end":
        style = { top: (y ?? 0) + 5, right: (x ?? 0) - OFFSET };
        break;
      case "right":
        style = { top: y ?? 0, left: (x ?? 0) - OFFSET };
        break;
      case "right-start":
        style = { top: (y ?? 0) - 5, left: (x ?? 0) - OFFSET };
        break;
      case "right-end":
        style = { top: (y ?? 0) + 5, left: (x ?? 0) - OFFSET };
        break;
      default:
        break;
    }

    return (
      <div
        ref={ref}
        className={cx(styles.arrow, {
          [styles.top]: ["top", "top-end", "top-start"].includes(placement),
          [styles.bottom]: ["bottom", "bottom-end", "bottom-start"].includes(
            placement,
          ),
          [styles.left]: ["left", "left-end", "left-start"].includes(placement),
          [styles.right]: ["right", "right-end", "right-start"].includes(
            placement,
          ),
        })}
        style={style}
      ></div>
    );
  },
);

FloatingArrow.displayName = "FloatingArrow";

export default FloatingArrow;
