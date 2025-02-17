// import type { Meta, StoryObj } from "@storybook/react";
// import SelectInput, { SelectInputProps } from "./SelectInput";

// const meta: Meta<typeof SelectInput> = {
//   title: "atoms/SelectInput",
//   component: SelectInput,
//   tags: ["docs"],
//   argTypes: {
//     options: {
//       control: "object",
//     },
//     value: {
//       control: "text",
//     },
//     onChange: {
//       action: "changed",
//     },
//     className: {
//       control: "text",
//     },
//   },
// };

// export default meta;

// type Story = StoryObj<typeof SelectInput>;

// export const Default: Story = {
//   args: {
//     options: [
//       { value: "option1", label: "Option 1" },
//       { value: "option2", label: "Option 2" },
//       { value: "option3", label: "Option 3" },
//     ],
//     value: "option1",
//     className: "px-4 py-2 border border-gray-300 rounded-md",
//   },
// };

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SelectInput, { SelectInputProps } from "./SelectInput";

const meta: Meta<typeof SelectInput> = {
  title: "atoms/SelectInput",
  component: SelectInput,
  argTypes: {
    value: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

const sampleOptions = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    value: "fr",
    className: "border border-gray-300 px-2 py-1 rounded-md",
  },
};
