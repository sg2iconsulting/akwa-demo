import type { Meta, StoryObj } from "@storybook/react";
import HeroSliders from "./HeroSliders";



const meta: Meta<typeof HeroSliders> = {
  title: "Components/HeroSliders", 
  component: HeroSliders, 
  tags: ["autodocs"], 
  argTypes: {
    images: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSliders>;

export const Default: Story = {
  args: {
    images: [
      {
        srcImageUrl: "/afriquiaGaz/slider1.png",
      },
      {
        srcImageUrl: "/afriquiaGaz/slider1.png",
      },
      {
        srcImageUrl: "/afriquiaGaz/slider1.png",
      },
    ],
  },
};
