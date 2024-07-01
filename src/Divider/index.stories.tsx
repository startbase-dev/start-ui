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

const Component = {
  title: "UI/Divider",
  component: DividerComponent,
};

export default Component;
