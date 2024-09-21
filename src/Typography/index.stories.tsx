import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Typography from './index';
import Storybook from '../Storybook';

export default {
  title: 'UI/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['title', 'subtitle', 'paragraph', 'muted', 'quote'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large', 'lead'],
      control: { type: 'select' },
    },
    color: {
      options: ['default', 'info', 'warning', 'error', 'success'],
      control: { type: 'select' },
    },
    decoration: {
      options: ['none', 'underline', 'overline', 'linethrough'],
      control: { type: 'select' },
    },
    elementType: {
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    italic: { control: 'boolean' },
    bold: { control: 'boolean' },
    gradient: { control: 'boolean' },
    className: { control: 'text' },
  },
  parameters: {
    controls: {
      include: [
        'variant',
        'size',
        'color',
        'decoration',
        'elementType',
        'gradient',
        'italic',
        'bold',
        'className',
      ],
    },
  },
} as Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = (args) => {
  return <Typography {...args}>{args.children}</Typography>;
};

export const Title = Template.bind({});
Title.args = {
  variant: 'title',
  size: 'lead',
  color: 'default',
  children: 'This is a Title',
  bold: true,
};
Title.parameters = {
  controls: {
    exclude: ['elementType'],
  },
};

export const TitleWithGradient = Template.bind({});
TitleWithGradient.args = {
  variant: 'title',
  size: 'lead',
  color: 'default',
  children: 'This is a Title with Gradient',
  bold: true,
  gradient: true,
};
TitleWithGradient.parameters = {
  controls: {
    exclude: ['elementType'],
  },
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: 'subtitle',
  elementType: 'h4',
  color: 'info',
  children: 'This is a Subtitle',
};
Subtitle.parameters = {
  controls: {
    exclude: ['size'],
  },
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: 'paragraph',
  size: 'medium',
  color: 'success',
  children: 'This is a Paragraph with Italic Text',
  italic: true,
};
Paragraph.parameters = {
  controls: {
    exclude: ['elementType'],
  },
};

export const Muted = Template.bind({});
Muted.args = {
  variant: 'muted',
  size: 'medium',
  color: 'default',
  bold: true,
  children: 'This is a Muted Text with Medium Size',
};
Muted.parameters = {
  controls: {
    exclude: ['elementType'],
  },
};

export const Quote = Template.bind({});
Quote.args = {
  variant: 'quote',
  size: 'large',
  color: 'error',
  children: `"This is a Quote"`,
};
Quote.parameters = {
  controls: {
    exclude: ['elementType'],
  },
};

const FullShowcaseTemplate: StoryFn<typeof Typography> = () => {
  return (
    <Storybook title="A Typography Page">
      <Typography variant="title" size="lead">
        StartUi
      </Typography>
      <Typography variant="title" size="large" gradient>
        StartUi
      </Typography>
      <Typography variant="subtitle" elementType="h2" color="success" gradient>
        Open-Source UI Library for Customizable, Modern, and Accessible Web
        Interfaces
      </Typography>
      <Typography variant="subtitle" elementType="h3" color="success">
        Open-Source UI Library for Customizable, Modern, and Accessible Web
        Interfaces
      </Typography>
      <Typography variant="paragraph" size="lead">
        StartUI is an open-source UI library designed to make web development
        more efficient and enjoyable. It offers a comprehensive set of pre-built
        components and utilities that integrate seamlessly with your CSS
        workflow. StartUI emphasizes customization and flexibility, allowing you
        to easily adjust colors, typography, layouts, and other design elements
        to match your project&apos;s unique requirements.
      </Typography>
      <Typography variant="paragraph" size="large" color="warning">
        StartUI is an open-source UI library designed to make web development
        more efficient and enjoyable. It offers a comprehensive set of pre-built
        components and utilities that integrate seamlessly with your CSS
        workflow. StartUI emphasizes customization and flexibility, allowing you
        to easily adjust colors, typography, layouts, and other design elements
        to match your project&apos;s unique requirements.
      </Typography>
      <Typography variant="paragraph" size="medium">
        StartUI is an open-source UI library designed to make web development
        more efficient and enjoyable. It offers a comprehensive set of pre-built
        components and utilities that integrate seamlessly with your CSS
        workflow. StartUI emphasizes customization and flexibility, allowing you
        to easily adjust colors, typography, layouts, and other design elements
        to match your project&apos;s unique requirements.
      </Typography>
      <Typography variant="paragraph" size="small" color="info">
        StartUI is an open-source UI library designed to make web development
        more efficient and enjoyable. It offers a comprehensive set of pre-built
        components and utilities that integrate seamlessly with your CSS
        workflow. StartUI emphasizes customization and flexibility, allowing you
        to easily adjust colors, typography, layouts, and other design elements
        to match your project&apos;s unique requirements.
      </Typography>
      <Typography variant="muted" size="small" bold>
        An Important Notice
      </Typography>
      <Typography variant="quote" size="lead" color="error">
        &quot;Simplicity is the ultimate sophistication.&quot; <br />— Leonardo
        da Vinci
      </Typography>
    </Storybook>
  );
};

export const ATypographyPage = FullShowcaseTemplate.bind({});
