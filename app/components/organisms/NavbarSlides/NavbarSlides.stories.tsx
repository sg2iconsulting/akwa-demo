import { Meta, StoryObj } from "@storybook/react";
import NavbarSlides from "./NavbarSlides";

const meta: Meta<typeof NavbarSlides> = {
  title: "organisms/NavbarSlides",
  component: NavbarSlides,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavbarSlides>;

export const Default: Story = {};
