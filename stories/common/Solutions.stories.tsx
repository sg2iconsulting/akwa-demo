import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IoCheckmarkCircle, IoStar, IoRocket } from "react-icons/io5";
import Solutions from "@/components/common/template/Solutions";

const meta: Meta<typeof Solutions> = {
  title: "Sections/Solutions",
  component: Solutions,
};

export default meta;

type Story = StoryObj<typeof Solutions>;

export const Default: Story = {
  args: {
    firstTitle: "Our Solutions",
    secondTitle: "Why Choose Us",
    paragraphs: [
      "Reliable infrastructure with 99.9% uptime",
      "24/7 customer support",
      "Advanced security measures",
      "Customizable solutions for all business sizes",
      "Fast deployment and easy integration",
      "Scalable architecture for future growth",
    ],
  },
};

export const CustomColorsAndIcons: Story = {
  args: {
    firstTitle: "Powerful Features",
    secondTitle: "What We Offer",
    paragraphs: [
      "Award-winning design and usability",
      "State-of-the-art technology stack",
      "Proactive monitoring and alerts",
      "Dedicated account management",
      "Transparent pricing with no hidden fees",
      "Sustainability-focused operations",
    ],
    firstTitleTextColor: "#FF5733",
    secondTitleTextColor: "#33C1FF",
    paragraphTextColor: "#555555",
    iconTextColor: "#FFAA00",
    leftSectionIcon: IoStar,
    rightSectionIcon: IoRocket,
  },
};

export const WithCustomClasses: Story = {
  args: {
    firstTitle: "Tailored Services",
    secondTitle: "Built for You",
    paragraphs: [
      "Consulting and strategy development",
      "Personalized onboarding process",
      "Hands-on training for your team",
      "Ongoing support and optimization",
      "Advanced analytics and reporting",
      "Community and networking access",
    ],
    firstTitleClassename: "underline decoration-[#FFAA00]",
    secondTitleClassename: "italic",
    paragraphClassename: "text-sm text-gray-700",
    leftSectionIconClassename: "text-green-500",
    rightSectionIconClassename: "text-purple-500",
  },
};
