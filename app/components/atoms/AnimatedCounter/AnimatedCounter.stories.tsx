import { Meta, StoryObj } from "@storybook/react";
import AnimatedCounter, { AnimatedCounterProps } from "./AnimatedCounter";

const meta: Meta<typeof AnimatedCounter> = {
  title: "atoms/AnimatedCounter",
  component: AnimatedCounter,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "number" } },
    duration: { control: { type: "number" } },
    classname: { control: "text" },
    style: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<AnimatedCounterProps>;

export const Default: Story = {
  args: {
    value: 100,
    duration: 2,
  },
};

export const LargeText: Story = {
  args: {
    value: 5000,
    duration: 4,
    classname: "text-[40px] font-bold text-red-500",
  },
};

export const SlowCount: Story = {
  args: {
    value: 1000,
    duration: 10,
  },
};
