import React, { useState, ReactElement } from "react";
import { Accordion } from "@start-base/start-ui";
interface Props {
  children: ReactElement;
}

const ControlledAccordion: React.FC<Props> = ({ children, ...props }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpanded = (panel: string) => {
    setExpanded(expanded === panel ? null : panel);
  };

  return (
    <Accordion
      {...props}
      expanded={expanded === "a1"}
      onExpand={() => handleExpanded("a1")}
    >
      {children}
    </Accordion>
  );
};

export default ControlledAccordion;
