import { Meta, StoryObj } from "@storybook/react";
import Footer, { FooterProps } from "../../organisms/Footer/Footer";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const meta: Meta<FooterProps> = {
  title: "organisms/Footer",
  component: Footer,
  tags: ["doc"],
  argTypes: {
    footerBackgroundColor: { control: "color"},
    footerItemsTextColor: { control: "color"},
    footerItems: { 
      control: "object", 
    },
    socialMediaItems: {
      control: "object",
    },
    SupComponent: {
      control: false,
    },
    footerLogoSource: {
      control: "text",
    },
    classeName: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<FooterProps>;

export const Default: Story = {
  args: {
    footerBackgroundColor: "#f8f9fa",
    footerItemsTextColor: "#333",
    footerItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    socialMediaItems: [
      { icon: FaFacebook, iconSize: 24, iconColor: "#3b5998" },
      { icon: FaTwitter, iconSize: 24, iconColor: "#1DA1F2" },
      { icon: FaLinkedin, iconSize: 24, iconColor: "#0077b5" },
    ],
    footerLogoSource: "logo/akwaLogo.png",
    classeName: "w-[80px]",
  },
};

export const WithSupComponent: Story = {
  args: {
    ...Default.args,
    SupComponent: ({ backgroundColor, textColor }) => (
      <div style={{ backgroundColor, color: textColor, padding: "5px 10px", borderRadius: "5px" }}>
        Extra Component
      </div>
    ),
  },
};
