import React from "react";
import Table from "./index";

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
        <Table />
      </div>
    </>
  );
};

export const TableComponent = Template.bind({});
TableComponent.args = { title: "Table" };

const Component = {
  title: "UI/Table",
  component: TableComponent,
};

export default Component;
