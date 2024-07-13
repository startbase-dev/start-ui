import React, { forwardRef } from "react";
import type { IndexProps } from "./types";
import CircularProgress from "./CircularProgress/CircularProgress";

const Index = forwardRef<SVGSVGElement, IndexProps>((props, ref) => {
  return <CircularProgress {...props} ref={ref} />
});

Index.displayName = "ProgressSVG";

export default Index;
