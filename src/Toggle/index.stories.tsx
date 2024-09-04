import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Toggle from "./index";
import Storybook from "../Storybook";

export default {
  title: "UI/Toggle",
  component: Toggle,
  argTypes: {
    initialState: { control: "boolean" },
    onToggle: { action: "toggled" },
    color: {
      options: ["primary", "secondary", "destructive"],
      control: { type: "select" },
    },
    variant: {
      options: ["default", "outline"],
      control: { type: "select" },
    },
    size: {
      options: ["icon", "small", "medium", "large"],
      control: { type: "select" },
    },
    fluid: { control: "boolean" },
    className: { control: "text" },
    children: { control: "text" },
  },
  parameters: {
    controls: {
      include: [
        "initialState",
        "color",
        "variant",
        "size",
        "fluid",
        "className",
        "children",
      ],
    },
  },
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (args) => <Toggle {...args} />;

export const DefaultPrimaryToggle = Template.bind({});
DefaultPrimaryToggle.args = {
  initialState: false,
  color: "primary",
  variant: "default",
  size: "medium",
  children: "Toggle",
};

export const DefaultDestructiveToggle = Template.bind({});
DefaultDestructiveToggle.args = {
  initialState: false,
  color: "destructive",
  variant: "default",
  size: "medium",
  children: "Destructive",
};

export const DefaultSecondaryToggle = Template.bind({});
DefaultSecondaryToggle.args = {
  initialState: false,
  color: "secondary",
  variant: "default",
  size: "medium",
  children: "Secondary",
};

export const OutlinePrimaryToggle = Template.bind({});
OutlinePrimaryToggle.args = {
  initialState: false,
  color: "primary",
  variant: "outline",
  size: "medium",
  children: "Primary",
};

export const OutlineSecondaryToggle = Template.bind({});
OutlineSecondaryToggle.args = {
  initialState: false,
  color: "secondary",
  variant: "outline",
  size: "medium",
  children: "Secondary",
};

export const OutlineDestructiveToggle = Template.bind({});
OutlineDestructiveToggle.args = {
  initialState: false,
  color: "destructive",
  variant: "outline",
  size: "medium",
  children: "Destructive",
};

export const SmallIconToggle = Template.bind({});
SmallIconToggle.args = {
  initialState: false,
  color: "secondary",
  variant: "default",
  size: "icon",
  children: "🔔",
};
export const TextAndIconToggle = Template.bind({});
TextAndIconToggle.args = {
  initialState: false,
  color: "secondary",
  variant: "default",
  children: "🔔 For Whom The Bell Tolls 🔔",
};

export const LargeFluidToggle = Template.bind({});
LargeFluidToggle.args = {
  initialState: false,
  color: "destructive",
  variant: "outline",
  size: "large",
  fluid: true,
  children: "Fluid Destructive",
};

export const DisabledPrimaryToggle = Template.bind({});
DisabledPrimaryToggle.args = {
  initialState: false,
  color: "primary",
  variant: "default",
  size: "medium",
  children: "Disabled Toggle",
  disabled: true,
};

const FullShowcaseTemplate: StoryFn<typeof Toggle> = () => {
  return (
    <Storybook title="A Toggle Page">
      <Toggle
        initialState={false}
        color="primary"
        variant="default"
        size="small"
      >
        Small
      </Toggle>
      <Toggle
        initialState={true}
        color="secondary"
        variant="outline"
        size="medium"
      >
        Medium Outline
      </Toggle>
      <Toggle
        initialState={false}
        color="destructive"
        variant="outline"
        size="large"
        fluid
      >
        Large Fluid
      </Toggle>
      <Toggle
        initialState={true}
        color="primary"
        variant="default"
        size="small"
      >
        🔔
      </Toggle>
      <Toggle
        initialState={true}
        color="primary"
        variant="default"
        size="small"
      >
        🔔 For Whom The Bell Tolls 🔔
      </Toggle>
      <Toggle
        initialState={true}
        color="primary"
        variant="default"
        size="small"
        disabled
      >
        Disabled Toggle
      </Toggle>
    </Storybook>
  );
};

export const ToggleShowcase = FullShowcaseTemplate.bind({});
