import React from "react";
import Row from "./index";

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
        <Row />
      </div>
    </>
  );
};

export const RowComponent = Template.bind({});
RowComponent.args = { title: "Row" };

const Component = {
  title: "UI/Row",
  component: RowComponent,
};

export default Component;
