import { Meta, StoryObj } from "@storybook/react";
import SignCounter, { SignCounterProps } from "./SignCounter";

const meta: Meta<typeof SignCounter> = {
  title: "molecules/SignCounter",
  component: SignCounter,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number" },
    duration: { control: "number" },
    sign: { control: "text" },
    className: { control: "text" },
    signClassName: { control: "text" },
    counterClassName: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<SignCounterProps>;

export const Default: Story = {
  args: {
    value: 40,
    duration: 5,
    sign: "+",
    className: "text-2xl font-bold",
    signClassName: "text-red-500",
    counterClassName: "text-blue-500",
  },
};

export const NegativeSign: Story = {
  args: {
    value: 25,
    duration: 3,
    sign: "-",
    signClassName: "text-red-600",
    counterClassName: "text-black",
  },
};
