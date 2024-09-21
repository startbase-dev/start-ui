import { createContext } from 'react';
import type { FloatingMenuContextProps } from './types';

const FloatingMenuContext = createContext<FloatingMenuContextProps>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
});

FloatingMenuContext.displayName = 'FloatingMenuContext';

export default FloatingMenuContext;
