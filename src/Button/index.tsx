import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import cx from "clsx";

// eslint-disable-next-line css-modules/no-unused-class
import s from "./index.module.css";
import Progress from "../Progress";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  color?: "primary" | "secondary" | "destructive";
  variant?: "default" | "link" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  fluid?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles: Record<string, string> = s;

const Index = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      disabled,
      loading,
      color = "primary",
      variant = "default",
      size = "medium",
      fluid = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cx(
          styles.root,
          styles[variant],
          styles[color],
          styles[size],
          fluid && styles.fluid,
          disabled && styles.disabled,
          className,
        )}
        disabled={disabled || loading}
        {...rest}
      >
        {loading ? (
          <Progress value={1} determinate={false} trackSize={size === "small" ? 1 : 2} />
        ) : (
          children
        )}
      </button>
    );
  },
);

Index.displayName = "Button";

export default Index;
