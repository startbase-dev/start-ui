import React, { forwardRef } from 'react';
import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react';
import FloatingMenu from '../FloatingMenu';
import type { DropdownProps } from './types';

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

Dropdown.displayName = 'Dropdown';

export default Dropdown;
