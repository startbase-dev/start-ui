import React from "react";
import Badge from "./index";
import type { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = (args) => {
  const {
    children,
    ...props
  } = args;

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
        <Badge {...props}>
          {children}
        </Badge>
      </div>
    </>
  );
};

export const BadgeComponent = Template.bind({});
BadgeComponent.args = {
  title: "Badge",
  badgeContent: 10,
  color: "primary",
  variant: "default",
  position: "top-right",
  invisible: false,
  showZero: false,
  max: 99,
  classnames: [""],
  children: <span style={{display: "grid", alignItems: "center", textAlign: "center", width: "70px", height: "50px", border: "1px solid red"}}>Example</span>,
};

const Component = {
  title: "UI/Badge",
  component: BadgeComponent,
};

export default Component;
