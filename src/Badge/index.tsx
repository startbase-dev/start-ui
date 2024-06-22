import React, { forwardRef } from "react";

import s from "./index.module.css";

type BadgeColor = "primary" | "secondary" | "success" | "error";

type BadgeVariant = "default" | "dot";

type VerticalPosition = "top" | "bottom";
type HorizontalPosition = "right" | "left";
type BadgePosition = `${VerticalPosition}-${HorizontalPosition}` | VerticalPosition | HorizontalPosition;

export interface IndexProps {
  children: React.ReactNode;
  badgeContent: number;
  color?: BadgeColor;
  variant?: BadgeVariant;
  position?: BadgePosition;
  invisible?: boolean;
  showZero?: boolean;
  max?: number;
}

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  const {
    children,
    badgeContent,
    color = "primary",
    variant = "default",
    position = "top-right",
    invisible = false,
    showZero = false,
    max = 99
  } = props;

  // Convert badgeContent to string and add plus sign if more than max
  function calculateContent() {
    if (variant === "dot") return "";
    if (badgeContent > max) return `${max}+`;
    return badgeContent.toString();
  };

  const content = calculateContent();

  // Calculate if the badge should be visible or not
  function calculateShow() {
    if (invisible) return false;
    if (showZero) return true;
    return badgeContent > 0;
  };

  const showBadge = calculateShow();

  return (
    <div
      className={s.root}
      ref={ref}
      data-show={showBadge}
      data-color={color}
      data-variant={variant}
      data-position={position}
      {...props}
    >
      <span className={s.badge}>
        {content}
      </span>
      {children}
    </div>
  );
});

Index.displayName = "Badge";

export default Index;
