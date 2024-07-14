import React from "react";
import Progress from "./index";
import type { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = (args) => {
  const { title, value, ...rest } = args;

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
  size: 100,
  trackSize: 10,
  variant: "circular",
  progressLabel: false,
  determinate: true,
  className: "",
};

export const ProgressWithVariant = Template.bind({});
ProgressWithVariant.args = {
  ...ProgressComponent.args,
  variant: "linear",
  size: 400,
};

export const ProgressWithLabel = Template.bind({});
ProgressWithLabel.args = {
  ...ProgressComponent.args,
  progressLabel: true,
};

export const ProgressWithIndeterminate = Template.bind({});
ProgressWithIndeterminate.args = {
  ...ProgressComponent.args,
  determinate: false,
};

const Component = {
  title: "UI/Progress",
  component: ProgressComponent,
  argTypes: {
    variant: {
      options: ["circular", "linear"],
      control: "radio",
    },
  },
};

export default Component;
