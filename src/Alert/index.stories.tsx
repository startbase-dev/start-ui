import React from 'react';
import Alert from './index';
import type { TemplateProps } from './types';
import Storybook from '../Storybook';

const Template: React.FC<TemplateProps> = (args) => {
  const { children, title, ...props } = args;

  return (
    <Storybook title={title}>
      <Alert {...props}>{children}</Alert>
    </Storybook>
  );
};

export const AlertComponent = Template.bind({});
AlertComponent.args = {
  title: 'Alert',
  children: 'This is an alert',
  severity: 'success',
  variant: 'default',
  color: 'inherit',
  actionElement: undefined,
  icon: true,
  alertTitle: false,
  open: true,
  className: '',
  iconClassName: '',
  bodyClassName: '',
  titleClassName: '',
  textClassName: '',
};

export const AlertWithSeverity = Template.bind({});
AlertWithSeverity.args = {
  ...AlertComponent.args,
  severity: 'error',
  children: 'This is an error',
};

export const AlertWithVariant = Template.bind({});
AlertWithVariant.args = {
  ...AlertComponent.args,
  variant: 'filled',
  children: 'This is a filled alert',
};

export const AlertWithColor = Template.bind({});
AlertWithColor.args = {
  ...AlertComponent.args,
  color: 'warning',
  severity: 'info',
  children: 'This is an info disguised as a warning',
};

export const AlertWithAction = Template.bind({});
AlertWithAction.args = {
  ...AlertComponent.args,
  children:
    'This is an alert with an action button. Try clicking on the button.',
  action: (
    <button onClick={() => window.alert('You clicked me!')}>Click me!</button>
  ),
};

export const AlertWithTitle = Template.bind({});
AlertWithTitle.args = {
  ...AlertComponent.args,
  children: 'This is an alert with title',
  alertTitle: 'Custom Alert Title!',
};

const Component = {
  title: 'UI/Alert',
  component: AlertComponent,
  argTypes: {
    severity: {
      options: ['success', 'info', 'warning', 'error'],
      control: 'radio',
    },
    variant: {
      options: ['default', 'filled', 'outlined'],
      control: 'radio',
    },
    color: {
      options: ['inherit', 'success', 'info', 'warning', 'error'],
      control: 'radio',
    },
  },
};

export default Component;
