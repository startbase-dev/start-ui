export interface StepperProps {
  steps: {
    label: string;
    optional?: boolean;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  }[];
  direction?: "horizontal" | "vertical";
  color?: "primary" | "secondary";
  className?: string;
}

export interface StepProps {
  children: React.ReactNode;
  active: boolean;
  completed: boolean;
  color?: "primary" | "secondary";
  className?: string;
}

export interface StepLabelProps {
  label: string;
  optional?: boolean;
  active: boolean;
  completed: boolean;
  color?: "primary" | "secondary";
  className?: string;
}

export interface StepIconProps {
  icon: React.ReactNode;
  active: boolean;
  completed: boolean;
  color?: "primary" | "secondary";
  className?: string;
}

export interface StepConnectorProps {
  active: boolean;
  completed: boolean;
  color?: "primary" | "secondary";
  className?: string;
}
