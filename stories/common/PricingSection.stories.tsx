import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FaCheck } from "react-icons/fa";
import PricingSection from "@/components/common/template/PricingSection";

const meta: Meta<typeof PricingSection> = {
  title: "Sections/PricingSection",
  component: PricingSection,
};

export default meta;

type Story = StoryObj<typeof PricingSection>;

const features = [
  { icon: FaCheck, text: "Sans engagement" },
  { icon: FaCheck, text: "Paiement à la minute" },
  { icon: FaCheck, text: "Assistance 24/7" },
];

export const Default: Story = {
  args: {
    title: {
      firstPart: "Des offres ",
      highlightedPart: "sans abonnement",
      lastPart: " pour un paiement à la minute",
    },
    features,
    footerText: "* Par paliers de 30 min",
  },
};
