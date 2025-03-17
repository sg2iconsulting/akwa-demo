import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta: Meta<typeof Image> = {
  title: "atoms/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text"},
    alt: { control: "text"},
    imageClassename: { control: "text"},
    imageStyle: { control: "object"},
  },
  args: {
    src: "/fastVolt/navBackFv.png",
    alt: "Placeholder Image",
    imageClassename: "rounded-lg shadow-md",
    imageStyle: { objectFit: "cover" },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {};

export const CustomStyles: Story = {
  args: {
    src: "/fastVolt/navBackFv.png",
    alt: "Custom Styled Image",
    imageClassename: "rounded-full border-2 border-gray-500",
    imageStyle: { objectFit: "contain" },
  },
};
