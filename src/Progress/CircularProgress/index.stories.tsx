import React from "react";
import Progress from "../index";
import type { TemplateProps } from "../types";
import Storybook from "../../Storybook";

const Template: React.FC<TemplateProps> = (args) => {
  const { title, variant } = args;

  return (
    <Storybook title={title}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Progress value={0.5} variant={variant} size={16} />
        <Progress value={0.5} variant={variant} size={32} />
        <Progress value={0.5} variant={variant} size={64} />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          determinate={false}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Progress value={0.5} variant={variant} size={16} color="success" />
        <Progress value={0.5} variant={variant} size={32} color="success" />
        <Progress value={0.5} variant={variant} size={64} color="success" />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          color="success"
          determinate={false}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Progress value={0.5} variant={variant} size={16} color="info" />
        <Progress value={0.5} variant={variant} size={32} color="info" />
        <Progress value={0.5} variant={variant} size={64} color="info" />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          color="info"
          determinate={false}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Progress value={0.5} variant={variant} size={16} color="warning" />
        <Progress value={0.5} variant={variant} size={32} color="warning" />
        <Progress value={0.5} variant={variant} size={64} color="warning" />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          color="warning"
          determinate={false}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Progress value={0.5} variant={variant} size={16} color="error" />
        <Progress value={0.5} variant={variant} size={32} color="error" />
        <Progress value={0.5} variant={variant} size={64} color="error" />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          color="error"
          determinate={false}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Progress value={0.5} variant={variant} size={16} progressLabel />
        <Progress value={0.5} variant={variant} size={32} progressLabel />
        <Progress value={0.5} variant={variant} size={64} progressLabel />
        <Progress
          value={0.5}
          variant={variant}
          size={128}
          progressLabel
          determinate={false}
        />
      </div>
    </Storybook>
  );
};

export const CircularProgressComponent = Template.bind({});
CircularProgressComponent.args = {
  title: "Circular Progress",
  variant: "circular",
};

const Component = {
  title: "UI/Progress",
  component: CircularProgressComponent,
};

export default Component;
