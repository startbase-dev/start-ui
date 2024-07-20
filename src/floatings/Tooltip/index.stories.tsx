import React from "react";
import Tooltip from "./index";
import Button from "../../Button";
import Storybook from "../../Storybook";

interface TemplateProps {
  title: string;
}

const Template: React.FC<TemplateProps> = (props) => {
  const { title } = props;

  return (
    <Storybook title={title}>
      <Tooltip text="left" placement="left">
        <Button>left</Button>
      </Tooltip>
      <Tooltip text="left-start" placement="left-start">
        <Button>left-start</Button>
      </Tooltip>
      <Tooltip text="left-end" placement="left-end">
        <Button>left-end</Button>
      </Tooltip>
      <Tooltip text="right" placement="right">
        <Button>right</Button>
      </Tooltip>
      <Tooltip text="right-start" placement="right-start">
        <Button>right-start</Button>
      </Tooltip>
      <Tooltip text="right-end" placement="right-end">
        <Button>right-end</Button>
      </Tooltip>
      <Tooltip text="top" placement="top">
        <Button>top</Button>
      </Tooltip>
      <Tooltip text="top-start" placement="top-start">
        <Button>top-start</Button>
      </Tooltip>
      <Tooltip text="top-end" placement="top-end">
        <Button>top-end</Button>
      </Tooltip>
      <Tooltip text="bottom" placement="bottom">
        <Button>bottom</Button>
      </Tooltip>
      <Tooltip text="bottom-start" placement="bottom-start">
        <Button>bottom-start</Button>
      </Tooltip>
      <Tooltip text="bottom-end" placement="bottom-end">
        <Button>bottom-end</Button>
      </Tooltip>
    </Storybook>
  );
};

export const TooltipComponent = Template.bind({});
TooltipComponent.args = { title: "Tooltip" };

const Component = {
  title: "UI/Tooltip",
  component: TooltipComponent,
};

export default Component;
