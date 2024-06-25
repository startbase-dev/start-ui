import React from "react";
import Alert from "./index";
import type { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = (args) => {
  const { children, ...props } = args;

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
        <Alert {...props}>
          {children}
        </Alert>
      </div>
    </>
  );
};

export const AlertComponent = Template.bind({});
AlertComponent.args = {
  title: "Alert",
  children: "This is an alert",
  severity: "success",
  variant: "default",
  color: "inherit",
  action: <button>Button</button>,
  icon: true,
  alertTitle: false,
  open: true,
};

const Component = {
  title: "UI/Alert",
  component: AlertComponent,
};

export default Component;
