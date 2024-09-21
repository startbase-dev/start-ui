import React from 'react';
import CheckCircleOutline from '../icons/CheckCircleOutline';
import InfoCircleOutline from '../icons/InfoCircleOutline';
import WarningCircleOutline from '../icons/WarningCircleOutline';
import ErrorCircleOutline from '../icons/ErrorCircleOutline';
import type { AlertSeverity } from './types';

interface SelectorProps extends React.SVGAttributes<SVGSVGElement> {
  iconName: AlertSeverity;
  icon: React.ReactNode;
  size: number;
}

const iconMap = {
  success: CheckCircleOutline,
  info: InfoCircleOutline,
  warning: WarningCircleOutline,
  error: ErrorCircleOutline,
};

export default function IconSelector({
  iconName,
  icon,
  size,
  ...props
}: Readonly<SelectorProps>) {
  if (icon === false) return null;

  const SelectedIcon = iconMap[iconName];

  if (!SelectedIcon) return <CheckCircleOutline size={size} {...props} />;

  return <SelectedIcon size={size} {...props} />;
}
