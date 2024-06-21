import React from "react";
import Badge from "./index";

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
        <Badge />
      </div>
    </>
  );
};

export const BadgeComponent = Template.bind({});
BadgeComponent.args = { title: "Badge" };

const Component = {
  title: "UI/Badge",
  component: BadgeComponent,
};

export default Component;
