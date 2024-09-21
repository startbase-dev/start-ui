import React, { useEffect, useRef } from "react";
import { CheckboxProps } from "../types";
const Checkbox = ({ checked, onChange, indeterminate }: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate ?? false;
    }
  }, [indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      checked={checked}
      onChange={onChange}
      style={{ cursor: "pointer" }}
    />
  );
};
export default Checkbox;
