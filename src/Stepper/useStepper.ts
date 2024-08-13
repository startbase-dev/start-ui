import { useState } from "react";
import type { Step } from "./types";

export default function useStepper(steps: Step[]) {
  const [step, setStep] = useState(0);

  function nextStep() {
    if (step === steps.length) return;

    setStep(step + 1);
  }

  function previousStep() {
    if (step === 0) return;

    setStep(step - 1);
  }

  function resetStep() {
    setStep(0);
  }

  return { step, setStep, nextStep, previousStep, resetStep };
}
