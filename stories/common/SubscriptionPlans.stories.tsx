import { Meta, StoryObj } from "@storybook/react";
import { FaCheck } from "react-icons/fa";
import SubscriptionPlans from "@/components/common/template/SubscriptionPlans";

const meta: Meta<typeof SubscriptionPlans> = {
  title: "Sections/SubscriptionPlans",
  component: SubscriptionPlans,
};

export default meta;

type Story = StoryObj<typeof SubscriptionPlans>;

const plans = [
  {
    title: "Pulse",
    description:
      "Recharge semi-rapide illimitée et 10 heures de recharge rapide incluses.",
    features: [
      { icon: FaCheck, text: "Recharge semi-rapide illimitée" },
      { icon: FaCheck, text: "10 heures de recharge rapide incluses" },
      { icon: FaCheck, text: "Support prioritaire" },
    ],
  },
  {
    title: "Privilège",
    description: "Recharge rapide illimitée, assistance VIP et plus encore.",
    features: [
      { icon: FaCheck, text: "Recharge rapide illimitée" },
      { icon: FaCheck, text: "Assistance VIP 24/7" },
      { icon: FaCheck, text: "Accès aux bornes premium" },
    ],
  },
  {
    title: "Pulse",
    description:
      "Recharge semi-rapide illimitée et 10 heures de recharge rapide incluses.",
    features: [
      { icon: FaCheck, text: "Recharge semi-rapide illimitée" },
      { icon: FaCheck, text: "10 heures de recharge rapide incluses" },
      { icon: FaCheck, text: "Support prioritaire" },
    ],
  },
  {
    title: "Privilège",
    description: "Recharge rapide illimitée, assistance VIP et plus encore.",
    features: [
      { icon: FaCheck, text: "Recharge rapide illimitée" },
      { icon: FaCheck, text: "Assistance VIP 24/7" },
      { icon: FaCheck, text: "Accès aux bornes premium" },
    ],
  },
];

export const Default: Story = {
  args: {
    title: {
      firstPart: "Des forfaits ",
      highlightedPart: "d'abonnement",
      lastPart: " adaptés à votre besoin",
    },
    plans,
    footerText:
      "La recharge semi-rapide (AC) est illimitée avec nos forfaits Pulse et Privilège.",
  },
};
