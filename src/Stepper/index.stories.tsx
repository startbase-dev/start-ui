import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Stepper } from './index';
import Storybook from '../Storybook';
import AirplaneTaxiingIcon from '../icons/AirplaneTaxiing';
import AirplaneTakeoffIcon from '../icons/AirplaneTakeoff';
import AirplaneTiltIcon from '../icons/AirplaneTilt';

export default {
  title: 'UI/Stepper',
  component: Stepper,
} as Meta<typeof Stepper>;

const Template: StoryFn = () => {
  const steps = [
    {
      label: 'Step 1: Plan the Website',
      content: (
        <p>
          In this step, you gather requirements, research your audience, and
          define the goals and objectives of the website.
        </p>
      ),
    },
    {
      label: 'Step 2: Design the Website',
      optional: true,
      content: (
        <p>
          Create wireframes, mockups, and prototypes to visualize the structure
          and design of the website.
        </p>
      ),
    },
    {
      label: 'Step 3: Develop the Website',
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
      label: 'Step 1: Gather Requirements',
      content: (
        <p>
          Identify key features, user personas, and the overall purpose of the
          web application.
        </p>
      ),
    },
    {
      label: 'Step 2: Create a Wireframe',
      optional: true,
      content: <p>Design the structure and layout of the website.</p>,
    },
    {
      label: 'Step 3: Write the Code',
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
      label: 'Step 1: Choose a Tech Stack',
      icon: <AirplaneTaxiingIcon />,
      content: (
        <p>
          Decide on the frameworks, languages, and tools you will use for your
          project, like React, Next.js, or Node.js.
        </p>
      ),
    },
    {
      label: 'Step 2: Implement the UI',
      optional: true,
      icon: <AirplaneTakeoffIcon />,
      content: (
        <p>
          Build out the frontend components, adding interactivity and ensuring
          responsiveness.
        </p>
      ),
    },
    {
      label: 'Step 3: Connect the Backend',
      icon: <AirplaneTiltIcon />,
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
      label: 'Step 1: Plan the Website',
      content: (
        <p>
          Research and outline the website’s purpose and goals, and plan the
          features and pages.
        </p>
      ),
    },
    {
      label: 'Step 2: Design the Interface',
      optional: true,
      content: (
        <p>
          Build wireframes and visual designs for the website’s layout and
          style.
        </p>
      ),
    },
    {
      label: 'Step 3: Develop the Code',
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
      label: 'Step 1: Plan the Website',
      content: (
        <p>
          Research and outline the website’s purpose and goals, and plan the
          features and pages.
        </p>
      ),
    },
    {
      label: 'Step 2: Design the Interface',
      optional: true,
      content: (
        <p>
          Build wireframes and visual designs for the website’s layout and
          style.
        </p>
      ),
    },
    {
      label: 'Step 3: Develop the Code',
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
