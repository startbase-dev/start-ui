type Type =
  | 'withSeparator'
  | 'withLabels'
  | 'labelsUnder'
  | 'inBoxes'
  | 'default';

export interface CountdownProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  date: Date | number;
  showDay?: boolean;
  showHour?: boolean;
  showMinute?: boolean;
  showSecond?: boolean;
  type?: Type;
  itemClassName?: string;
  rootClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
}
