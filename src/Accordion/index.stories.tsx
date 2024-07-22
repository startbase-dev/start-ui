import React from "react";
import Accordion from "./index";
import { AccordionTemplateProps } from "./types";
import Button from "../Button/index";
import { useState } from "react";

const Template: React.FC<AccordionTemplateProps> = (args) => {
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
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <span>{`Default expanded accordions will be expanded upon page load.`}</span>
        <div>
          <Accordion {...props} />
          <Accordion {...props} summary="Default Expanded Accordion" defaultExpanded />
          <Accordion {...props} />
        </div>
        <span>{`Disabled accordions will not expand or collapse on click. But they will persist their state.`}</span>
        <div>
          <Accordion {...props} summary="Disabled Accordion" disabled />
          <Accordion {...props} summary="Expanded Disabled Accordion" defaultExpanded disabled />
          <Accordion {...props} />
        </div>
        <span>{`Controlled accordions' state is controlled by its parent. In this example, only one accordion can be expanded at a time.`}</span>
        <div>
          <Accordion {...props} summary="Controlled Accordion 1" expanded={expanded === "a1"} onExpand={() => handleExpanded("a1")} />
          <Accordion {...props} summary="Controlled Accordion 2" expanded={expanded === "a2"} onExpand={() => handleExpanded("a2")} />
          <Accordion {...props} summary="Controlled Accordion 3" expanded={expanded === "a3"} onExpand={() => handleExpanded("a3")} />
        </div>
        <span>{`Accordions with "unmountOnExit" will not render their details when collapsed to increase performance. This option also disables the animations.`}</span>
        <div>
          <Accordion {...props} summary="Unmount on Exit Accordion" unmountOnExit />
          <Accordion {...props} summary="Unmount on Exit Accordion" unmountOnExit />
        </div>
      </div>
    </>
  );
};

export const AccordionComponent = Template.bind({});
AccordionComponent.args = {
  title: "Accordion",
  summary: "Accordion Summary",
  children: "Accordion Root.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu turpis a ex porttitor ultricies. Duis id tellus sed eros gravida sodales. Nullam dapibus tortor ac odio congue, a pulvinar elit vehicula. Nulla eget ligula ac orci mollis ornare. Nullam facilisis ornare est, vitae vehicula augue aliquam semper. Integer convallis blandit odio, vitae eleifend lectus aliquam at. Phasellus sagittis, dui eget congue vehicula, felis purus consectetur sem, nec dapibus libero lectus in nibh.",
  actions: <Button>Accordion Actions</Button>,
  className: "",
  summaryClassName: "",
  actionsClassName: "",
  containerClassName: "",
  defaultExpanded: false,
  disabled: false,
  unmountOnExit: false,
};

const Component = {
  title: "UI/Accordion",
  component: AccordionComponent,
};

export default Component;
