import React from "react";
import { Button } from "nextra/components";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BASE_DOCS_PATH } from "../constants/paths";

interface Props {
  path: string;
}

const ApiReferenceButton: React.FC<Props> = ({ path }) => {
  const handleClick = () => {
    window.open(BASE_DOCS_PATH + path, "_blank");
  };
  return (
    <Button
      onClick={handleClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        margin: "12px 0",
        padding: "4px 8px",
        fontSize: "14px",
      }}
    >
      API References
      <FaExternalLinkAlt />
    </Button>
  );
};

export default ApiReferenceButton;
