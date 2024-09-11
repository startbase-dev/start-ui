import { createContext } from "react";
import type { FloatingMenuContextProps } from "./types";

const MenuContext = createContext<FloatingMenuContextProps>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
});

export default MenuContext;
