type Unit = "day" | "hour" | "minute" | "second";
export type Format = "oneChar" | "full" | "none";

interface UnitFormatType {
  oneChar: string;
  full: string;
  none: string;
}

const UnitFormat: Record<Unit, UnitFormatType> = {
  day: {
    oneChar: "d",
    full: "Days",
    none: "",
  },
  hour: {
    oneChar: "h",
    full: "Hours",
    none: "",
  },
  minute: {
    oneChar: "m",
    full: "Minutes",
    none: "",
  },
  second: {
    oneChar: "s",
    full: "Seconds",
    none: "",
  },
};

export function getUnitLabel(unit: Unit, format: Format): string {
  return UnitFormat[unit][format];
}
