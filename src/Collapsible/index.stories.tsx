import React from "react";
import Collapsible from "./index";

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
        <Collapsible />
      </div>
    </>
  );
};

export const CollapsibleComponent = Template.bind({});
CollapsibleComponent.args = { title: "Collapsible" };

const Component = {
  title: "UI/Collapsible",
  component: CollapsibleComponent,
};

export default Component;