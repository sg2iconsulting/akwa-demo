import type { Meta, StoryObj } from "@storybook/react";
import Service, { ServiceProps } from "./Service";

const meta: Meta<typeof Service> = {
  title: "Components/Service",
  component: Service,
  argTypes: {
    slides: {
      control: "object",
    },
  },
};

export default meta;

const defaultSlides: ServiceProps["slides"] = [
  {
    imgSrc: "/afriquiaGaz/service/produit.png",
    title: "Nos produits",
  },
  {
    imgSrc: "/afriquiaGaz/service/solution.png",
    title: "Nos solutions",
  },
  {
    imgSrc: "/afriquiaGaz/service/conseil.png",
    title: "Conseil & Assistance",
  },
  {
    imgSrc: "/afriquiaGaz/service/efficacite.png",
    title: "Efficacité Énergétique",
  },
  {
    imgSrc: "/afriquiaGaz/service/faq.png",
    title: "FAQ",
  },
];

export const Default: StoryObj<typeof Service> = {
  args: {
    slides: defaultSlides,
  },
};
