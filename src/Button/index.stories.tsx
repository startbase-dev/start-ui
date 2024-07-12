import React from "react";
import Button from "./index";

interface TemplateProps {
  title: string;
}

const Template: React.FC<TemplateProps> = (args) => {
  return (
    <>
      <h2>{args.title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Button size="medium" variant="default" color="primary">
          Button Default Primary
        </Button>
        <Button size="medium" variant="default" color="secondary">
          Button Default Secondary
        </Button>
        <Button size="medium" variant="default" color="destructive">
          Button Default Destructive
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
      </div>
    </>
  );
};

export const ButtonComponent = Template.bind({});
ButtonComponent.args = { title: "Button" };

const Component = {
  title: "UI/Button",
  component: ButtonComponent,
};

export default Component;
