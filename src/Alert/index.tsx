import React, { forwardRef } from "react";
import s from "./index.module.css";
import IconSelector from "./IconSelector";
import clsx from "clsx";
import type { AlertProps } from "./types";

const Index = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    children,
    severity = "success",
    variant = "default",
    color = "inherit",
    action = undefined,
    icon = true,
    alertTitle = false,
    open = true,
    classnames = [],
    ...rest
  } = props;

  // Define aria-live prop
  const isAssertive = severity === "error" || severity === "warning";
  const ariaLive = isAssertive ? "assertive" : "polite";

  // Combine variant and color props
  const variantColor = color === "inherit" ? severity : color;
  const dataVariant = `${variant}-${variantColor}`;

  const iconBoolean = typeof icon === "boolean";

  function getTitle() {
    if (alertTitle === true) return severity;
    if (typeof alertTitle === "string") return alertTitle;
    return null;
  }
  const title = getTitle();

  return (
    <div
      className={clsx(s.root, ...classnames)}
      ref={ref}
      role="alert"
      aria-live={ariaLive}
      data-variant={dataVariant}
      data-open={open}
      {...rest}
    >
      {iconBoolean ? (
        <IconSelector
          iconName={severity}
          icon={icon}
          iconBoolean={iconBoolean}
          size={22}
        />
      ) : (
        icon
      )}
      <div className={s.body}>
        {title && <span className={s.title}>{title}</span>}
        <span>{children}</span>
      </div>
      {action}
    </div>
  );
});

Index.displayName = "Alert";

export default Index;
