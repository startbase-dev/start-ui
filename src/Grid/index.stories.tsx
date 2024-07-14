import React from "react";
import Grid from "./index";
import Index from "../Row";
import Index from "../Col";
import type { TemplateProps } from "./types";

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
        <Grid>
          <Index>
            <Index span={4}>{`Column 1 (4/12)`}</Index>
            <Index span={4}>{`Column 2 (4/12)`}</Index>
            <Index span={4}>{`Column 3 (4/12)`}</Index>
          </Index>
          <Index>
            <Index span={6}>{`Column 1 (6/12)`}</Index>
            <Index span={6}>{`Column 2 (6/12)`}</Index>
          </Index>
        </Grid>
      </div>
    </>
  );
};

const TemplateWithPadding: React.FC<TemplateProps> = (args) => (
  <>
    <h2>{args.title}</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <Grid>
        <Index>
          <Index span={4} padding="24px">
            {`Column 1 (4/12)`}
          </Index>
          <Index span={4} padding="24px">
            {`Column 2 (4/12)`}
          </Index>
          <Index span={4} padding="24px">
            {`Column 3 (4/12)`}
          </Index>
        </Index>
        <Index>
          <Index span={6} padding="24px">
            {`Column 1 (6/12)`}
          </Index>
          <Index span={6} padding="24px">
            {`Column 2 (6/12)`}
          </Index>
        </Index>
      </Grid>
    </div>
  </>
);

const TemplateWithResponsive: React.FC<TemplateProps> = (args) => (
  <>
    <h2>{args.title}</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <Grid>
        <Index>
          <Index
            span={12}
            spanSizes={{ sm: 12, md: 12, lg: 6, xl: 4 }}
            padding="24px"
          >
            {`Column 1 (4/12)`}
          </Index>
          <Index
            span={12}
            spanSizes={{ sm: 12, md: 12, lg: 6, xl: 4 }}
            padding="24px"
          >
            {`Column 2 (4/12)`}
          </Index>
          <Index
            span={12}
            spanSizes={{ sm: 12, md: 12, lg: 6, xl: 4 }}
            padding="24px"
          >
            {`Column 3 (4/12)`}
          </Index>
        </Index>
        <Index>
          <Index span={6} padding="24px">
            {`Column 1 (6/12)`}
          </Index>
          <Index span={6} padding="24px">
            {`Column 2 (6/12)`}
          </Index>
        </Index>
      </Grid>
    </div>
  </>
);

export const GridComponent = Template.bind({});
GridComponent.args = { title: "Grid" };

export const GridWithPadding = TemplateWithPadding.bind({});
GridWithPadding.args = { title: "Grid with padding" };

export const GridWithResponsive = TemplateWithResponsive.bind({});
GridWithResponsive.args = { title: "Grid with responsive" };

const Component = {
  title: "UI/Grid",
  component: GridComponent,
};

export default Component;
