import React, { forwardRef, useMemo } from "react";
// eslint-disable-next-line css-modules/no-unused-class
import s from "./index.module.css";
import { getUnitLabel } from "./constants";
import useCountdown from "./hooks/useCountdown";
import clsx from "clsx";

type Type =
  | "default"
  | "withSeperator"
  | "withLabels"
  | "labelsUnder"
  | "inBoxes";

interface IndexProps {
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

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  const {
    date,
    showDay = true,
    showHour = true,
    showMinute = true,
    showSecond = true,
    type = "default",
    itemClassName,
    rootClassName,
    valueClassName,
    labelClassName,
  } = props;

  const timeLeft = useCountdown({
    date,
    showDay,
    showHour,
    showMinute,
    showSecond,
  });

  const itemClassNames = clsx(s.item, itemClassName, s[type]);

  const valueClassNames = clsx(s.value, valueClassName, s[type]);

  const labelClassNames = clsx(s.label, labelClassName, s[type]);

  const format = useMemo(() => {
    if (type === "withSeperator") return "none";
    else if (type === "default") return "oneChar";
    else return "full";
  }, [type]);

  return (
    <div className={clsx(s.root, rootClassName)} ref={ref}>
      {showDay && timeLeft.day !== undefined && (
        <>
          <div className={itemClassNames}>
            <div className={valueClassNames}>{timeLeft.day}</div>
            <div className={labelClassNames}>{getUnitLabel("day", format)}</div>
          </div>
        </>
      )}

      {showHour && timeLeft.hour !== undefined && (
        <>
          <div className={itemClassNames}>
            <div className={valueClassNames}>{timeLeft.hour}</div>
            <div className={labelClassNames}>
              {getUnitLabel("hour", format)}
            </div>
          </div>
        </>
      )}

      {showMinute && timeLeft.minute !== undefined && (
        <>
          <div className={itemClassNames}>
            <div className={valueClassNames}>{timeLeft.minute}</div>
            <div className={labelClassNames}>
              {getUnitLabel("minute", format)}
            </div>
          </div>
        </>
      )}

      {showSecond && timeLeft.second !== undefined && (
        <>
          <div className={itemClassNames}>
            <div className={valueClassNames}>{timeLeft.second}</div>
            <div className={labelClassNames}>
              {getUnitLabel("second", format)}
            </div>
          </div>
        </>
      )}
    </div>
  );
});

Index.displayName = "Countdown";

export default Index;
