import React from "react";
import Toggle from "./index";

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
        <Toggle />
      </div>
    </>
  );
};

export const ToggleComponent = Template.bind({});
ToggleComponent.args = { title: "Toggle" };

const Component = {
  title: "UI/Toggle",
  component: ToggleComponent,
};

export default Component;
