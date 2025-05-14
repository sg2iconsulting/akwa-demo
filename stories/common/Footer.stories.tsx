import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "@/components/common/template/Footer";
import { FooterItem } from "@/components/common/molecule/FooterItemsList";

const meta: Meta<typeof Footer> = {
  title: "Sections/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

const mockFooterItems: FooterItem[] = [
  { menuItem: "Accueil", link: "#" },
  { menuItem: "Condition d'utilisation", link: "#" },
  { menuItem: "Politique de confidentialité", link: "#" },
  { menuItem: "FAQ", link: "#" },
];

const mockSocialMediaItems = [
  {
    icon: FaFacebook,
    iconColor: "#3b5998",
    link: "https://facebook.com",
  },
  {
    icon: FaTwitter,
    iconColor: "#00acee",
    link: "https://twitter.com",
  },
  {
    icon: FaInstagram,
    iconColor: "#e4405f",
    link: "https://instagram.com",
  },
];

export const Default: Story = {
  args: {
    footerItems: mockFooterItems,
    socialMediaItems: mockSocialMediaItems,
    footerLogoSource: "/fastVolt/footerLogo.png",
    footerContainerClassename: "bg-black",
    footerBackgroundColor: "#121212",
    footerItemsTextColor: "white",
  },
};
