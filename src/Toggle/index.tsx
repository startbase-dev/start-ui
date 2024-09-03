import React, {
  ButtonHTMLAttributes,
  forwardRef,
  useState,
  ReactNode,
} from "react";
import cx from "clsx";
// eslint-disable-next-line css-modules/no-unused-class
import s from "./Toggle.module.scss";
import "../style/components/toggle.scss";

type ToggleProps = {
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
  color?: "primary" | "secondary" | "destructive";
  variant?: "default" | "outline";
  size?: "small" | "medium" | "large";
  fluid?: boolean;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      initialState = false,
      onToggle,
      color = "primary",
      variant = "default",
      size = "medium",
      fluid = false,
      className = "",
      disabled = false,
      children,
      ...rest
    },
    ref,
  ) => {
    const [isToggled, setIsToggled] = useState(initialState);

    const handleClick = () => {
      if (disabled) return;
      const newState = !isToggled;
      setIsToggled(newState);
      if (onToggle) {
        onToggle(newState);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cx(
          s.root,
          s[variant],
          s[color],
          s[size],
          fluid && s.fluid,
          isToggled ? s.toggled : s.untoggled,
          disabled && s.disabled,
          className,
        )}
        onClick={handleClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Toggle.displayName = "Toggle";

export default Toggle;
