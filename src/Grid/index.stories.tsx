import React from 'react';
import Grid from './index';
import type { TemplateProps } from './types';

const Template: React.FC<TemplateProps> = (args) => {
  return (
    <>
      <h2>{args.title}</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <Grid container gap={8}>
          <Grid span={8}>
            <span>size=8</span>
          </Grid>
          <Grid span={4}>
            <span>size=4</span>
          </Grid>
          <Grid span={4}>
            <span>size=4</span>
          </Grid>
          <Grid span={8}>
            <span>size=8</span>
          </Grid>
        </Grid>
      </div>
      <h2>Responsive Grid</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <Grid container gap={16}>
          <Grid span={{ base: 6, md: 8 }}>
            <span>base=6 md=8</span>
          </Grid>
          <Grid span={{ base: 6, md: 4 }}>
            <span>base=6 md=4</span>
          </Grid>
          <Grid span={{ base: 6, md: 4 }}>
            <span>base=6 md=4</span>
          </Grid>
          <Grid span={{ base: 6, md: 8 }}>
            <span>base=6 md=8</span>
          </Grid>
          <Grid span={{ base: 6, md: 12 }}>
            <span>base=6 md=12</span>
          </Grid>
        </Grid>
      </div>
      <h2>Row and Column Gaps</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <Grid container gap={16} columnGap={32} rowGap={64}>
          <Grid span={{ base: 6, md: 8 }}>
            <span>base=6 md=8</span>
          </Grid>
          <Grid span={{ base: 6, md: 4 }}>
            <span>base=6 md=4</span>
          </Grid>
          <Grid span={{ base: 6, md: 4 }}>
            <span>base=6 md=4</span>
          </Grid>
          <Grid span={{ base: 6, md: 8 }}>
            <span>base=6 md=8</span>
          </Grid>
          <Grid span={{ base: 6, md: 8 }}>
            <span>base=6 md=8</span>
          </Grid>
        </Grid>
      </div>
      <h2>Custom Columns</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <Grid container columns={{ base: 12, md: 24 }}>
          <Grid span={12}>
            <span>base=6 md=8</span>
          </Grid>
          <Grid span={12}>
            <span>base=6 md=4</span>
          </Grid>
          <Grid span={12}>
            <span>base=6 md=4</span>
          </Grid>
          <Grid span={12}>
            <span>base=6 md=8</span>
          </Grid>
          <Grid span={12}>
            <span>base=6 md=8</span>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export const GridComponent = Template.bind({});
GridComponent.args = { title: 'Grid' };

const Component = {
  title: 'UI/Grid',
  component: GridComponent,
};

export default Component;
