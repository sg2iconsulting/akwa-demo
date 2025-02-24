// import React from "react";
// import { Meta, StoryObj } from "@storybook/react";
// import SelectOptions, { SelectOptionsProps } from "./SelectOptions";

// const meta: Meta<SelectOptionsProps> = {
//   title: "atoms/SelectOptions",
//   component: SelectOptions,
//   tags: ["docs"],
//   argTypes: {
//     labelKey: {
//       control: "text",
//     },
//     valueKey: {
//       control: "text",
//     },
//     value: {
//       control: "text",
//     },
//     className: {
//       control: "text",
//     },
//     onChange: {
//       action: "changed",
//     },
//   },
// } as Meta<SelectOptionsProps>;

// export default meta;

// const baseArgs = {
//   options: [
//     { label: "Option 1", value: "option1" },
//     { label: "Option 2", value: "option2" },
//     { label: "Option 3", value: "option3" },
//   ],
//   labelKey: "label",
//   valueKey: "value",
//   value: "option1",
//   className: "border p-2 rounded-md",
// };

// export const Default: StoryObj<SelectOptionsProps> = {
//   args: baseArgs,
// };

// export const CustomOptions: StoryObj<SelectOptionsProps> = {
//   args: {
//     ...baseArgs,
//     options: [
//       { pays: "Canada", prefix: "CA" },
//       { pays: "France", prefix: "FR" },
//       { pays: "Germany", prefix: "DE" },
//     ],
//     labelKey: "pays",
//     valueKey: "prefix",
//     value: "FR",
//   },
// };

// export const NoOptions: StoryObj<SelectOptionsProps> = {
//   args: {
//     ...baseArgs,
//     options: [],
//   },
// };

import type { Meta, StoryObj } from "@storybook/react";
import SelectOptions from "./SelectOptions";

const meta: Meta<typeof SelectOptions> = {
  title: "atoms/SelectOptions",
  component: SelectOptions,
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    labelKey: "label",
    valueKey: "value",
    className: "text-white p-2 bg-yello-500",
  },
  argTypes: {
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof SelectOptions>;

export const Default: Story = {};

