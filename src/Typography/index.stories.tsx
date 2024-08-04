import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Typography from "./index";

export default {
  title: "UI/Typography",
  component: Typography,
  argTypes: {
    variant: {
      options: ["title", "subtitle", "paragraph", "muted", "quote"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg", "lead"],
      control: { type: "select" },
    },
    color: {
      options: ["default", "info", "warning", "error", "success"],
      control: { type: "select" },
    },
    decoration: {
      options: ["none", "underline", "overline", "linethrough"],
      control: { type: "select" },
    },
    elementType: {
      options: ["h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
    italic: { control: "boolean" },
    bold: { control: "boolean" },
    gradient: { control: "boolean" },
    className: { control: "text" },
  },
  parameters: {
    controls: {
      include: [
        "variant",
        "size",
        "color",
        "decoration",
        "gradient",
        "italic",
        "bold",
        "className",
      ],
    },
  },
} as Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Title = Template.bind({});
Title.args = {
  variant: "title",
  size: "lead",
  color: "default",
  children: "This is a Title",
  bold: true,
};
Title.parameters = {
  controls: {
    exclude: ["elementType"],
  },
};

export const TitleWithGradient = Template.bind({});
TitleWithGradient.args = {
  variant: "title",
  size: "lead",
  color: "default",
  children: "This is a Title",
  bold: true,
  gradient: true,
};
Title.parameters = {
  controls: {
    exclude: ["elementType"],
  },
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: "subtitle",
  elementType: "h4",
  color: "info",
  children: "This is a Subtitle",
};
Subtitle.parameters = {
  controls: {
    exclude: ["size"],
  },
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: "paragraph",
  size: "md",
  color: "success",
  children: "This is a Paragraph",
  italic: true,
};
Paragraph.parameters = {
  controls: {
    exclude: ["elementType"],
  },
};

export const Muted = Template.bind({});
Muted.args = {
  variant: "muted",
  size: "md",
  color: "default",
  bold: true,
  children: "This is Muted Text with Medium Size",
};
Muted.parameters = {
  controls: {
    exclude: ["elementType"],
  },
};

export const Quote = Template.bind({});
Quote.args = {
  variant: "quote",
  size: "lg",
  color: "error",
  children: `"This is a Quote"`,
};
Quote.parameters = {
  controls: {
    exclude: ["elementType"],
  },
};
