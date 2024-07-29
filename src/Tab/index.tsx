import React, { forwardRef, useState } from "react";
import s from "./Tab.module.scss";
import clsx from "clsx";
import type { TabProps } from "./types";

const Index = forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const {
    tabs,
    className,
    buttonsClassName,
    contentClassName,
    ...rest
  } = props;
  const rootClassNames = clsx(s.root, className);
  const buttonsClassNames = clsx(s.buttons, buttonsClassName);
  const contentClassNames = clsx(s.content, contentClassName);

  const [tabIndex, setTabIndex] = useState(0);

  const liWidth = `${100 / tabs.length}%`;

  const buttons = tabs.map((tab, index) => (
    <li
      key={`${tab.button}`}
      data-selected={index === tabIndex}
      style={{ "--sui-tab-li-width": liWidth }}
    >
      <button
        onClick={() => setTabIndex(index)}
        disabled={tab.disabled}
      >{tab.button}</button>
    </li>
  ));

  return (
    <div className={rootClassNames} ref={ref} {...rest}>
      <menu className={buttonsClassNames}>
        {buttons}
      </menu>
      <div className={contentClassNames}>
        {tabs[tabIndex]?.content}
      </div>
    </div>
  );
});

Index.displayName = "Tab";

export default Index;
