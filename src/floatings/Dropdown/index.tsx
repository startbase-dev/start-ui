import React, { forwardRef, ReactElement } from "react";
import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react";
import FloatingMenu from "../FloatingMenu";

interface DropdownProps {
  children: ReactElement | ReactElement[];
  component?: ReactElement;
  label?: string;
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const parentId = useFloatingParentNodeId();

  if (parentId === null) {
    return (
      <FloatingTree>
        <FloatingMenu {...props} ref={ref} />
      </FloatingTree>
    );
  }

  return <FloatingMenu {...props} ref={ref} />;
});

Dropdown.displayName = "Dropdown";

export default Dropdown;
