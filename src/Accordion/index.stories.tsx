import React from "react";
import Accordion from "./index";
import { AccordionTemplateProps } from "./types";
import Button from "../Button/index";

const Template: React.FC<AccordionTemplateProps> = (args) => {
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
        <Accordion {...props} />
        <Accordion {...props} />
        <Accordion {...props} />
      </div>
    </>
  );
};

export const AccordionComponent = Template.bind({});
AccordionComponent.args = {
  title: "Accordion",
  head: "Accordion Head",
  body: "Accordion Body.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu turpis a ex porttitor ultricies. Duis id tellus sed eros gravida sodales. Nullam dapibus tortor ac odio congue, a pulvinar elit vehicula. Nulla eget ligula ac orci mollis ornare. Nullam facilisis ornare est, vitae vehicula augue aliquam semper. Integer convallis blandit odio, vitae eleifend lectus aliquam at. Phasellus sagittis, dui eget congue vehicula, felis purus consectetur sem, nec dapibus libero lectus in nibh.",
  foot: <Button>Dismiss</Button>,
  headClassName: "",
  bodyClassName: "",
  footClassName: "",
  defaultExpanded: false,
};

const Component = {
  title: "UI/Accordion",
  component: AccordionComponent,
};

export default Component;
