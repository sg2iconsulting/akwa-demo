// Navbar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  args: {
    menuItems: [
      { label: "Le Groupe", href: "/groupe" },
      { label: "Pôles d’activités", href: "/poles" },
      { label: "Finance", href: "/finance" },
      { label: "Engagements", href: "/engagements" },
    ],
    link: "/media",
    navbarBackgroundColor: "#052337",
    menuItemsTextColor: "#ffffff",
    buttonTextColor: "#ffffff",
    buttonBackgroundColor: "#1e90ff",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};

export const WithSupComponent: Story = {
  args: {
    SupComponent: () => <div>Extra Component</div>,
  },
};

export const CustomColors: Story = {
  args: {
    navbarBackgroundColor: "#333333",
    menuItemsTextColor: "#f5a623",
    buttonTextColor: "#333333",
    buttonBackgroundColor: "#f5a623",
  },
};
