import React from "react";
import Button from "./index";

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
        <Button />
      </div>
    </>
  );
};

export const ButtonComponent = Template.bind({});
ButtonComponent.args = { title: "Button" };

const Component = {
  title: "UI/Button",
  component: ButtonComponent,
};

export default Component;
