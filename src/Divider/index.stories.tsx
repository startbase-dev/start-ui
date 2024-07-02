import React from "react";
import Divider from "./index";
import type { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = (args) => {
  const {
    children,
    title,
    ...dividerProps
  } = args;

  const isVertical = args.orientation === "vertical";

  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-evenly",
          flexDirection: isVertical ? "row" : "column",
          height: "200px"
        }}
      >
        <span>Hello</span>
        <Divider {...dividerProps}>
          {children}
        </Divider>
        <span>World</span>
      </div>
    </>
  );
};

export const DividerComponent = Template.bind({});
DividerComponent.args = {
  title: "Divider",
  variant: "fullWidth",
  orientation: "horizontal",
  contentAlign: "center",
  component: "div",
  children: "",
};

export const DividerWithVariant = Template.bind({});
DividerWithVariant.args = {
  title: "Divider with variant",
  variant: "center",
  orientation: "horizontal",
  contentAlign: "center",
  component: "div",
  children: ""
};

export const DividerWithChildren = Template.bind({});
DividerWithChildren.args = {
  title: "Divider with children",
  variant: "fullWidth",
  orientation: "horizontal",
  contentAlign: "center",
  component: "div",
  children: "Hello World"
};

export const DividerWithAlign = Template.bind({});
DividerWithAlign.args = {
  title: "Divider with children",
  variant: "fullWidth",
  orientation: "horizontal",
  contentAlign: "start",
  component: "div",
  children: "Hello World"
};

export const DividerVertical = Template.bind({});
DividerVertical.args = {
  title: "Divider (vertical)",
  variant: "fullWidth",
  orientation: "vertical",
  contentAlign: "center",
  component: "div",
  children: ""
};

const Component = {
  title: "UI/Divider",
  component: DividerComponent,
  argTypes: {
    variant: {
      options: ["fullWidth", "start", "center", "end"],
      control: "radio"
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: "radio"
    },
    contentAlign: {
      options: ["start", "center", "end"],
      control: "radio"
    },
    component: {
      options: ["div", "hr", "li"],
      control: "radio"
    }
  }
};

export default Component;
