import React, { forwardRef, ReactElement } from "react";
import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react";
import FloatingContextMenu from "../FloatingContextMenu";

export interface ContextMenuProps extends Omit<React.AllHTMLAttributes<HTMLDivElement>, "label"> {
  children: ReactElement | ReactElement[];
  component?: ReactElement;
  label?: ReactElement | ReactElement[] | string;
  className?: string;
  menuClassName?: string;
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
}

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  (props, ref) => {
    const parentId = useFloatingParentNodeId();

    if (parentId === null) {
      return (
        <FloatingTree>
          <FloatingContextMenu {...props} ref={ref} />
        </FloatingTree>
      );
    }

    return <FloatingContextMenu {...props} ref={ref} />;
  },
);

ContextMenu.displayName = "ContextMenu";

export default ContextMenu;
