import React, { forwardRef } from "react";

import s from "./Container.module.scss";

interface IndexProps {}

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  return <div className={s.root} ref={ref} {...props}></div>;
});

Index.displayName = "Container";

export default Index;
