import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ImageFadeShow, { FadeShowProp } from "./ImageFadeShow";

const meta: Meta<typeof ImageFadeShow> = {
  title: "molecules/ImageFadeShow",
  component: ImageFadeShow,
  tags: ["docs"],
  argTypes: {
    imgLinks: {
      control: "object",
      defaultValue: [
        "/akwagroup/galery/image-0.png",
        "/akwagroup/galery/image-1.png",
        "/akwagroup/galery/image-2.png",
      ],
    },
    duration: {
      control: { type: "number", min: 1000, step: 500 },
      defaultValue: 6000,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageFadeShow>;

export const Default: Story = {
  args: {
    imgLinks: [
      "/akwagroup/galery/image-0.png",
      "/akwagroup/galery/image-1.png",
      "/akwagroup/galery/image-2.png",
    ],
    duration: 500,
  },
};
