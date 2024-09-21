import React, { forwardRef } from 'react';
import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react';
import FloatingContextMenu from '../FloatingContextMenu';
import type { ContextMenuProps } from './types';

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
  }
);

ContextMenu.displayName = 'ContextMenu';

export default ContextMenu;
