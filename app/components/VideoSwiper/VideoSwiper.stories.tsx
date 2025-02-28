import { Meta, StoryObj } from "@storybook/react";
import VideoSwiper from "./VideoSwiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const meta: Meta<typeof VideoSwiper> = {
  title: "molecules/VideoSwiper",
  component: VideoSwiper,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VideoSwiper>;

export const Default: Story = {};
