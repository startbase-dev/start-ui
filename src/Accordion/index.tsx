import React, { forwardRef } from "react";
import UncontrolledAccordion from "./UncontrolledAccordion/UncontrolledAccordion";
import ControlledAccordion from "./ControlledAccordion/ControlledAccordion";
import type { AccordionProps } from "./types";

const Index = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const { expanded } = props;
  const isControlled = typeof expanded === "boolean";

  /**
   * TODO:
   *  - add unmountOnExit option
   */

  if (isControlled) {
    // redundant checks to satisfy TypeScript
    const controlledProps = props as AccordionProps & { expanded: boolean, onExpand: () => void };
    return <ControlledAccordion {...controlledProps} ref={ref} />
  };

  return <UncontrolledAccordion {...props} ref={ref} />
});

Index.displayName = "Accordion";

export default Index;
