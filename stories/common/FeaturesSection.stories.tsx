import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FaCheckCircle, FaStar, FaRocket } from "react-icons/fa";
import FeaturesSection from "@/components/common/template/FeaturesSection";

const meta: Meta<typeof FeaturesSection> = {
  title: "Sections/FeaturesSection",
  component: FeaturesSection,
};

export default meta;

type Story = StoryObj<typeof FeaturesSection>;

export const FeaturesList: Story = {
  args: {
    features: [
      { icon: FaCheckCircle, text: "Reliable and Secure" },
      { icon: FaStar, text: "Top Rated Performance" },
      { icon: FaRocket, text: "Fast and Scalable" },
    ],
    iconColor: "#a5c33c",
  },
};
