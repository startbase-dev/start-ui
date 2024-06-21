import React from "react";
import Chip from "./index";

interface TemplateProps {
  title: string;
}

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
        <Chip />
      </div>
    </>
  );
};

export const ChipComponent = Template.bind({});
ChipComponent.args = { title: "Chip" };

const Component = {
  title: "UI/Chip",
  component: ChipComponent,
};

export default Component;
