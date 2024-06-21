import React from "react";
import Dropdown from "./index";

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
        <Dropdown />
      </div>
    </>
  );
};

export const DropdownComponent = Template.bind({});
DropdownComponent.args = { title: "Dropdown" };

const Component = {
  title: "UI/Dropdown",
  component: DropdownComponent,
};

export default Component;
