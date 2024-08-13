export type Step = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export interface StepperProps extends React.AllHTMLAttributes<HTMLDivElement> {
  steps: Step[];
  finishedContent?: React.ReactNode;
  className?: string;
}

export interface StepperTemplateProps extends StepperProps {
  title: string;
}
