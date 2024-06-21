import React, { forwardRef } from "react";

import s from "./index.module.css";

interface IndexProps {
  content: string;
}

const Index = forwardRef<HTMLSpanElement, IndexProps>((props, ref) => {
  return (
    <span className={s.root} ref={ref} {...props}>
      {props.content}
    </span>
  );
});

Index.displayName = "Chip";

export default Index;
