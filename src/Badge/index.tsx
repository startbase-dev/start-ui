import React, { forwardRef } from "react";
import s from "./Badge.module.scss";
import clsx from "clsx";
import type { BadgeProps } from "./types";

const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    children,
    content,
    color = "primary",
    variant = "default",
    position = "top-right",
    invisible = false,
    className = "",
    containerClassName = "",
    ...rest
  } = props;
  const rootClassNames = clsx(s.root, className);
  const containerClassNames = clsx(s.container, containerClassName);

  const isDefault = variant === "default";

  return (
    <div
      className={containerClassNames}
      data-show={!invisible}
      data-color={color}
      data-variant={variant}
      data-position={position}
    >
      <div className={rootClassNames} ref={ref} {...rest}>
        {isDefault && content}
      </div>
      {children}
    </div>
  );
});

Badge.displayName = "Badge";

export default Badge;
