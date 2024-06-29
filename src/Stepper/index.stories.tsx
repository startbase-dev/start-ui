import React from "react";
import Stepper from "./index";

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
        <Stepper />
      </div>
    </>
  );
};

export const StepperComponent = Template.bind({});
StepperComponent.args = { title: "Stepper" };

const Component = {
  title: "UI/Stepper",
  component: StepperComponent,
};

export default Component;