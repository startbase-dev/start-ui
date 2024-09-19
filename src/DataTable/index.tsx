import React, { forwardRef } from 'react';

import s from './DataTable.module.scss';

interface IndexProps {}

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  return <div className={s.root} ref={ref} {...props}></div>;
});

Index.displayName = 'DataTable';

export default Index;
