import React, { forwardRef } from "react";
import s from "./index.module.scss";
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
    rootClassName = "",
    iconClassName = "",
    bodyClassName = "",
    titleClassName = "",
    textClassName = ""
  } = props;
  const rootClassNames = clsx(s.root, rootClassName);
  const iconClassNames = clsx(iconClassName);
  const bodyClassNames = clsx(s.body, bodyClassName);
  const titleClassNames = clsx(s.title, titleClassName);
  const textClassNames = clsx(textClassName);

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
      className={rootClassNames}
      ref={ref}
      role="alert"
      aria-live={ariaLive}
      data-variant={dataVariant}
      data-open={open}
    >
      {iconBoolean ? (
        <IconSelector className={iconClassNames} iconName={severity} icon={icon} size={22} />
      ) : (
        icon
      )}
      <div className={bodyClassNames}>
        {title && <span className={titleClassNames}>{title}</span>}
        <span className={textClassNames}>{children}</span>
      </div>
      {action}
    </div>
  );
});

Index.displayName = "Alert";

export default Index;
