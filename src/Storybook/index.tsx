import React from "react";
import Divider from "../Divider";

const Index = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          border: "1px solid #ddd",
          borderRadius: "1rem",
        }}
      >
        <div
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            padding: "2rem",
            gap: "1rem",
            width: "50%",
            borderBottomLeftRadius: "1rem",
            borderTopLeftRadius: "1rem",
            alignItems: "center",
          }}
        >
          <Divider>Light</Divider>
          {children}
        </div>
        <div
          data-theme="dark"
          style={{
            background: "#000",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            padding: "2rem",
            gap: "1rem",
            width: "50%",
            borderBottomRightRadius: "1rem",
            borderTopRightRadius: "1rem",
            alignItems: "center",
          }}
        >
          <Divider style={{ color: "white" }}>Dark</Divider>
          {children}
        </div>
      </div>
    </>
  );
};

export default Index;
