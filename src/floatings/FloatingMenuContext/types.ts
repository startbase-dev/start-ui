import type { Dispatch, SetStateAction, AllHTMLAttributes } from "react";

export interface FloatingMenuContextProps extends AllHTMLAttributes<HTMLDivElement> {
  getItemProps: (props?: any) => any;
  activeIndex: number | null;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
  setHasFocusInside: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}
