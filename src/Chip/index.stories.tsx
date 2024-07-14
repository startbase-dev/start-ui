import React from "react";
import Chip from "./index";
import type { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = (args) => {
  const { title, ...rest } = args;

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
        <Chip {...rest} />
      </div>
    </>
  );
};

export const ChipComponent = Template.bind({});
ChipComponent.args = { title: "Chip", children: "Chip", rootClassName: "" };

const Component = {
  title: "UI/Chip",
  component: ChipComponent,
};

export default Component;
