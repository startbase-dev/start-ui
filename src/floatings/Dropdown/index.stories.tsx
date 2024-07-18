import React from "react";
import Dropdown from "./index";
import Button from "../../Button";
import FloatingMenuItem from "../FloatingMenuItem";
import Storybook from "../../Storybook";

interface TemplateProps {
  title: string;
}

const Template: React.FC<TemplateProps> = (props) => {
  const { title } = props;

  return (
    <Storybook title={title}>
      <Dropdown component={<Button>Dropdown Menu</Button>}>
        <FloatingMenuItem label="Undo" />
        <FloatingMenuItem label="Redo" disabled />
        <FloatingMenuItem label="Cut" />
        <Dropdown label="Copy as">
          <FloatingMenuItem label="Text" />
          <FloatingMenuItem label="Video" />
          <Dropdown label="Image">
            <FloatingMenuItem label=".png" />
            <FloatingMenuItem label=".jpg" />
            <FloatingMenuItem label=".svg" />
            <FloatingMenuItem label=".gif" />
          </Dropdown>
          <FloatingMenuItem label="Audio" />
        </Dropdown>
        <Dropdown label="Share">
          <FloatingMenuItem label="Mail" />
          <FloatingMenuItem label="Instagram" />
        </Dropdown>
      </Dropdown>
    </Storybook>
  );
};

export const DropdownComponent = Template.bind({});
DropdownComponent.args = { title: "Dropdown" };

const Component = {
  title: "UI/Dropdown",
  component: DropdownComponent,
};

export default Component;
