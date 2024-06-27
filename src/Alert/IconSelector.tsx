import React from "react";
import CheckCircleOutline from "../icons/CheckCircleOutline";
import InfoOutline from "../icons/InfoOutline";
import WarningOutline from "../icons/WarningOutline";
import ErrorOutline from "../icons/ErrorOutline";
import type { AlertSeverity } from "./types";

interface SelectorProps extends React.SVGAttributes<SVGSVGElement> {
  iconName: AlertSeverity;
  iconBoolean: boolean;
  icon: React.ReactNode;
  size: number;
};

const iconMap = {
  success: CheckCircleOutline,
  info: InfoOutline,
  warning: WarningOutline,
  error: ErrorOutline,
};

export default function IconSelector({
  iconName,
  iconBoolean,
  icon,
  size,
  ...props
}: SelectorProps) {
  if (icon === false) return null;

  const SelectedIcon = iconMap[iconName];

  if (!SelectedIcon) return <CheckCircleOutline size={size} {...props} />

  return <SelectedIcon size={size} {...props} />
};
