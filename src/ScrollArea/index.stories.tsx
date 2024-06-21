import React from "react";
import ScrollArea from "./index";

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
        <ScrollArea />
      </div>
    </>
  );
};

export const ScrollAreaComponent = Template.bind({});
ScrollAreaComponent.args = { title: "ScrollArea" };

const Component = {
  title: "UI/ScrollArea",
  component: ScrollAreaComponent,
};

export default Component;
