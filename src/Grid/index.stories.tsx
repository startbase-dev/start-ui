import React, { ReactNode } from 'react';
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
        <Grid container>
          <Grid span={8}>
            <Box>span=8</Box>
          </Grid>
          <Grid span={4}>
            <Box>span=4</Box>
          </Grid>
          <Grid span={4}>
            <Box>span=4</Box>
          </Grid>
          <Grid span={8}>
            <Box>span=8</Box>
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
        <Grid container columns={8}>
          <Grid span={8}>
            <Box>span=8</Box>
          </Grid>
          <Grid span={4}>
            <Box>span=4</Box>
          </Grid>
          <Grid span={4}>
            <Box>span=4</Box>
          </Grid>
          <Grid span={8}>
            <Box>span=8</Box>
          </Grid>
        </Grid>
      </div>

      <h2>Padding & Gap</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <Grid container padding={16} gap={16}>
          <Grid span={8}>
            <Box>span=8</Box>
          </Grid>
          <Grid span={4}>
            <Box>span=4</Box>
          </Grid>
          <Grid span={4}>
            <Box>span=4</Box>
          </Grid>
          <Grid span={8}>
            <Box>span=8</Box>
          </Grid>
        </Grid>
      </div>

      <h2>Independent Row & Column Gaps</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <Grid container rowGap={16} columnGap={32}>
          <Grid span={8}>
            <Box>span=8</Box>
          </Grid>
          <Grid span={4}>
            <Box>span=4</Box>
          </Grid>
          <Grid span={4}>
            <Box>span=4</Box>
          </Grid>
          <Grid span={8}>
            <Box>span=8</Box>
          </Grid>
        </Grid>
      </div>

      <h2>Responsive Design</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <Grid container>
          <Grid span={{ base: 12, sm: 12, md: 8 }}>
            <Box>base=12, sm=12, md=8</Box>
          </Grid>
          <Grid span={{ base: 12, sm: 6, md: 4 }}>
            <Box>base=12, sm=6, md=4</Box>
          </Grid>
          <Grid span={{ base: 12, sm: 6, md: 4 }}>
            <Box>base=12, sm=6, md=4</Box>
          </Grid>
          <Grid span={{ base: 12, sm: 12, md: 8 }}>
            <Box>base=12, sm=12, md=8</Box>
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

function Box({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--sui-primary)',
        color: 'var(--sui-white)',
        borderRadius: '4px',
        padding: '16px 32px',
        display: 'grid',
        placeItems: 'center',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
}
