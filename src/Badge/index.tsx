import React, { forwardRef } from "react";
import s from "./index.module.scss";
import clsx from "clsx";
import type { IndexProps } from "./types";

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  const {
    children,
    badgeContent,
    color = "primary",
    variant = "default",
    position = "top-right",
    invisible = false,
    showZero = false,
    max = 99,
    rootClassName = "",
    countClassName = ""
  } = props;
  const rootClassNames = clsx(s.root, rootClassName);
  const countClassNames = clsx(s.count, countClassName);

  // Convert badgeContent to string and add plus sign if more than max
  function calculateContent() {
    if (variant === "dot") return "";
    if (badgeContent > max) return `${max}+`;
    return badgeContent.toString();
  }

  const content = calculateContent();

  // Calculate if the badge should be visible or not
  function calculateShow() {
    if (invisible) return false;
    if (showZero) return true;
    return badgeContent > 0;
  }

  const showBadge = calculateShow();

  return (
    <div
      className={rootClassNames}
      ref={ref}
      data-show={showBadge}
      data-color={color}
      data-variant={variant}
      data-position={position}
    >
      <span className={countClassNames}>{content}</span>
      {children}
    </div>
  );
});

Index.displayName = "Badge";

export default Index;
