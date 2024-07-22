import React, { forwardRef } from "react";
import UncontrolledAccordion from "./UncontrolledAccordion/UncontrolledAccordion";
import ControlledAccordion from "./ControlledAccordion/ControlledAccordion";
import type { AccordionProps } from "./types";

const Index = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const { expanded } = props;
  const isControlled = typeof expanded === "boolean";

  /**
   * BUGS:
   *  - the expand and collapse animations are interrupted if a user clicks before the animation is complete
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
