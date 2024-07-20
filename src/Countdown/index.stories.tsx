import React from "react";
import Countdown from "./index";

interface TemplateProps {
  title: string;
  date: Date;
  showDay?: boolean;
  showHour?: boolean;
  showMinute?: boolean;
  showSecond?: boolean;
}

const Template: React.FC<TemplateProps> = (args) => {
  const { title, ...props } = args;

  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <Countdown {...props} />
      </div>
    </>
  );
};

export const CountdownComponent = Template.bind({});
CountdownComponent.args = {
  title: "Default",
  date: new Date("2025-01-01T00:00:00"),
  showDay: true,
  showHour: true,
  showMinute: true,
  showSecond: true,
  itemClassName: "",
  rootClassName: "",
  valueClassName: "",
  labelClassName: "",
};

export const CountdownWithSeperator = Template.bind({});
CountdownWithSeperator.args = {
  ...CountdownComponent.args,
  title: "With Separator",
  type: "withSeperator",
};

export const CountdownWithLabel = Template.bind({});
CountdownWithLabel.args = {
  ...CountdownComponent.args,
  title: "With Labels",
  type: "withLabels",
};

export const CountdownLabelsUnder = Template.bind({});
CountdownLabelsUnder.args = {
  ...CountdownComponent.args,
  title: "Labels Under",
  type: "labelsUnder",
};

export const CountdownInBoxes = Template.bind({});
CountdownInBoxes.args = {
  ...CountdownComponent.args,
  title: "In Boxes",
  type: "inBoxes",
};

const Component = {
  title: "UI/Countdown",
  component: CountdownComponent,
  argTypes: {
    date: {
      control: "date",
    },
    showDay: {
      control: "boolean",
    },
    showHour: {
      control: "boolean",
    },
    showMinute: {
      control: "boolean",
    },
    showSecond: {
      control: "boolean",
    },
    itemClassName: "string",
    rootClassName: "string",
    valueClassName: "string",
    labelClassName: "string",
  },
};

export default Component;
