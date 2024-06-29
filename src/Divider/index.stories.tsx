import React from "react";
import Divider from "./index";
import type { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = (args) => {
  const {
    children,
    title,
    ...dividerProps
  } = args;

  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          borderLeft: "1px solid red",
          borderRight: "1px solid red",
          height: "50px"
        }}
      >
        <Divider {...dividerProps}>
          {children}
        </Divider>
      </div>
    </>
  );
};

export const DividerComponent = Template.bind({});
DividerComponent.args = {
  title: "Divider",
  variant: "fullWidth",
  orientation: "horizontal",
  contentAlign: "middle",
  component: "div",
  children: "",
};

const Component = {
  title: "UI/Divider",
  component: DividerComponent,
};

export default Component;
