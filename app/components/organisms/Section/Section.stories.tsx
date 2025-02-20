import { Meta, StoryObj } from "@storybook/react";
import Section, { SectionProps } from "./Section";

const meta: Meta<typeof Section> = {
  title: "organisms/Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    imgSrc: { control: "text" },
    backgroundStyle: { control: "object" },
    backgroundImagePosition: { control: "text" },
    paragraphsClassename: { control: "text" },
    paragraphsStyle: { control: "object" },
    paragraphClassename: { control: "text" },
    paragraphStyle: { control: "object" },
    buttonClassename: { control: "text" },
    buttonStyle: { control: "object" },
    buttonChildren: { control: "text" },
    headingClassename: { control: "text" },
    headingStyle: { control: "object" },
    headingTag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

export default meta;

type Story = StoryObj<SectionProps>;

export const Default: Story = {
  args: {
    title: "Welcome to Our Services",
    imgSrc: "/Section/innovationBg.jpeg",
    backgroundImagePosition: "center",
    paragraphs: [
      "We offer top-quality services to help you achieve your goals.",
      "Our team is dedicated to providing the best experience possible.",
    ],
    buttonChildren: "Learn More",
    headingTag: "h2",
    headingClassename: "text-white",
    paragraphClassename: "text-white"
  },
};

export const CustomStyles: Story = {
  args: {
    ...Default.args,
    imgSrc: "/Section/AfriqueBg.png",
    headingClassename: "text-3xl font-bold text-white",
    paragraphsClassename: "text-lg text-gray-100",
    buttonClassename: "px-6 py-2 bg-blue-500 text-white rounded-md",
    buttonStyle: { backgroundColor: "#FF5733", color: "#FFF" },
  },
};

export const WithoutButton: Story = {
  args: {
    ...Default.args,
    buttonChildren: undefined,
  },
};

export const WithMultipleParagraphs: Story = {
  args: {
    ...Default.args,
    paragraphs: [
      "Our services are tailored to meet your needs.",
      "We have a dedicated team to support you every step of the way.",
      "Contact us today to learn more about our offerings.",
    ],
  },
};
