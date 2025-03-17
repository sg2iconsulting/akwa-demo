import { Meta, StoryObj } from "@storybook/react";
import KeyFigure, { KeyFigureProps } from "./KeyFigure";

const meta: Meta<typeof KeyFigure> = {
  title: "molecules/KeyFigure",
  component: KeyFigure,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number" },
    duration: { control: "number" },
    sign: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<KeyFigureProps>;

export const Default: Story = {
  args: {
    value: 70,
    duration: 5,
    sign: "+",
    paragraphs: ["Successful Projects", "Completed Tasks"],
    className: "p-4 bg-gray-100 rounded-lg",
  },
};

export const WithoutSign: Story = {
  args: {
    value: 150,
    duration: 7,
    sign: "",
    paragraphs: ["Employees", "Worldwide"],
    className: "p-4 bg-gray-200 rounded-lg",
  },
};
