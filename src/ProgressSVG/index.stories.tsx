import React from "react";
import ProgressSVG from "./index";
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
          flexDirection: "column"
        }}
      >
        <ProgressSVG value={value} {...rest} />
      </div>
    </>
  );
};

export const ProgressSVGComponent = Template.bind({});
ProgressSVGComponent.args = {
  title: "Progress SVG",
  value: 0.5,
  max: 1,
  min: 0,
  size: 100,
  trackSize: 10,
  variant: "circular",
  progressLabel: false,
  determinate: true,
  className: ""
};

export const ProgressSVGWithVariant = Template.bind({});
ProgressSVGWithVariant.args = {
  ...ProgressSVGComponent.args,
  variant: "linear",
  size: 400
};

export const ProgressSVGWithLabel = Template.bind({});
ProgressSVGWithLabel.args = {
  ...ProgressSVGComponent.args,
  progressLabel: true,
};

export const ProgressSVGWithIndeterminate = Template.bind({});
ProgressSVGWithIndeterminate.args = {
  ...ProgressSVGComponent.args,
  determinate: false
};

const Component = {
  title: "UI/ProgressSVG",
  component: ProgressSVGComponent,
  argTypes: {
    variant: {
      options: ["circular", "linear"],
      control: "radio"
    }
  }
};

export default Component;
