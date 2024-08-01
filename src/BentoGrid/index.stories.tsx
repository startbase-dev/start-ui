import React from "react";
import BentoGrid from "./index";

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
        <BentoGrid />
      </div>
    </>
  );
};

export const BentoGridComponent = Template.bind({});
BentoGridComponent.args = { title: "BentoGrid" };

const Component = {
  title: "UI/BentoGrid",
  component: BentoGridComponent,
};

export default Component;
