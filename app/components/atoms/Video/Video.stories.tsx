import type { Meta, StoryObj } from "@storybook/react";
import Video, { VideoProps } from "./Video";

const meta: Meta<typeof Video> = {
  title: "atoms/Video",
  component: Video,
  tags: ["docs"],
  argTypes: {
    src: {
      control: "text",
    },
    className: {
      control: "text",
    },
    style: {
        control: "object",
      },
  },
};

export default meta;

type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    src: "",
    className: "w-full max-w-md rounded-lg shadow-md",
  },
};
