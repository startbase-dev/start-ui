import React, { useState, ChangeEvent } from "react";
import Input from "@start-base/react-form-elements/Input";

interface InputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  disableShrink?: boolean;
  disabled?: boolean;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

const InputWithOnChange: React.FC<InputProps> = ({
  label,
  placeholder,
  error,
  disableShrink,
  disabled,
  append,
  prepend,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Input
      name="input"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      error={error}
      label={label}
      disabled={disabled}
      disableShrink={disableShrink}
      append={append}
      prepend={prepend}
    />
  );
};

export default InputWithOnChange;
