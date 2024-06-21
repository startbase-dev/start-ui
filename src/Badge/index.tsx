import React, { forwardRef } from "react";

import s from "./index.module.css";

interface IndexProps {}

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  return <div className={s.root} ref={ref} {...props}></div>;
});

Index.displayName = "Badge";

export default Index;
