import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ImagesFadeShowSection, {
  FadeSectionProps,
} from "./ImagesFadeShowSection";

const meta: Meta<typeof ImagesFadeShowSection> = {
  title: "molecules/ImagesFadeShowSection",
  component: ImagesFadeShowSection,
  tags: ["docs"],
  argTypes: {
    images: {
      control: "object",
      defaultValue: [
        ["/akwagroup/galery/image-0.png", "/akwagroup/galery/image-1.png", "/akwagroup/galery/image-2.png"],
        ["/akwagroup/galery/image-3.png", "/akwagroup/galery/image-4.png", "/akwagroup/galery/image-5.png"],
        [
          "/akwagroup/galery/image-12.png",
          "/akwagroup/galery/image-13.png",
          "/akwagroup/galery/image-14.png",
        ],
        [
          "/akwagroup/galery/image-15.png",
          "/akwagroup/galery/image-16.png",
          "/akwagroup/galery/image-17.png",
        ],
        ["/akwagroup/galery/image-9.png", "/akwagroup/galery/image-10.png", "/akwagroup/galery/image-11.png"],
        ["/akwagroup/galery/image-6.png", "/akwagroup/galery/image-7.png", "/akwagroup/galery/image-8.png"],
      ],
    },
    containerClassName: {
      control: "text",
      defaultValue: "flex gap-2 w-full h-full md:w-1/2 md:justify-end my-auto",
    },
    containerStyle: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImagesFadeShowSection>;

export const Default: Story = {
  args: {
    images: [
      ["/akwagroup/galery/image-0.png", "/akwagroup/galery/image-1.png", "/akwagroup/galery/image-2.png"],
      ["/akwagroup/galery/image-3.png", "/akwagroup/galery/image-4.png", "/akwagroup/galery/image-5.png"],
      ["/akwagroup/galery/image-12.png", "/akwagroup/galery/image-13.png", "/akwagroup/galery/image-14.png"],
      ["/akwagroup/galery/image-15.png", "/akwagroup/galery/image-16.png", "/akwagroup/galery/image-17.png"],
      ["/akwagroup/galery/image-9.png", "/akwagroup/galery/image-10.png", "/akwagroup/galery/image-11.png"],
      ["/akwagroup/galery/image-6.png", "/akwagroup/galery/image-7.png", "/akwagroup/galery/image-8.png"],
    ],
    containerClassName:
      "flex gap-2 w-full h-full md:w-1/2 md:justify-end my-auto",
  },
};

export const CustomStyled: Story = {
  args: {
    images: [
      ["/akwagroup/galery/image-0.png", "/akwagroup/galery/image-1.png", "/akwagroup/galery/image-2.png"],
      ["/akwagroup/galery/image-3.png", "/akwagroup/galery/image-4.png", "/akwagroup/galery/image-5.png"],
      ["/akwagroup/galery/image-12.png", "/akwagroup/galery/image-13.png", "/akwagroup/galery/image-14.png"],
      ["/akwagroup/galery/image-15.png", "/akwagroup/galery/image-16.png", "/akwagroup/galery/image-17.png"],
      ["/akwagroup/galery/image-9.png", "/akwagroup/galery/image-10.png", "/akwagroup/galery/image-11.png"],
      ["/akwagroup/galery/image-6.png", "/akwagroup/galery/image-7.png", "/akwagroup/galery/image-8.png"],
    ],
    containerClassName: "bg-gray-900 p-6 rounded-lg",
  },
};
