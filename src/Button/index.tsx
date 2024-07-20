import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import cx from "clsx";

// eslint-disable-next-line css-modules/no-unused-class
import s from "./Button.module.scss";
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
          <Progress
            value={40}
            determinate={false}
            size={size === "small" ? 14 : 20}
            trackSize={2}
          />
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
