import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Stepper } from "./index";
import Storybook from "../Storybook";

export default {
  title: "UI/Stepper",
  component: Stepper,
} as Meta<typeof Stepper>;

const Template: StoryFn = () => {
  const steps = [
    {
      label: "Step 1: Plan the Website",
      content: (
        <p>
          In this step, you gather requirements, research your audience, and
          define the goals and objectives of the website.
        </p>
      ),
    },
    {
      label: "Step 2: Design the Website",
      optional: true,
      content: (
        <p>
          Create wireframes, mockups, and prototypes to visualize the structure
          and design of the website.
        </p>
      ),
    },
    {
      label: "Step 3: Develop the Website",
      content: (
        <p>
          Start coding! Set up the environment, build the frontend, and connect
          it with the backend if necessary.
        </p>
      ),
    },
  ];

  return (
    <div>
      <Stepper steps={steps} direction="horizontal" />
    </div>
  );
};

export const HorizontalStepper = Template.bind({});

const VerticalTemplate: StoryFn = () => {
  const steps = [
    {
      label: "Step 1: Gather Requirements",
      content: (
        <p>
          Identify key features, user personas, and the overall purpose of the
          web application.
        </p>
      ),
    },
    {
      label: "Step 2: Create a Wireframe",
      optional: true,
      content: <p>Design the structure and layout of the website.</p>,
    },
    {
      label: "Step 3: Write the Code",
      content: <p>Implement the design with HTML, CSS, and JavaScript.</p>,
    },
  ];

  return (
    <div>
      <Stepper steps={steps} direction="vertical" />
    </div>
  );
};

export const VerticalStepper = VerticalTemplate.bind({});

const HorizontalContent: StoryFn = () => {
  const steps = [
    {
      label: "Step 1: Choose a Tech Stack",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M208,96H147.32L101.66,50.34A8,8,0,0,0,96,48H88A16,16,0,0,0,72.83,69.06l9,26.94H59.32L37.66,74.34A8,8,0,0,0,32,72H24A16,16,0,0,0,8.69,92.6l14.07,46.89A39.75,39.75,0,0,0,61.07,168H240a8,8,0,0,0,8-8V136A40,40,0,0,0,208,96Zm24,56H61.07a23.85,23.85,0,0,1-23-17.1L24,88h4.68l21.66,21.66A8,8,0,0,0,56,112h36.9a8,8,0,0,0,7.59-10.53L88,64h4.68l45.66,45.66A8,8,0,0,0,144,112h64a24,24,0,0,1,24,24Zm-8,48a16,16,0,1,1-16-16A16,16,0,0,1,224,200Zm-96,0a16,16,0,1,1-16-16A16,16,0,0,1,128,200Z"></path>
        </svg>
      ),
      content: (
        <p>
          Decide on the frameworks, languages, and tools you will use for your
          project, like React, Next.js, or Node.js.
        </p>
      ),
    },
    {
      label: "Step 2: Implement the UI",
      optional: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.86,93.15a8,8,0,0,1-3.76,5.39l-147.41,88a40.18,40.18,0,0,1-20.26,5.52,39.78,39.78,0,0,1-27.28-10.87l-.12-.12L13,145.8a16,16,0,0,1,4.49-26.21l3-1.47a8,8,0,0,1,6.08-.4l28.26,9.54L75,115.06,53.17,93.87A16,16,0,0,1,57.7,67.4l.32-.13,7.15-2.71a8,8,0,0,1,5.59,0L124.7,84.38,176.27,53.6a39.82,39.82,0,0,1,51.28,9.12l.12.15,18.64,23.89A8,8,0,0,1,247.86,93.15Zm-19.74-3.7-13-16.67a23.88,23.88,0,0,0-30.68-5.42l-54.8,32.72a8.06,8.06,0,0,1-6.87.64L68,80.58l-4,1.53.21.2L93.57,110.8a8,8,0,0,1-1.43,12.58L59.93,142.87a8,8,0,0,1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71,0,0,1,.13.12l36,35.26a23.85,23.85,0,0,0,28.42,3.18Z"></path>
        </svg>
      ),
      content: (
        <p>
          Build out the frontend components, adding interactivity and ensuring
          responsiveness.
        </p>
      ),
    },
    {
      label: "Step 3: Connect the Backend",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M185.33,114.21l29.14-27.42.17-.17a32,32,0,0,0-45.26-45.26c0,.06-.11.11-.17.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.88A8,8,0,0,0,136.8,144c-.27,0-.53,0-.79,0a8,8,0,0,0-5.66,2.35l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2L180.78,52.6A16,16,0,0,1,203.4,75.23l-32.87,30.93a8,8,0,0,0-2,8.56l30.26,83.22Z"></path>
        </svg>
      ),
      content: (
        <p>
          Set up APIs, databases, and other backend services to provide dynamic
          data for your website.
        </p>
      ),
    },
  ];

  return (
    <div>
      <Stepper steps={steps} direction="horizontal" />
    </div>
  );
};
export const HorizontalStepperWithContent = HorizontalContent.bind({});

const ColorTemplate: StoryFn = () => {
  const steps = [
    {
      label: "Step 1: Plan the Website",
      content: (
        <p>
          Research and outline the website’s purpose and goals, and plan the
          features and pages.
        </p>
      ),
    },
    {
      label: "Step 2: Design the Interface",
      optional: true,
      content: (
        <p>
          Build wireframes and visual designs for the website’s layout and
          style.
        </p>
      ),
    },
    {
      label: "Step 3: Develop the Code",
      content: (
        <p>
          Write the code, connecting frontend and backend functionalities to
          bring the design to life.
        </p>
      ),
    },
  ];

  return (
    <div>
      <Stepper steps={steps} direction="horizontal" color="primary" />
      <Stepper steps={steps} direction="horizontal" color="secondary" />
    </div>
  );
};

export const HorizontalStepperWithColors = ColorTemplate.bind({});

const FullShowcaseTemplate: StoryFn = () => {
  const steps = [
    {
      label: "Step 1: Plan the Website",
      content: (
        <p>
          Research and outline the website’s purpose and goals, and plan the
          features and pages.
        </p>
      ),
    },
    {
      label: "Step 2: Design the Interface",
      optional: true,
      content: (
        <p>
          Build wireframes and visual designs for the website’s layout and
          style.
        </p>
      ),
    },
    {
      label: "Step 3: Develop the Code",
      content: (
        <p>
          Write the code, connecting frontend and backend functionalities to
          bring the design to life.
        </p>
      ),
    },
  ];

  return (
    <Storybook title="Stepper Showcase">
      <div>
        <h3>Horizontal Stepper</h3>
        <Stepper steps={steps} direction="horizontal" />
      </div>
      <div>
        <h3>Vertical Stepper</h3>
        <Stepper steps={steps} direction="vertical" />
      </div>
      <div>
        <h3>Horizontal Stepper with Content</h3>
        <Stepper steps={steps} direction="horizontal" />
      </div>
      <div>
        <h3>Stepper with Colors (Primary and Secondary)</h3>
        <Stepper steps={steps} direction="horizontal" color="primary" />
        <Stepper steps={steps} direction="horizontal" color="secondary" />
      </div>
    </Storybook>
  );
};

export const StepperFullShowcase = FullShowcaseTemplate.bind({});
