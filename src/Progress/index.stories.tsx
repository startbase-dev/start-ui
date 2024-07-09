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
  trackSize: 10,
  classNames: [""],
};

export const ProgressWithVariant = Template.bind({});
ProgressWithVariant.args = {
  ...ProgressComponent.args,
  title: "Progress Linear Variant",
  variant: "linear",
};

export const ProgressWithColor = Template.bind({});
ProgressWithColor.args = {
  ...ProgressComponent.args,
  title: "Progress Color Variants",
  variant: "linear",
  color: "success"
};

export const ProgressWithLabel = Template.bind({});
ProgressWithLabel.args = {
  ...ProgressComponent.args,
  title: "Progress With Label",
  progressLabel: true
};

export const ProgressWithIndeterminate = Template.bind({});
ProgressWithIndeterminate.args = {
  ...ProgressComponent.args,
  title: "Progress Indeterminate Variant",
  determinate: false
};

export const ProgressWithSize = Template.bind({});
ProgressWithSize.args = {
  ...ProgressComponent.args,
  title: "Progress With Track Size",
  determinate: false,
  trackSize: 15
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
