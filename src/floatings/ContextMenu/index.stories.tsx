import React from "react";
import ContextMenu from "./index";
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
      <ContextMenu component={<Button>Click Right</Button>}>
        <FloatingMenuItem label="Undo" />
        <FloatingMenuItem label="Redo" disabled />
        <FloatingMenuItem label="Cut" />
        <ContextMenu label="Copy as">
          <FloatingMenuItem label="Text" />
          <FloatingMenuItem label="Video" />
          <ContextMenu label="Image">
            <FloatingMenuItem label=".png" />
            <FloatingMenuItem label=".jpg" />
            <FloatingMenuItem label=".svg" />
            <FloatingMenuItem label=".gif" />
          </ContextMenu>
          <FloatingMenuItem label="Audio" />
        </ContextMenu>
        <ContextMenu label="Share">
          <FloatingMenuItem label="Mail" />
          <FloatingMenuItem label="Instagram" />
        </ContextMenu>
      </ContextMenu>
    </Storybook>
  );
};

export const ContextMenuComponent = Template.bind({});
ContextMenuComponent.args = { title: "ContextMenu" };

const Component = {
  title: "UI/ContextMenu",
  component: ContextMenuComponent,
};

export default Component;
