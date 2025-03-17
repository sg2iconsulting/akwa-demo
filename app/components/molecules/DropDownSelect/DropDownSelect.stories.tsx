import { Meta, StoryObj } from "@storybook/react";
import DropDownSelect, { DropDownSelectProps } from "./DropDownSelect";

export default {
  title: "molecules/DropDownSelect",
  component: DropDownSelect,
  argTypes: {
    onSelect: { action: "selected" },
    itemBackgroundHoverColor: { control: "color" },
  },
} as Meta<typeof DropDownSelect>;

type ExampleOption = {
  value: string;
  label: string;
};

const options: ExampleOption[] = [
  { value: "fr", label: "French" },
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
];

export const Default: StoryObj<DropDownSelectProps<ExampleOption>> = {
  args: {
    options,
    labelKey: "label",
    valueKey: "value",
    selectedValue: "en",
    itemBackgroundHoverColor: "#e0e0e0",
    className: "p-2 border rounded",
  },
};
