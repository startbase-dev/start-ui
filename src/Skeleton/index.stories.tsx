import React from "react";
import Skeleton from "./index";

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
        }}
      >
        <Skeleton />
      </div>
    </>
  );
};

export const SkeletonComponent = Template.bind({});
SkeletonComponent.args = { title: "Skeleton" };

const Component = {
  title: "UI/Skeleton",
  component: SkeletonComponent,
};

export default Component;
