import React, { forwardRef, useState, useEffect } from "react";
import s from "./Tab.module.scss";
import clsx from "clsx";
import type { TabProps } from "./types";

const Index = forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const { tabs, className, buttonsClassName, contentClassName, ...rest } =
    props;
  const rootClassNames = clsx(s.root, className);
  const buttonsClassNames = clsx(s.buttons, buttonsClassName);
  const contentClassNames = clsx(s.content, contentClassName);

  const [tabIndex, setTabIndex] = useState(0);

  const buttons = tabs.map((tab, index) => {
    return (
      <li key={`${tab.button}`} data-selected={index === tabIndex}>
        <button onClick={() => setTabIndex(index)} disabled={tab.disabled}>
          {tab.button}
        </button>
      </li>
    );
  });

  useEffect(() => tabs.forEach((tab, index) => {
    if (tab.defaultOpen) setTabIndex(index);
  }), [tabs]);

  return (
    <div className={rootClassNames} ref={ref} {...rest}>
      <menu className={buttonsClassNames}>{buttons}</menu>
      <div className={contentClassNames}>{tabs[tabIndex]?.content}</div>
    </div>
  );
});

Index.displayName = "Tab";

export default Index;
