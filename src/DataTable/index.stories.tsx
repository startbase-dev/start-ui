import React from "react";
import DataTable from "./index";

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
        <DataTable />
      </div>
    </>
  );
};

export const DataTableComponent = Template.bind({});
DataTableComponent.args = { title: "DataTable" };

const Component = {
  title: "UI/DataTable",
  component: DataTableComponent,
};

export default Component;