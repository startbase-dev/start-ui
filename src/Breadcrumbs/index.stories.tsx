import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Breadcrumbs from './index';
import Storybook from '../Storybook';

export default {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;

const Template: StoryFn = () => {
  const breadcrumbReplace = [
    { find: 'dashboard', replace: 'Dashboard' },
    { find: 'settings', replace: 'Settings' },
    { find: 'profile', replace: 'User Profile' },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbReplace={breadcrumbReplace} />
    </div>
  );
};

export const DefaultBreadcrumbs = Template.bind({});

const CustomSeparatorTemplate: StoryFn = () => {
  const breadcrumbReplace = [
    { find: 'home', replace: 'Home' },
    { find: 'about', replace: 'About Us' },
    { find: 'services', replace: 'Our Services' },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbReplace={breadcrumbReplace} separator="|" />
    </div>
  );
};

export const CustomSeparatorBreadcrumbs = CustomSeparatorTemplate.bind({});

const FullShowcaseTemplate: StoryFn = () => {
  const breadcrumbReplace = [
    { find: 'dashboard', replace: 'Dashboard' },
    { find: 'settings', replace: 'Settings' },
    { find: 'profile', replace: 'User Profile' },
  ];

  return (
    <Storybook title="Breadcrumbs Showcase">
      <div>
        <h3>Default Breadcrumbs</h3>
        <Breadcrumbs breadcrumbReplace={breadcrumbReplace} />
      </div>
      <div>
        <h3>Custom Separator Breadcrumbs</h3>
        <Breadcrumbs breadcrumbReplace={breadcrumbReplace} separator="|" />
      </div>
    </Storybook>
  );
};

export const BreadcrumbsFullShowcase = FullShowcaseTemplate.bind({});
