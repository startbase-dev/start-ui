import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import WordAnimation from "./index";
import Storybook from "../Storybook";
import s from "./WordAnimationStorybook.module.scss";

export default {
  title: "UI/WordAnimation",
  component: WordAnimation,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
    wordClassName: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof WordAnimation>;

const Template: StoryFn<typeof WordAnimation> = (args) => (
  <Storybook title="WordAnimation">
    <WordAnimation {...args} />
  </Storybook>
);

export const DefaultAnimation = Template.bind({});
DefaultAnimation.args = {
  text: "Start UI is a comprehensive React UI library designed to streamline the development process by offering a versatile collection of over 50 components.",
};

export const WithCustomClasses = Template.bind({});
WithCustomClasses.args = {
  text: "Start UI is a comprehensive React UI library designed to streamline the development process by offering a versatile collection of over 50 components. Whether you’re building complex applications or simple interfaces, Start UI provides the tools you need to create efficient, user-friendly, and visually appealing web applications. Developed as an open-source project by Startbase, Start UI is a testament to the company’s commitment to empowering developers with high-quality, reusable components.",
  className: s.customRootClass,
  wordClassName: s.customWordClass,
};
