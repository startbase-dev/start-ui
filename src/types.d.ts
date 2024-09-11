import { FC } from "react";
import { AccordionProps } from "./Accordion/types";
import { AlertProps } from "./Alert/types";
import { AvatarProps } from "./Avatar";
import { BadgeProps } from "./Badge/types";
import { BentoCardProps } from "./BentoCard/types";
import { BentoGridProps } from "./BentoGrid/types";
import { ButtonProps } from "./Button";
// import CardProps
import { ChipProps } from "./Chip/types";
import { CountdownProps } from "./Countdown/types";
// import DataTableProps
import { DividerProps } from "./Divider/types";

// FLOATINGS
import { ContextMenuProps } from "./floatings/ContextMenu";
import { DropdownProps } from "./floatings/Dropdown";
import { FloatingArrowProps } from "./floatings/FloatingArrow";
import { FloatingContextMenuProps } from "./floatings/FloatingContextMenu";
import { FloatingMenuProps } from "./floatings/FloatingMenu";
import { FloatingMenuContextProps } from "./floatings/FloatingMenuContext";
import { FloatingMenuItemProps } from "./floatings/FloatingMenuItem";
import { PopoverProps } from "./floatings/Popover";
import { TooltipProps } from "./floatings/Tooltip";

import { GridProps } from "./Grid/types";
import { ColProps } from "./Grid/Col";
import { RowProps } from "./Grid/Row";

// import ListProps
import { ProgressProps } from "./Progress/types";
import { ScrollAreaProps } from "./ScrollArea/types";

// SKELETONS
import { SkeletonAvatarProps } from "./Skeleton/types";
import { SkeletonButtonProps } from "./Skeleton/types";
import { SkeletonCardProps } from "./Skeleton/types";
import { SkeletonImageProps } from "./Skeleton/types";
import { SkeletonInputProps } from "./Skeleton/types";
import { SkeletonListProps } from "./Skeleton/types";
import { SkeletonParagraphProps } from "./Skeleton/types";
import { SkeletonTableProps } from "./Skeleton/types";

// import StepperProps
import { TabProps } from "./Tab/types";
import { TableProps } from "./Table/types";
import { ToggleProps } from "./Toggle/types";

// TOGGLEGROUP
import { ToggleWrapperProps } from "./ToggleGroup/types";
import { ToggleItemProps } from "./ToggleGroup/types";

import { TypographyProps } from "./Typography";

declare module "@start-base/start-ui" {
  export const Accordion: FC<AccordionProps>;
  export const Alert: FC<AlertProps>;
  export const Avatar: FC<AvatarProps>;
  export const Badge: FC<BadgeProps>;
  export const BentoCard: FC<BentoCardProps>;
  export const BentoGrid: FC<BentoGridProps>;
  export const Button: FC<ButtonProps>;
  // export const Card: FC<>; // TODO: Pull changes from Card branch
  export const Chip: FC<ChipProps>;
  export const Countdown: FC<CountdownProps>;
  // export const DataTable: FC<>; // TODO: Pull changes from DataTable branch
  export const Divider: FC<DividerProps>;

  // FLOATINGS
  export const ContextMenu: FC<ContextMenuProps>;
  export const DropdownMenu: FC<DropdownProps>;
  export const FloatingArrow: FC<FloatingArrowProps>;
  export const FloatingContextMenu: FC<FloatingContextMenuProps>;
  export const FloatingMenu: FC<FloatingMenuProps>;
  export const FloatingMenuContext: FC<FloatingMenuContextProps>;
  export const FloatingMenuItem: FC<FloatingMenuItemProps>;
  export const Popover: FC<PopoverProps>;
  export const Tooltip: FC<TooltipProps>;

  export const Grid: FC<GridProps>;
  export const Col: FC<ColProps>;
  export const Row: FC<RowProps>;

  // export const List: FC<>; // TODO: Pull changes from List branch
  export const Progress: FC<ProgressProps>;
  export const ScrollArea: FC<ScrollAreaProps>;

  // SKELETONS
  export const SkeletonAvatar: FC<SkeletonAvatarProps>;
  export const SkeletonButton: FC<SkeletonButtonProps>;
  export const SkeletonCard: FC<SkeletonCardProps>;
  export const SkeletonImage: FC<SkeletonImageProps>;
  export const SkeletonInput: FC<SkeletonInputProps>;
  export const SkeletonList: FC<SkeletonListProps>;
  export const SkeletonParagraph: FC<SkeletonParagraphProps>;
  export const SkeletonTable: FC<SkeletonTableProps>;

  // export const Stepper: FC<>; // TODO: Pull changes from Stepper branch
  export const Tab: FC<TabProps>;
  export const Table: FC<TableProps>;
  export const Toggle: FC<ToggleProps>;

  export const ToggleWrapper: FC<ToggleWrapperProps>;
  export const ToggleItem: FC<ToggleItemProps>;

  export const Typography: FC<TypographyProps>;
}
