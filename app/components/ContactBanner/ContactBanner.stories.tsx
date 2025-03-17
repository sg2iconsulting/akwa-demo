import type { Meta, StoryObj } from "@storybook/react";
import Contact from "./ContactBanner";

const meta: Meta<typeof Contact> = {
  title: "Components/Contact",
  component: Contact,
  argTypes: {
    imageBackgroundSrc: { control: "text" },
    imageBackgroundClassename: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    numberPhone: { control: "text" },
    buttonBackgroundColor: { control: "color" },
    buttonTextColor: { control: "color" },
    roundedButton: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  args: {
    imageBackgroundSrc: "/maghreb/contactBanner.png",
    imageBackgroundClassename: "object-cover w-full h-full bg-center rounded-[15px]",
    title: "Contacter-nous",
    description: "Trouver le dépositaire le plus prés de chez vous en contactant",
    numberPhone: "05 22 35 22 22",
    buttonBackgroundColor: "#0085C3",
    buttonTextColor: "#ffffff",
    roundedButton: "100px",
  },
};
