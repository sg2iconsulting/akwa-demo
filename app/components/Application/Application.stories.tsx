import type { Meta, StoryObj } from "@storybook/react";
import Application, { ApplicationProps } from "./Application";

const meta: Meta<ApplicationProps> = {
  title: "Components/Application",
  component: Application,
  argTypes: {
    imageSrc: { control: "text" },
    title: { control: "text" },
    titleTextColor: { control: "color" },
    description: { control: "text" },
    descriptionTextColor: { control: "color" },
    applicationBackgroundColor: { control: "color" },
    buttonBackgroundColor: { control: "color" },
    buttonTextColor: { control: "color" },
    buttonLabel: { control: "text" },
    roundedButton: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<ApplicationProps>;

export const Default: Story = {
  args: {
    imageSrc: "/maghreb/industrieApp.png",
    title: "Application Title",
    titleTextColor: "#000000",
    description: "This is a sample description for the application.",
    descriptionTextColor: "#333333",
    applicationBackgroundColor: "#f8f8f8",
    buttonBackgroundColor: "#A2BB51",
    buttonTextColor: "#ffffff",
    buttonLabel: "Learn More",
    roundedButton: "9999px"
  },
};