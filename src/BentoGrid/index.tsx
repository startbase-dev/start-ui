import React, { forwardRef } from "react";
import s from "./BentoGrid.module.scss";
import { Props } from "./types";

const Index = forwardRef<HTMLDivElement, Props>(({ items, ...rest }, ref) => {
  return (
    <div className={s.libraries} ref={ref} {...rest}>
      {items?.map((item, index) => (
        <div
          key={index}
          className={s.library}
          style={{
            gridColumn: `span ${item.width}`,
            gridRow: `span ${item.height}`,
          }}
        >
          {item.element}
        </div>
      ))}
    </div>
  );
});

Index.displayName = "BentoGrid";

export default Index;
