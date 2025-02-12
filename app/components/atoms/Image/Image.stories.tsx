import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta: Meta<typeof Image> = {
  title: "atoms/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    imageSource: { control: "text"},
    imageAlt: { control: "text"},
    imageWidth: { control: "number"},
    imagehight: { control: "number"},
    imageClassename: { control: "text"},
    imageStyle: { control: "object"},
    containerClassname: { control: "text"},
    containerStyle: { control: "object"},
  },
  args: {
    imageSource: "/fastVolt/navBackFv.png",
    imageAlt: "Placeholder Image",
    imageWidth: 300,
    imagehight: 200,
    imageClassename: "rounded-lg shadow-md",
    imageStyle: { objectFit: "cover" },
    containerClassname: "flex justify-center items-center p-4 bg-gray-100",
    containerStyle: { maxWidth: "320px", height: "220px" },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {};

export const CustomStyles: Story = {
  args: {
    imageSource: "/fastVolt/navBackFv.png",
    imageAlt: "Custom Styled Image",
    imageWidth: 400,
    imagehight: 300,
    imageClassename: "rounded-full border-2 border-gray-500",
    imageStyle: { objectFit: "contain" },
    containerClassname: "flex justify-center items-center p-6 bg-blue-100",
    containerStyle: { maxWidth: "420px", height: "320px" },
  },
};
