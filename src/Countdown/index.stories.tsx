import React from "react";
import Countdown from "./index";
import StoryBook from "../Storybook";

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
    <StoryBook title={title}>
      <span>{`Default view`}</span>
      <div style={{ width: "100%" }}>
        <Countdown {...props} />
      </div>
      <span>{`Labels separator`}</span>
      <div style={{ width: "100%" }}>
        <Countdown {...props} type="withSeparator" />
      </div>
      <span>{`Labels view`}</span>
      <div style={{ width: "100%" }}>
        <Countdown {...props} type="withLabels" />
      </div>
      <span>{`Labels under view`}</span>
      <div style={{ width: "100%" }}>
        <Countdown {...props} type="labelsUnder" />
      </div>
      <span>{`Box view`}</span>
      <div style={{ width: "100%" }}>
        <Countdown {...props} type="inBoxes" />
      </div>
    </StoryBook>
  );
};

export const CountdownComponent = Template.bind({});
CountdownComponent.args = {
  title: "Default",
  date: new Date("2025-01-01T00:00:00"),
  showDay: true,
  showHour: true,
  showMinute: true,
  showSecond: false,
  itemClassName: "",
  rootClassName: "",
  valueClassName: "",
  labelClassName: "",
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
