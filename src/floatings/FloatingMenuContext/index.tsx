import { createContext, Dispatch, SetStateAction } from "react";

export interface MenuContextProps {
  getItemProps: (props?: any) => any;
  activeIndex: number | null;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
  setHasFocusInside: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const MenuContext = createContext<MenuContextProps>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
});

export default MenuContext;
