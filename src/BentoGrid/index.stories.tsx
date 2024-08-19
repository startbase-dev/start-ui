import React from "react";
import BentoGrid from "./index";
import Storybook from "../Storybook";

interface TemplateProps {
  title: string;
  items: Array<{ element: React.ReactNode; width: number; height: number }>;
}

const Template: React.FC<TemplateProps> = (args) => {
  const { title, ...props } = args;

  return (
    <Storybook title={title}>
      <BentoGrid {...props} />
    </Storybook>
  );
};

export const BentoGridComponent = Template.bind({});
BentoGridComponent.args = {
  title: "BentoGrid",
  items: [
    {
      element: (
        <div style={{ backgroundColor: "lightblue", padding: "12px" }}>
          Item 1
        </div>
      ),
      width: 2,
      height: 1,
    },
    {
      element: (
        <div style={{ backgroundColor: "lightgreen", padding: "12px" }}>
          Item 2
        </div>
      ),
      width: 1,
      height: 1,
    },
    {
      element: (
        <div style={{ backgroundColor: "lightcoral", padding: "12px" }}>
          Item 3
        </div>
      ),
      width: 1,
      height: 1,
    },
    {
      element: (
        <div
          style={{ backgroundColor: "lightgoldenrodyellow", padding: "12px", height: "calc(100% - 24px)" }}>
        >
          Item 4
        </div>
      ),
      width: 1,
      height: 2,
    },
    {
      element: (
        <div style={{ backgroundColor: "lightcoral", padding: "12px" }}>
          Item 5
        </div>
      ),
      width: 3,
      height: 1,
    },
    {
      element: (
        <div style={{ backgroundColor: "lightblue", padding: "12px" }}>
          Item 6
        </div>
      ),
      width: 1,
      height: 1,
    },
    {
      element: (
        <div style={{ backgroundColor: "lightgreen", padding: "12px" }}>
          Item 7
        </div>
      ),
      width: 2,
      height: 1,
    },
  ],
};

const Component = {
  title: "UI/BentoGrid",
  component: BentoGridComponent,
};

export default Component;
