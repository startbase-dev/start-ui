# @start-base/start-ui

![npm](https://img.shields.io/badge/license-MIT-green.svg)
![npm](https://img.shields.io/npm/v/%40start-base%2Fstart-ui)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40start-base%2Fstart-ui)
![npm](https://img.shields.io/npm/dt/%40start-base/start-ui)

## Demos

For live demos, please visit our [Storybook](https://start-ui-storybook.vercel.app/) page.

For detailed documentation and live demos, please visit our [Documentation](https://start-ui.startbase.dev/) page.

## Introduction

This npm package provides a multitude of UI-related React components designed for Next.js. You can use these components to build websites with ease. All components include:

- CSS variables for theming.
- Classnames for fine tuning.
- Built-in dark mode support.
- Variants for different styles.

## Installation

To install, you can use [npm](https://npmjs.org) or [yarn](https://yarnpkg.com):

```bash title='Terminal'
$ npm install @start-base/start-ui
# or
$ yarn add @start-base/start-ui
```

Make sure to import the styles file to your app:

```tsx
import '@start-base/start-ui/styles.css';
```

## Usage

Each component can be used separately or imported from the root:

```tsx title='Page.tsx'
import { Button } from '@start-base/start-ui';
// OR
import Button from '@start-base/start-ui/Button';

export default function Page() {
  function handleClick() {
    console.log('Start-UI');
  }

  return (
    <main>
      <Button onClick={handleClick}>Start-UI</Button>
    </main>
  );
}
```

Since some Start-UI components utilize React hooks, we suggest importing them separately when used inside client-side components.

## Components

### Accordion

A series of interactive headings arranged vertically, each revealing a section of content when clicked. **Client-only**.

```tsx
import Accordion from '@start-base/start-ui/Accordion';

<div>
  <Accordion summary="Accordion 1">Start-UI</Accordion>
  <Accordion summary="Accordion 2">Start-UI</Accordion>
  <Accordion summary="Accordion 3">Start-UI</Accordion>
</div>;
```

A group of `Accordion` components should be grouped together inside a parent element for proper styling.

### Accordion Properties

| Name               | Type                             | Default     | Description                                                                                                                                                     |
| ------------------ | -------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| summary            | `ReactNode`                      | `undefined` | A summary of the content.                                                                                                                                       |
| children           | `ReactNode`                      | `undefined` | The main content.                                                                                                                                               |
| actions            | `ReactNode`                      | `undefined` | Action elements placed below the content.                                                                                                                       |
| icon               | `ReactNode`                      | `undefined` | Custom icon element that will be placed at the end of `summary`.                                                                                                |
| className          | `string`                         | `undefined` | Additional class to be passed to the root of the Accordion.                                                                                                     |
| summaryClassName   | `string`                         | `undefined` | Additional class to be passed to the summary element of the Accordion.                                                                                          |
| actionsClassName   | `string`                         | `undefined` | Additional class to be passed to the actions element of the Accordion.                                                                                          |
| containerClassName | `string`                         | `undefined` | Additional class to be passed to the container element of the Accordion.                                                                                        |
| variant            | `string`                         | `'drawer'`  | Styling variant for the Accordion. Possible options are `'drawer' \| 'individual'`.                                                                             |
| expanded           | `boolean`                        | `undefined` | Controls whether the Accordion is expanded or not.                                                                                                              |
| onExpand           | `function`                       | `undefined` | Function to run when `summary` is clicked.                                                                                                                      |
| unmountOnExit      | `boolean`                        | `false`     | Controls whether the `children` should unmount when `expanded` is false. This property disables CSS animations but improves performance for very large content. |
| defaultExpanded    | `boolean`                        | `false`     | Controls whether the Accordion is expanded or not when first mounting.                                                                                          |
| disabled           | `boolean`                        | `false`     | Controls whether the Accordion should expand or collapse when `summary` is clicked.                                                                             |
| ...props           | `HTMLAttributes<HTMLDivElement>` |             | Common HTML attributes to be passed to the root element.                                                                                                        |

The Accordion components has two modes: controlled or uncontrolled depending on whether its state is controlled externally or internally. They differ slightly when it comes to their properties:

#### Controlled Accordion Properties

| Name       | Type       | Default     | Description                                        |
| ---------- | ---------- | ----------- | -------------------------------------------------- |
| expanded\* | `boolean`  | `undefined` | Controls whether the Accordion is expanded or not. |
| onExpand\* | `function` | `undefined` | Function to run when `summary` is clicked.         |
