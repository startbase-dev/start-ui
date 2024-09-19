import React from 'react';
import Progress from '../index';
import type { TemplateProps } from '../types';
import Storybook from '../../Storybook';

const Template: React.FC<TemplateProps> = (args) => {
  const { title, variant } = args;

  return (
    <Storybook title={title}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          height: '100px',
        }}
      >
        <Progress value={0.5} variant={variant} size={128} />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          determinate={false}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          height: '100px',
        }}
      >
        <Progress value={0.5} variant={variant} size={128} color="success" />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          color="success"
          determinate={false}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          height: '100px',
        }}
      >
        <Progress value={0.5} variant={variant} size={128} color="info" />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          color="info"
          determinate={false}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          height: '100px',
        }}
      >
        <Progress value={0.5} variant={variant} size={128} color="warning" />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          color="warning"
          determinate={false}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          height: '100px',
        }}
      >
        <Progress value={0.5} variant={variant} size={128} color="error" />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          color="error"
          determinate={false}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          height: '100px',
        }}
      >
        <Progress value={0.5} variant={variant} size={128} progressLabel />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          progressLabel
          determinate={false}
        />
      </div>
    </Storybook>
  );
};

export const LinearProgressComponent = Template.bind({});
LinearProgressComponent.args = {
  title: 'Linear Progress',
  variant: 'linear',
};

const Component = {
  title: 'UI/Progress',
  component: LinearProgressComponent,
};

export default Component;
