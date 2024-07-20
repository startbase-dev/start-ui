import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  SkeletonAvatar,
  SkeletonButton,
  SkeletonParagraph,
  SkeletonTable,
  SkeletonCard,
  SkeletonList,
  SkeletonImage,
  SkeletonInput,
} from "./index";
import {
  SkeletonAvatarProps,
  SkeletonButtonProps,
  SkeletonParagraphProps,
  SkeletonTableProps,
  SkeletonCardProps,
  SkeletonListProps,
  SkeletonImageProps,
  SkeletonInputProps,
} from "./types";

export default {
  title: "UI/Skeleton",
} as Meta;

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  margin: "24px",
};

// Avatar Component
const AvatarTemplate: StoryFn = (
  args: React.JSX.IntrinsicAttributes & SkeletonAvatarProps,
) => (
  <div style={style}>
    <SkeletonAvatar {...args} />
  </div>
);
export const Avatar = AvatarTemplate.bind({});
Avatar.args = {
  size: "50px",
};
Avatar.storyName = "Avatar Skeleton";

// Button Component
const ButtonTemplate: StoryFn = (
  args: React.JSX.IntrinsicAttributes & SkeletonButtonProps,
) => (
  <div style={style}>
    <SkeletonButton {...args} />
  </div>
);

export const Button = ButtonTemplate.bind({});
Button.args = {
  width: "150px",
  height: "48px",
};
Button.storyName = "Button Skeleton";

// Paragraph Component
const ParagraphTemplate: StoryFn = (
  args: React.JSX.IntrinsicAttributes & SkeletonParagraphProps,
) => (
  <div style={style}>
    <SkeletonParagraph {...args} />
  </div>
);

export const Paragraph = ParagraphTemplate.bind({});
Paragraph.args = {
  lines: 3,
};
Paragraph.storyName = "Paragraph Skeleton";

// Table Component
const TableTemplate: StoryFn = (
  args: React.JSX.IntrinsicAttributes & SkeletonTableProps,
) => (
  <div style={style}>
    <SkeletonTable {...args} />
  </div>
);

export const Table = TableTemplate.bind({});
Table.args = {
  rows: 5,
  columns: 3,
};
Table.storyName = "Table Skeleton";

// Card Component
const CardTemplate: StoryFn = (
  args: React.JSX.IntrinsicAttributes & SkeletonCardProps,
) => (
  <div style={style}>
    <SkeletonCard {...args} />
  </div>
);

export const Card = CardTemplate.bind({});
Card.args = {
  width: "300px",
  height: "150px",
};
Card.storyName = "Card Skeleton";

// List Component
const ListTemplate: StoryFn = (
  args: React.JSX.IntrinsicAttributes & SkeletonListProps,
) => (
  <div style={style}>
    <SkeletonList {...args} />
  </div>
);
export const List = ListTemplate.bind({});
List.args = {
  itemCount: 5,
};
List.storyName = "List Skeleton";

// Image Component
const ImageTemplate: StoryFn = (
  args: React.JSX.IntrinsicAttributes & SkeletonImageProps,
) => (
  <div style={style}>
    <SkeletonImage {...args} />
  </div>
);
export const Image = ImageTemplate.bind({});
Image.args = {
  width: "300px",
  height: "200px",
};
Image.storyName = "Image Skeleton";

// Input Component
const InputTemplate: StoryFn = (
  args: React.JSX.IntrinsicAttributes & SkeletonInputProps,
) => (
  <div style={style}>
    <SkeletonInput {...args} />
  </div>
);
export const Input = InputTemplate.bind({});
Input.args = {
  width: "300px",
  height: "40px",
};
Input.storyName = "Input Skeleton";
