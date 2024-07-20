import React from "react";
import ToggleGroup from "./index";

interface TemplateProps {
  title: string;
}

const Template: React.FC<TemplateProps> = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <ToggleGroup />
      </div>
    </>
  );
};

export const ToggleGroupComponent = Template.bind({});
ToggleGroupComponent.args = { title: "ToggleGroup" };

const Component = {
  title: "UI/ToggleGroup",
  component: ToggleGroupComponent,
};

export default Component;
