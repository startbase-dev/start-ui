import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  forwardRef,
} from "react";
import clsx from "clsx";
import styles from "./ToggleGroup.module.scss";
import "../style/components/toggle-group.scss";
// eslint-disable-next-line css-modules/no-unused-class
import s from "../Toggle/Toggle.module.scss";

import { ToggleItemProps, ToggleWrapperProps } from "./types";

const ToggleGroupContext = createContext<{
  value: string | null;
  onChange: (value: string) => void;
}>({
  value: null,
  onChange: () => {},
});

const ToggleWrapper = forwardRef<HTMLDivElement, ToggleWrapperProps>(
  ({ value, onChange, children, direction = "horizontal", ...props }, ref) => {
    const providerValue = useMemo(
      () => ({ value, onChange }),
      [onChange, value],
    );

    return (
      <ToggleGroupContext.Provider value={providerValue}>
        <div
          ref={ref}
          {...props}
          className={clsx(
            styles.togglegroup,
            direction === "horizontal" ? styles.horizontal : styles.vertical,
          )}
        >
          {children}
        </div>
      </ToggleGroupContext.Provider>
    );
  },
);
ToggleWrapper.displayName = "ToggleWrapper";
const ToggleItem = ({
  value,
  initialState = false,
  onToggle,
  color = "primary",
  variant = "default",
  size = "medium",
  fluid = false,
  className = "",
  disabled = false,
  children,
  ...props
}: ToggleItemProps) => {
  const { value: selectedValue, onChange } = useContext(ToggleGroupContext);
  const [isToggled, setIsToggled] = useState(initialState);

  const handleClick = () => {
    if (disabled) return;

    const newState = !isToggled;
    setIsToggled(newState);
    if (onToggle) {
      onToggle(newState);
    }
    onChange(value);
  };

  const isSelected = selectedValue === value;

  return (
    <button
      {...props}
      type="button"
      className={clsx(
        s.root,
        s[variant],
        s[color],
        s[size],
        fluid && s.fluid,
        isToggled ? s.toggled : s.untoggled,
        disabled && s.disabled,
        isSelected,
        className,
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const ToggleGroup = { ToggleWrapper, ToggleItem };
