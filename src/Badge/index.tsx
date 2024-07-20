import React, { forwardRef } from "react";
import s from "./Badge.module.scss";
import clsx from "clsx";
import type { BadgeProps } from "./types";

const Index = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
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
      <span className={rootClassNames} ref={ref} {...rest}>
        {isDefault && content}
      </span>
      {children}
    </div>
  );
});

Index.displayName = "Badge";

export default Index;
