import React, { useState, forwardRef } from 'react';
import cx from 'clsx';
// eslint-disable-next-line css-modules/no-unused-class
import s from './Stepper.module.scss';
import '../style/components/stepper.scss';
import type {
  StepperProps,
  StepProps,
  StepLabelProps,
  StepConnectorProps,
  StepIconProps,
} from './types';

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    { steps, direction = 'horizontal', color = 'primary', className = '' },
    ref
  ) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completed, setCompleted] = useState(false);

    const handleNext = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else if (currentStep === steps.length - 1) {
        setCompleted(true);
      }
    };

    const handleBack = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    const handleReset = () => {
      setCurrentStep(0);
      setCompleted(false);
    };

    return (
      <div ref={ref} className={cx(s.stepperWrapper, s[color], className)}>
        <div className={cx(s.stepper, s[direction as keyof typeof s])}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Step
                active={index <= currentStep}
                completed={
                  index < currentStep || (completed && index === currentStep)
                }
                color={color}
              >
                <StepIcon
                  icon={
                    index < currentStep ||
                    (completed && index === currentStep) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                      >
                        <path d="M10 15.172l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414L10 15.172z" />
                      </svg>
                    ) : step.icon ? (
                      step.icon
                    ) : (
                      index + 1
                    )
                  }
                  active={index === currentStep}
                  completed={
                    index < currentStep || (completed && index === currentStep)
                  }
                  color={color}
                />
                <StepLabel
                  label={step.label}
                  optional={step.optional}
                  active={index <= currentStep}
                  completed={
                    index < currentStep || (completed && index === currentStep)
                  }
                  color={color}
                />
              </Step>
              {index < steps.length - 1 && (
                <StepConnector
                  active={index < currentStep}
                  completed={index < currentStep || completed}
                  color={color}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {steps[currentStep] && steps[currentStep].content && (
          <div className={s.stepContent}>{steps[currentStep].content}</div>
        )}

        <div className={s.buttonContainer}>
          <button
            className={s.button}
            onClick={handleBack}
            disabled={currentStep === 0 || completed}
          >
            Back
          </button>
          {completed ? (
            <button className={s.button} onClick={handleReset}>
              Reset
            </button>
          ) : (
            <button className={s.button} onClick={handleNext}>
              {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';

export const Step = ({
  children,
  active,
  completed,
  color = 'primary',
  className = '',
}: StepProps) => {
  return (
    <div
      className={cx(
        s.step,
        { [s.active]: active, [s.completed]: completed, [s[color]]: true },
        className
      )}
    >
      {children}
    </div>
  );
};
Step.displayName = 'Step';

export const StepLabel = ({
  label,
  optional,
  active,
  completed,
  color = 'primary',
  className = '',
}: StepLabelProps) => {
  return (
    <div
      className={cx(
        s.stepLabel,
        { [s.active]: active, [s.completed]: completed, [s[color]]: true },
        className
      )}
    >
      {label} {optional && <span>(Optional)</span>}
    </div>
  );
};
StepLabel.displayName = 'StepLabel';

export const StepIcon = ({
  icon,
  active,
  completed,
  color = 'primary',
  className = '',
}: StepIconProps) => {
  return (
    <div
      className={cx(
        s.stepIcon,
        {
          [s.active]: active,
          [s.completed]: completed,
          [s[color]]: true,
        },
        className
      )}
    >
      {icon}
    </div>
  );
};
StepIcon.displayName = 'StepIcon';

export const StepConnector = ({
  active,
  completed,
  color = 'primary',
  className = '',
}: StepConnectorProps) => {
  return (
    <div
      className={cx(
        s.stepConnector,
        { [s.active]: active, [s.completed]: completed, [s[color]]: true },
        className
      )}
    />
  );
};
StepConnector.displayName = 'StepConnector';

export {
  type StepperProps,
  type StepProps,
  type StepLabelProps,
  type StepConnectorProps,
  type StepIconProps,
};
