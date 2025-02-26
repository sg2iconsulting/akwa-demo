// Service.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Services from "./Services";

const meta: Meta<typeof Services> = {
  title: "organisms/Services",
  component: Services,
  tags: ["autodocs"],
  argTypes: {
    slides: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof Services>;

export const Default: Story = {
  args: {
    slides: [
      {
        imgSrc: "/afriquiaGaz/service/solution.png",
        title: "Service 1",
      },
      {
        imgSrc: "/afriquiaGaz/service/conseil.png",
        title: "Service 2",
      },
      {
        imgSrc: "/afriquiaGaz/service/faq.png",
        title: "Service 3",
      },
      {
        imgSrc: "/maghreb/maghrebNavBack.png",
        title: "Service 3",
      },
      {
        imgSrc: "/maghreb/maghrebNavBack.png",
        title: "Service 3",
      },
      {
        imgSrc: "/maghreb/maghrebNavBack.png",
        title: "Service 3",
      },
      {
        imgSrc: "/maghreb/maghrebNavBack.png",
        title: "Service 3",
      },
      
    ],
  },
};
