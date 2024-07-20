import React, { forwardRef } from "react";

import s from "./Stepper.module.scss";

interface IndexProps {}

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  return <div className={s.root} ref={ref} {...props}></div>;
});

Index.displayName = "Stepper";

export default Index;
