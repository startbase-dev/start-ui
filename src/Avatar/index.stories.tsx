import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar from './index';
import Storybook from '../Storybook';

export default {
  title: 'UI/Avatar',
  component: Avatar,
  argTypes: {
    picture: { control: 'text' },
    chars: { control: 'text' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['circular', 'square'],
      control: { type: 'select' },
    },
    defaultPicture: { control: 'text' },
    className: { control: 'text' },
  },
  parameters: {
    controls: {
      include: [
        'picture',
        'chars',
        'size',
        'variant',
        'defaultPicture',
        'className',
      ],
    },
  },
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const CircularMediumAvatarWithImage = Template.bind({});
CircularMediumAvatarWithImage.args = {
  chars: 'SC',
  size: 'medium',
  variant: 'circular',
  picture: 'https://picsum.photos/1390/690',
  className: 'custom-class',
};

export const CircularMediumAvatarWithoutImage = Template.bind({});
CircularMediumAvatarWithoutImage.args = {
  chars: 'BG',
  size: 'medium',
  variant: 'circular',
};

export const SquareLargeAvatar = Template.bind({});
SquareLargeAvatar.args = {
  chars: 'LF',
  size: 'large',
  variant: 'square',
};

export const LargeAvatarWithImage = Template.bind({});
LargeAvatarWithImage.args = {
  picture: 'https://picsum.photos/1390/690',
  size: 'large',
  variant: 'circular',
};

export const AvatarWithDefaultImage = Template.bind({});
AvatarWithDefaultImage.args = {
  chars: 'CL',
  size: 'medium',
  variant: 'square',
  defaultPicture: 'https://picsum.photos/1390/690',
};

export const SmallCircularAvatar = Template.bind({});
SmallCircularAvatar.args = {
  chars: 'TW',
  size: 'small',
  variant: 'circular',
};

export const AnAvatarWithoutProps = Template.bind({});

const FullShowcaseTemplate: StoryFn<typeof Avatar> = () => {
  return (
    <Storybook title="An Avatar Page">
      <Avatar
        chars="NM"
        size="small"
        variant="square"
        defaultPicture="https://picsum.photos/1390/690"
      />
      <Avatar chars="BG" size="small" variant="circular" />
      <Avatar chars="CL" size="medium" variant="square" />
      <Avatar
        picture="https://picsum.photos/1390/690"
        size="large"
        variant="circular"
      />
      <Avatar chars="EE" size="large" variant="square" />
      <Avatar
        chars="GD"
        size="medium"
        variant="circular"
        defaultPicture="https://picsum.photos/1390/690"
      />
      <Avatar
        chars="GD"
        size="large"
        variant="square"
        defaultPicture="https://picsum.photos/1390/690"
      />
    </Storybook>
  );
};

export const AvatarShowcase = FullShowcaseTemplate.bind({});
