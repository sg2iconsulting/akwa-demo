import { Meta, StoryObj } from "@storybook/react";
import SocialMediaIcons from "../../molecules/SocialMediaIcons/SocialMediaIcons";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const meta: Meta<typeof SocialMediaIcons> = {
  title: "molecules/SocialMediaIcons",
  component: SocialMediaIcons,
  tags: ["doc"],
  argTypes: {
    items: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SocialMediaIcons>;

export const Default: Story = {
  args: {
    items: [
      { icon: FaFacebook, iconSize: 24, iconColor: "#3b5998" },
      { icon: FaTwitter, iconSize: 24, iconColor: "#1DA1F2" },
      { icon: FaLinkedin, iconSize: 24, iconColor: "#0077b5" },
    ],
  },
};
