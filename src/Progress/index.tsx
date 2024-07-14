import React, { forwardRef } from "react";
import type { ProgressProps } from "./types";
import CircularProgress from "./CircularProgress/CircularProgress";
import LinearProgress from "./LinearProgress/LinearProgress";

const Index = forwardRef<SVGSVGElement, ProgressProps>((props, ref) => {
  const { variant = "circular", ...rest } = props;
  const isVariantCircular = variant === "circular";

  return isVariantCircular ? (
    <CircularProgress {...rest} ref={ref} />
  ) : (
    <LinearProgress {...rest} ref={ref} />
  );
});

Index.displayName = "Progress";

export default Index;
