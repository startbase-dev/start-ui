import { ReactNode } from "react";

type Item = {
  element: ReactNode;
  width: number;
  height: number;
};

export type Props = {
  items: Item[];
};
