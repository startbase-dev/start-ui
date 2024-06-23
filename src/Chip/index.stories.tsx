import React from "react";
import Chip from "./index";
import type { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = (args) => {
  return (
    <>
      <h2>{args.title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <Chip content={args.content} />
      </div>
    </>
  );
};

export const ChipComponent = Template.bind({});
ChipComponent.args = { title: "Chip", content: "Chip" };

const Component = {
  title: "UI/Chip",
  component: ChipComponent,
};

export default Component;
