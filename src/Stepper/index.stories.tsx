import React from "react";
import Stepper from "./index";
import Storybook from "../Storybook";
import type { StepperTemplateProps, Step } from "./types";

const Template: React.FC<StepperTemplateProps> = (props) => {
  const { title, ...rest } = props;

  const steps: Step[] = [
    {
      id: "step-1",
      label: "Step 1",
      content: "Step 1 content",
    },
    {
      id: "step-2",
      label: "Step 2",
      content: "Step 2 content",
    },
  ];

  return (
    <Storybook title={props.title}>
      <Stepper {...rest} steps={steps} finishedContent={"All steps are finished!"} />
    </Storybook>
  );
};

export const StepperComponent = Template.bind({});
StepperComponent.args = { title: "Stepper" };

const Component = {
  title: "UI/Stepper",
  component: StepperComponent,
};

export default Component;
