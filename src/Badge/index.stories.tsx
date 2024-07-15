import React from "react";
import Badge from "./index";
import type { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = (args) => {
  const { title, children, ...rest } = args;

  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <Badge {...rest}>{children}</Badge>
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
  rootClassName: "",
  countClassName: "",
  children: (
    <span
      style={{
        display: "grid",
        alignItems: "center",
        textAlign: "center",
        width: "70px",
        height: "50px",
        border: "1px solid red",
      }}
    >
      Example
    </span>
  ),
};

export const BadgeWithColor = Template.bind({});
BadgeWithColor.args = {
  ...BadgeComponent.args,
  color: "success",
};

export const BadgeWithVariant = Template.bind({});
BadgeWithVariant.args = {
  ...BadgeComponent.args,
  title: "Badge with dot variant",
  variant: "dot",
};

export const BadgeWithPosition = Template.bind({});
BadgeWithPosition.args = {
  ...BadgeComponent.args,
  title: "Badge with position",
  position: "top-left",
};

export const BadgeWithZero = Template.bind({});
BadgeWithZero.args = {
  ...BadgeComponent.args,
  title: "Badge with display zero",
  showZero: true,
  badgeContent: 0,
};

export const BadgeWithMax = Template.bind({});
BadgeWithMax.args = {
  ...BadgeComponent.args,
  title: "Badge with max content",
  badgeContent: 500,
};

const Component = {
  title: "UI/Badge",
  component: BadgeComponent,
  argTypes: {
    color: {
      options: ["primary", "secondary", "success", "error"],
      control: "radio",
    },
    variant: {
      options: ["default", "dot"],
      control: "radio",
    },
    position: {
      options: [
        "top-left",
        "top",
        "top-right",
        "right",
        "bottom-right",
        "bottom",
        "bottom-left",
        "left",
      ],
      control: "radio",
    },
  },
};

export default Component;
