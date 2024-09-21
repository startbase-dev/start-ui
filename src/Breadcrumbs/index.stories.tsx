import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Breadcrumbs from "./index";
import Storybook from "../Storybook";

export default {
  title: "UI/Breadcrumbs",
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;

const breadcrumbData = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/settings" },
  { label: "User Profile", href: "/profile" },
];

const Template: StoryFn = () => {
  return (
    <div>
      <Breadcrumbs data={breadcrumbData} />
    </div>
  );
};

export const DefaultBreadcrumbs = Template.bind({});

const CustomSeparatorTemplate: StoryFn = () => {
  const customBreadcrumbData = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
  ];

  return (
    <div>
      <Breadcrumbs data={customBreadcrumbData} separator="|" />
    </div>
  );
};

export const CustomSeparatorBreadcrumbs = CustomSeparatorTemplate.bind({});

const FullShowcaseTemplate: StoryFn = () => {
  const showcaseBreadcrumbData = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Settings", href: "/settings" },
    { label: "User Profile", href: "/profile" },
  ];

  return (
    <Storybook title="Breadcrumbs Showcase">
      <div>
        <h3>Default Breadcrumbs</h3>
        <Breadcrumbs data={showcaseBreadcrumbData} />
      </div>
      <div>
        <h3>Custom Separator Breadcrumbs</h3>
        <Breadcrumbs data={showcaseBreadcrumbData} separator="|" />
      </div>
    </Storybook>
  );
};

export const BreadcrumbsFullShowcase = FullShowcaseTemplate.bind({});
