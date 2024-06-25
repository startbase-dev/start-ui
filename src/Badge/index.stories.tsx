import React from "react";
import Badge from "./index";

interface TemplateProps {
  title: string;
  content: string;
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
        <Badge content={args.content} />
      </div>
    </>
  );
};

export const BadgeComponent = Template.bind({});
BadgeComponent.args = { title: "Badge", content: "Badge" };

const Component = {
  title: "UI/Badge",
  component: BadgeComponent,
};

export default Component;
