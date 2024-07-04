import React from "react";
import Progress from "./index";
import type { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = (args) => {
  const {
    title,
    value,
    ...rest
  } = args;

  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <Progress value={value} {...rest} />
      </div>
    </>
  );
};

export const ProgressComponent = Template.bind({});
ProgressComponent.args = {
  title: "Progress",
  value: 0.5,
  max: 1,
  min: 0,
  variant: "circular",
  color: "primary",
  progressLabel: false,
  determinate: true,
  classNames: [""],
};

const Component = {
  title: "UI/Progress",
  component: ProgressComponent,
  argTypes: {
    variant: {
      options: ["circular", "linear"],
      control: "radio"
    },
    color: {
      options: ["primary", "secondary", "success", "error"],
      control: "radio"
    }
  }
};

export default Component;
