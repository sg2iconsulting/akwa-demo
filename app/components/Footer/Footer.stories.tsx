import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
import { ImLinkedin } from "react-icons/im";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  args: {
    footerBackgroundColor: "#052337",
    footerItemsTextColor: "#FFFFFF",
    footerItems: [
      { label: "Contact", href: "#" },
      { label: "Condition d'utilisation", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Recrutement", href: "#" },
    ],
    socialMediaItems: [<ImLinkedin key="linkedin" size={24} color="white" />],
    footerLogoSource: "logo/akwaLogo.png",
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    footerBackgroundColor: "#716491"
  }
};

export const WithCustomLogo: Story = {
  args: {
    footerLogoSource: "logo/akwaLogo.png",
  },
};

export const DarkTheme: Story = {
  args: {
    footerBackgroundColor: "#000000",
    footerItemsTextColor: "#FFD700",
  },
};
