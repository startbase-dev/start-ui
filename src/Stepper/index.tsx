import React, { forwardRef } from "react";
import s from "./Stepper.module.scss";
import clsx from "clsx";
import Check from "../icons/Check";
import useStepper from "./useStepper";
import Button from "../Button";
import type { StepperProps } from "./types";

const Index = forwardRef<HTMLDivElement, StepperProps>((props, ref) => {
  const { className, steps, finishedContent, ...rest } = props;

  const { step: currentStep, setStep, nextStep, previousStep, resetStep } = useStepper(steps);

  const rootClassNames = clsx(s.root, className);

  const stepsNode = steps.map((step, index) => {
    let state = "unfinished";

    if (currentStep === index) state = "ongoing";
    if (currentStep > index) state = "finished";

    return (
      <li key={step.id} className={s.step} onClick={() => setStep(index)} data-state={state}>
        <div className={s.icon}>
          {state === "finished" ? <Check size={24} /> : index}
        </div>
        <span className={s.label}>
          {step.label}
        </span>
      </li>
    );
  });

  return (
    <div className={rootClassNames} ref={ref} {...rest}>
      <ul className={s.steps}>
        {stepsNode}
      </ul>
      <div className={s.content}>
        {steps[currentStep]?.content ?? finishedContent}
      </div>
      <div className={s.buttons}>
        <Button
          size="small"
          onClick={() => previousStep()}
          disabled={currentStep === 0}
        >Previous</Button>
        <Button
          size="small"
          onClick={() => nextStep()}
          disabled={currentStep === steps.length}
        >Next</Button>
        <Button
          size="small"
          onClick={() => resetStep()}
        >Reset</Button>
      </div>
    </div>
  );
});

Index.displayName = "Stepper";

export default Index;
