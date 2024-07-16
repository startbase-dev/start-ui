import React from "react";
import Button from "./index";
import Storybook from "../Storybook";

interface TemplateProps {
  title: string;
}

const Template: React.FC<TemplateProps> = (args) => {
  const { title } = args;

  return (
    <Storybook title={title}>
      <Button size="medium" variant="default" color="primary">
        Button Primary Default
      </Button>
      <Button size="medium" variant="default" color="secondary">
        Button Secondary Default
      </Button>
      <Button size="medium" variant="default" color="destructive">
        Button Destructive Default
      </Button>

      <Button size="medium" variant="outline" color="primary">
        Button Primary Outline
      </Button>
      <Button size="medium" variant="outline" color="secondary">
        Button Secondary Outline
      </Button>
      <Button size="medium" variant="outline" color="destructive">
        Button Destructive Outline
      </Button>

      <Button size="medium" variant="ghost" color="primary">
        Button Primary Ghost
      </Button>
      <Button size="medium" variant="ghost" color="secondary">
        Button Secondary Ghost
      </Button>
      <Button size="medium" variant="ghost" color="destructive">
        Button Destructive Ghost
      </Button>

      <Button size="medium" variant="default" color="primary" disabled>
        Button Primary Default Disabled
      </Button>
      <Button size="medium" variant="default" color="secondary" disabled>
        Button Secondary Default Disabled
      </Button>
      <Button size="medium" variant="default" color="destructive" disabled>
        Button Destructive Default Disabled
      </Button>

      <Button size="small" variant="default" color="primary" loading>
        Button Primary Default Disabled
      </Button>
      <Button size="medium" variant="default" color="secondary" loading>
        Button Secondary Default Disabled
      </Button>
      <Button size="large" variant="default" color="destructive" loading>
        Button Destructive Default Disabled
      </Button>

      <Button size="medium" variant="default" color="primary" fluid>
        Button Primary Default Fluid
      </Button>
    </Storybook>
  );
};

export const ButtonComponent = Template.bind({});
ButtonComponent.args = { title: "Button" };

const Component = {
  title: "UI/Button",
  component: ButtonComponent,
};

export default Component;
