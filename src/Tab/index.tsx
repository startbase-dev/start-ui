import React, { forwardRef, useState } from 'react';
import s from './Tab.module.scss';
import clsx from 'clsx';
import type { TabProps } from './types';

const Tab = forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const {
    tabs,
    className,
    buttonsClassName,
    contentClassName,
    variant,
    ...rest
  } = props;
  const rootClassNames = clsx(s.root, className);
  const buttonsClassNames = clsx(s.buttons, buttonsClassName);
  const contentClassNames = clsx(s.content, contentClassName);

  // find the first defaultOpen tab that is not disabled
  const defaultOpenIndex = tabs.findIndex((tab) => tab.open && !tab.disabled);

  // find the first not disabled tab
  const notDisabledTab = tabs.findIndex((tab) =>
    tab.disabled === undefined ? true : !tab.disabled
  );

  const defaultIndex =
    defaultOpenIndex === -1 ? notDisabledTab : defaultOpenIndex;
  const [tabIndex, setTabIndex] = useState(defaultIndex);

  const buttons = tabs.map((tab, index) => {
    return (
      <li key={`${tab.button}`} data-selected={index === tabIndex}>
        <button onClick={() => setTabIndex(index)} disabled={tab.disabled}>
          {tab.button}
        </button>
      </li>
    );
  });

  return (
    <div className={rootClassNames} ref={ref} data-variant={variant} {...rest}>
      <menu className={buttonsClassNames}>{buttons}</menu>
      <div className={contentClassNames}>{tabs[tabIndex]?.content}</div>
    </div>
  );
});

Tab.displayName = 'Tab';

export default Tab;
export { type TabProps };
