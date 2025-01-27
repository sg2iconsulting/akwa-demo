// import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

// import { Button } from './Button';

// const meta = {
//   title: 'Example/Button',
//   component: Button,
//   parameters: {
//     layout: 'centered',
//   },
//   argTypes: {
//     backgroundColor: { control: "color" }, // Add a color picker control
//     disabled: { control: "boolean" },
//     onClick: { action: "clicked" },
//   },
//   args: { onClick: fn() },
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// import type { Meta, StoryObj } from "@storybook/react";
// import Button, { ButtonProps } from "./Button"; // Import Button component and props

// const meta: Meta<ButtonProps> = {
//   title: "Example/Button",
//   component: Button,
//   parameters: {
//     layout: "centered",
//   },
//   argTypes: {
//     backgroundColor: { control: "color" }, // Color picker for background color
//     disabled: { control: "boolean" }, // Toggle for the disabled state
//     onClick: { action: "clicked" }, // Logs the onClick action
//   },
//   args: {
//     onClick: () => console.log("Button clicked"), // Default onClick behavior
//   },
// };

// export default meta;

// type Story = StoryObj<ButtonProps>;

// export const Primary: Story = {
//   args: {
//     label: "Click Me", // Button label
//     backgroundColor: "#007bff", // Default blue background color
//     disabled: false, // Default to enabled
//   },
// };

// export const Disabled: Story = {
//   args: {
//     label: "Disabled Button", // Button label
//     backgroundColor: "#007bff", // Blue background color (ignored when disabled)
//     disabled: true, // Disabled state
//   },
// };

// export const CustomBackground: Story = {
//   args: {
//     label: "Custom Background",
//     backgroundColor: "#ff6347", // Tomato background color
//     disabled: false,
//   },
// };

import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "reusible/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" }, 
    textColor: { control: "color" }, 
    onClick: { action: "clicked" }, 
  },
  args: {
    onClick: () => console.log("Button clicked"), 
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    label: "Click Me", 
    backgroundColor: "#19A0BF", 
    textColor: "#ffffff", 
  },
};

