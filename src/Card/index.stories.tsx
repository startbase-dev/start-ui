import React from "react";
import Card from "./index";

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
        <Card />
      </div>
    </>
  );
};

export const CardComponent = Template.bind({});
CardComponent.args = { title: "Card" };

const Component = {
  title: "UI/Card",
  component: CardComponent,
};

export default Component;