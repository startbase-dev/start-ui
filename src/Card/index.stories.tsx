import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card from "./index";
import Storybook from "../Storybook";

export default {
  title: "UI/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    collapsible: { control: "boolean" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    fluid: { control: "boolean" },
    children: { control: "text" },
    className: { control: "text" },
  },
  parameters: {
    controls: {
      include: [
        "title",
        "description",
        "collapsible",
        "size",
        "fluid",
        "children",
        "className",
      ],
    },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: "Introduction to StartUI",
  description: "Learn how StartUI helps you build scalable web apps faster.",
  collapsible: false,
  size: "medium",
  fluid: false,
  children:
    "StartUI provides a comprehensive set of customizable UI components for SaaS applications.",
};

export const FluidCard = Template.bind({});
FluidCard.args = {
  title: "StartUI - Full-Width Design",
  description:
    "This card showcases StartUI's ability to scale across different screen sizes.",
  collapsible: false,
  size: "medium",
  fluid: true,
  children:
    "StartUI components are fully responsive, adjusting seamlessly to the size of the container.",
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  title: "Small Card",
  description: "This is an example of a small card in StartUI.",
  collapsible: false,
  size: "small",
  fluid: false,
  children:
    "Small cards are great for compact data displays and minimal content blocks.",
};

export const LargeCollapsibleCard = Template.bind({});
LargeCollapsibleCard.args = {
  title: "Collapsible Large Card",
  description:
    "Click to expand and learn about how StartUI handles collapsible components.",
  collapsible: true,
  size: "large",
  fluid: false,
  children:
    "StartUI components support advanced interactivity like collapsibility, perfect for dashboards.",
};

const FullShowcaseTemplate: StoryFn<typeof Card> = () => {
  return (
    <Storybook title="StartUI Card Showcase">
      <Card title="Small Card in StartUI" size="small" collapsible={false}>
        Small cards are ideal for presenting brief snippets of information.
      </Card>
      <Card
        title="Medium Card with StartUI"
        description="This is a medium-sized card."
        size="medium"
        collapsible={false}
      >
        Medium cards strike a balance between content and layout, offering ample
        space for text and visuals.
      </Card>
      <Card
        title="Fluid Card in StartUI"
        description="This card showcases the fluid width feature."
        size="large"
        fluid
        collapsible={false}
      >
        StartUI&apos;s fluid cards expand to take up the available width, making
        them highly adaptable to container sizes.
      </Card>
      <Card
        title="Collapsible StartUI Card"
        description="Click to collapse or expand content."
        size="medium"
        collapsible
      >
        This card demonstrates collapsibility, ideal for dashboards or detailed
        sections in SaaS apps.
      </Card>
      <Card
        title="Collapsible Large Card in StartUI"
        description="A large, collapsible card that is also fluid."
        size="large"
        collapsible
        fluid
      >
        Large fluid cards offer flexibility for content-heavy sections, and
        collapsibility adds interactivity.
      </Card>
    </Storybook>
  );
};

export const CardShowcase = FullShowcaseTemplate.bind({});
