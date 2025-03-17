import { Meta, StoryObj } from "@storybook/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer, { FooterProps } from "./Footer";
import DropdownButton from "../../DropButton";

const meta: Meta<typeof Footer> = {
  title: "organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  args: {
    footerBackgroundColor: "#121212",
    footerItemsTextColor: "#ffffff",
    socialMediaItems: [
      { icon: FaFacebook, iconSize: 24, iconColor: "#1877F2" },
      { icon: FaTwitter, iconSize: 24, iconColor: "#1DA1F2" },
      { icon: FaInstagram, iconSize: 24, iconColor: "#E4405F" },
    ],
    footerLogoSource: "/logo/akwaLogo.png",
  } as FooterProps,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    footerItems: [
      { menuItem: "Home", link: "/" },
      { menuItem: "About", link: "/about" },
      { menuItem: "Services", link: "/services" },
      { menuItem: "Contact", link: "/contact" },
    ],
  },
};

export const WithReactNodeMenu: Story = {
  args: {
    footerItems: [
      { menuItem: <DropdownButton />, link: "/" },
      { menuItem: <button className="bg-blue-500 text-white px-2 py-1 rounded">About</button>, link: "/about" },
      { menuItem: <div className="text-green-400 underline">📞 Contact Us</div>, link: "/contact" },
    ],
  },
};
