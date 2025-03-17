import { Meta, StoryObj } from "@storybook/react";
import Banner, { BannerProp } from "./Banner";

const meta: Meta<BannerProp> = {
  title: "Components/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    imageSrc: {
      control: "text",
      defaultValue: "/speedy/section/pub.png",
    },
  },
};

export default meta;

type Story = StoryObj<BannerProp>;

export const Default: Story = {
  args: {
    imageSrc: "/speedy/section/pub.png",
  },
};
