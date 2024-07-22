import React from "react";
import Accordion from "./index";
import { AccordionTemplateProps } from "./types";
import Button from "../Button/index";
import { useState } from "react";

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

const ControlledTemplate: React.FC<AccordionTemplateProps> = (args) => {
  const { title, ...props } = args;

  const [expanded, setExpanded] = useState("a0");

  function handleExpanded(value: string) {
    if (value === expanded) return setExpanded("a0");
    setExpanded(value);
  };

  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column"
        }}
      >
        <Accordion {...props} summary="Accordion 1" expanded={expanded === "a1"} onExpand={() => handleExpanded("a1")} />
        <Accordion {...props} summary="Accordion 2" expanded={expanded === "a2"} onExpand={() => handleExpanded("a2")} />
        <Accordion {...props} summary="Accordion 3" expanded={expanded === "a3"} onExpand={() => handleExpanded("a3")} />
      </div>
    </>
  );
};

export const AccordionComponent = Template.bind({});
AccordionComponent.args = {
  title: "Accordion",
  summary: "Accordion Head",
  children: "Accordion Body.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu turpis a ex porttitor ultricies. Duis id tellus sed eros gravida sodales. Nullam dapibus tortor ac odio congue, a pulvinar elit vehicula. Nulla eget ligula ac orci mollis ornare. Nullam facilisis ornare est, vitae vehicula augue aliquam semper. Integer convallis blandit odio, vitae eleifend lectus aliquam at. Phasellus sagittis, dui eget congue vehicula, felis purus consectetur sem, nec dapibus libero lectus in nibh.",
  actions: <Button>Accordion Foot</Button>,
  className: "",
  summaryClassName: "",
  actionsClassName: "",
  containerClassName: "",
  defaultExpanded: false,
};

export const AccordionWithControlled = ControlledTemplate.bind({});
AccordionWithControlled.args = {
  ...AccordionComponent.args,
};

const Component = {
  title: "UI/Accordion",
  component: AccordionComponent,
};

export default Component;
