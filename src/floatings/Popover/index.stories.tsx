import React from "react";
import Popover from "./index";
import Button from "../../Button";
import Storybook from "../../Storybook";

interface TemplateProps {
  title: string;
}

const Template: React.FC<TemplateProps> = (props) => {
  const { title } = props;

  const content = (
    <>
      <h3>Title</h3>
      <div>Lorem dolor sit amet.</div>
    </>
  );

  return (
    <Storybook title={title}>
      <Popover popper={<Button>left</Button>} placement="left">
        {content}
      </Popover>
      <Popover popper={<Button>left-start</Button>} placement="left-start">
        {content}
      </Popover>
      <Popover popper={<Button>left-end</Button>} placement="left-end">
        {content}
      </Popover>
      <Popover popper={<Button>right</Button>} placement="right">
        {content}
      </Popover>
      <Popover popper={<Button>right-start</Button>} placement="right-start">
        {content}
      </Popover>
      <Popover popper={<Button>right-end</Button>} placement="right-end">
        {content}
      </Popover>
      <Popover popper={<Button>top</Button>} placement="top">
        {content}
      </Popover>
      <Popover popper={<Button>top-start</Button>} placement="top-start">
        {content}
      </Popover>
      <Popover popper={<Button>top-end</Button>} placement="top-end">
        {content}
      </Popover>
      <Popover popper={<Button>bottom</Button>} placement="bottom">
        {content}
      </Popover>
      <Popover popper={<Button>bottom-start</Button>} placement="bottom-start">
        {content}
      </Popover>
      <Popover popper={<Button>bottom-end</Button>} placement="bottom-end">
        {content}
      </Popover>
    </Storybook>
  );
};

export const PopoverComponent = Template.bind({});
PopoverComponent.args = { title: "Popover" };

const Component = {
  title: "UI/Popover",
  component: PopoverComponent,
};

export default Component;
