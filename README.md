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

**IMPORTANT:** Since some Start-UI components utilize React hooks, we suggest importing them separately when used inside client-side components.

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

#### Accordion Properties

| Name               | Type                             | Default     | Description                                                                                                                                       |
| ------------------ | -------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| summary            | `ReactNode`                      | `undefined` | A summary of the content.                                                                                                                         |
| children           | `ReactNode`                      | `undefined` | The main content.                                                                                                                                 |
| actions            | `ReactNode`                      | `undefined` | Action elements placed below `children`.                                                                                                          |
| icon               | `ReactNode`                      | `undefined` | Custom icon element that will be placed at the end of `summary`.                                                                                  |
| className          | `string`                         | `undefined` | Additional class to be passed to root.                                                                                                            |
| summaryClassName   | `string`                         | `undefined` | Additional class to be passed to `summary`.                                                                                                       |
| actionsClassName   | `string`                         | `undefined` | Additional class to be passed to `actions`.                                                                                                       |
| containerClassName | `string`                         | `undefined` | Additional class to be passed to container, which contains root, `summary` and `actions`.                                                         |
| variant            | `string`                         | `'drawer'`  | Styling variant. Possible options are `'drawer' \| 'individual'`.                                                                                 |
| expanded           | `boolean`                        | `undefined` | Controls whether the component is expanded or not.                                                                                                |
| onExpand           | `function`                       | `undefined` | Function to run when `summary` is clicked.                                                                                                        |
| unmountOnExit      | `boolean`                        | `false`     | Controls whether the `children` should unmount when `expanded` is false. Disables CSS animations but improves performance for very large content. |
| defaultExpanded    | `boolean`                        | `false`     | Controls whether the component is expanded or not when first mounting.                                                                            |
| disabled           | `boolean`                        | `false`     | Controls whether the component should expand or collapse when `summary` is clicked.                                                               |
| ...props           | `HTMLAttributes<HTMLDivElement>` |             | Common HTML attributes to be passed to root.                                                                                                      |

The Accordion components has two modes: _controlled_ or _uncontrolled_, which is decided automatically depending on whether its state is controlled externally or internally. They differ slightly when it comes to their properties:

#### Controlled Accordion Properties

| Name       | Type       | Default     | Description                                        |
| ---------- | ---------- | ----------- | -------------------------------------------------- |
| expanded\* | `boolean`  | `undefined` | Controls whether the Accordion is expanded or not. |
| onExpand\* | `function` | `undefined` | Function to run when `summary` is clicked.         |

### Alert

A versatile component that displays a message to the user with various customization options. It supports different severity levels, variants, colors, and additional actions.

#### Alert Properties

| Name           | Type                             | Default     | Description                                                                                                                                                 |
| -------------- | -------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children       | `ReactNode`                      | `undefined` | The main content.                                                                                                                                           |
| severity       | `string`                         | `success`   | Severity of the component. Controls the colors to be used for the styling and the icon. Possible options are `'success' \| 'info' \| 'warning' \| 'error'`. |
| variant        | `string`                         | `default`   | Styling variant. Possible options are `'default' \| 'filler' \| 'outlined'`.                                                                                |
| color          | `string`                         | `inherit`   | Colors to be used for styling. Overrides `severity`. Possible options are `'inherit' \| 'success' \| 'info' \| 'warning' \| 'error'`.                       |
| actionElement  | `ReactNode`                      | `undefined` | Action element placed after `children`.                                                                                                                     |
| icon           | `ReactNode \| boolean`           | `true`      | Controls the component icon. Given a boolean value will display or hide the icon. Can be given a custom icon element to be displayed.                       |
| alertTitle     | `string \| boolean`              | `false`     | Controls the component title above the main content. Given a boolean value will display or hide the title. Can be given a custom title.                     |
| open           | `boolean`                        | `true`      | Controls whether the component is displayed or not.                                                                                                         |
| className      | `string`                         | `undefined` | Additional class to be passed to root.                                                                                                                      |
| iconClassName  | `string`                         | `undefined` | Additional class to be passed to `icon`.                                                                                                                    |
| bodyClassName  | `string`                         | `undefined` | Additional class to be passed to body, which contains `title` and `children`.                                                                               |
| titleClassName | `string`                         | `undefined` | Additional class to be passed to `alertTitle`.                                                                                                              |
| textClassName  | `string`                         | `undefined` | Additional class to be passed to `children` container.                                                                                                      |
| ...props       | `HTMLAttributes<HTMLDivElement>` |             | Common HTML attributes to be passed to root.                                                                                                                |

### Avatar

Used to display a user's profile picture or initials in a visually appealing manner. It supports various sizes and shapes, including circular and square variants.

#### Avatar Properties

| Name           | Type                             | Default      | Description                                                                                                                 |
| -------------- | -------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| picture        | `string`                         | `''`         | Picture href to be passed to `<img>` element.                                                                               |
| defaultPicture | `string`                         | `''`         | Picture href to be used if `picture` is not found.                                                                          |
| chars          | `string`                         | `'SU'`       | Initials to be used in place of `picture`.                                                                                  |
| size           | `string`                         | `'medium'`   | Size variant. Possible options are `'small' \| 'medium' \| 'large'`                                                         |
| variant        | `string`                         | `'circular'` | Styling variant. Possible options are `'circular' \| 'square'`                                                              |
| className      | `string`                         | `undefined`  | Additional class to be passed to root.                                                                                      |
| Component      | `ElementType`                    | `'img'`      | Image component to be used to render the picture. Can be used to pass Next's Image component for optimized image rendering. |
| componentProps | `object`                         | `{}`         | Additional properties to be passed to `Component`.                                                                          |
| ...props       | `HTMLAttributes<HTMLDivElement>` |              | Common HTML attributes to be passed to root.                                                                                |

### Badge

A series of interactive headings arranged vertically, each revealing a section of content when clicked.

#### Badge Properties

| Name               | Type                             | Default       | Description                                                                                                                                                                  |
| ------------------ | -------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children\*         | `ReactNode`                      | `undefined`   | The content to which the component will be attached.                                                                                                                         |
| content\*          | `ReactNode`                      | `undefined`   | The main content.                                                                                                                                                            |
| position           | `string`                         | `'top-right'` | Position of `content` relative to `children`. Possible options are `'top-left' \| 'top' \| 'top-right' \| 'right' \| 'bottom-right' \| 'bottom' \| 'bottom-left' \| 'left'`. |
| color              | `string`                         | `'primary'`   | Color variant. Possible options are `'primary' \| 'secondary' \| 'success' \| 'error'`.                                                                                      |
| variant            | `string`                         | `'default'`   | Styling variant. Possible options are `'default' \| 'dot'`.                                                                                                                  |
| invisible          | `boolean`                        | `false`       | Controls whether `content` is visible.                                                                                                                                       |
| className          | `string`                         | `undefined`   | Additional class to be passed to `content`.                                                                                                                                  |
| containerClassName | `string`                         | `undefined`   | Additional class to be passed to container, which contains `children` and `content`.                                                                                         |
| ...props           | `HTMLAttributes<HTMLDivElement>` |               | Common HTML attributes to be passed to root.                                                                                                                                 |
