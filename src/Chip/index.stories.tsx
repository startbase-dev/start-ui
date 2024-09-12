import React from "react";
import Chip from "./index";
import type { TemplateProps } from "./types";
import StoryBook from "../Storybook";

const Template: React.FC<TemplateProps> = (args) => {
  const { title, ...rest } = args;

  return (
    <StoryBook title={title}>
      <span>{`Primary`}</span>
      <div style={{ width: "100%" }}>
        <Chip {...rest} color="primary" />
      </div>
      <span>{`Secondary`}</span>
      <div style={{ width: "100%" }}>
        <Chip {...rest} color="secondary" />
      </div>
      <span>{`Info`}</span>
      <div style={{ width: "100%" }}>
        <Chip {...rest} color="info" />
      </div>
      <span>{`Warning`}</span>
      <div style={{ width: "100%" }}>
        <Chip {...rest} color="warning" />
      </div>
      <span>{`Box view`}</span>
      <div style={{ width: "100%" }}>
        <Chip {...rest} color="success" />
      </div>
      <span>{`Error`}</span>
      <div style={{ width: "100%" }}>
        <Chip {...rest} color="error" />
      </div>
    </StoryBook>
  );
};

export const ChipComponent = Template.bind({});
ChipComponent.args = { title: "Chip", children: "Chip", className: "" };

const Component = {
  title: "UI/Chip",
  component: ChipComponent,
};

export default Component;
