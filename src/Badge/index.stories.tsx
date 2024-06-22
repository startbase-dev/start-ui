import React from "react";
import Badge from "./index";
import type { IndexProps } from "./index";

interface TemplateProps extends IndexProps {
  title: string;
}

const Template: React.FC<TemplateProps> = (args) => {
  const {
    children,
    badgeContent,
    color,
    variant,
    position,
    invisible,
    showZero,
    max
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
        <Badge
          badgeContent={badgeContent}
          color={color}
          variant={variant}
          position={position}
          invisible={invisible}
          showZero={showZero}
          max={max}
        >
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
  children: <span style={{display: "grid", alignItems: "center", textAlign: "center", width: "70px", height: "50px", border: "1px solid red"}}>Example</span>,
};

const Component = {
  title: "UI/Badge",
  component: BadgeComponent,
};

export default Component;
