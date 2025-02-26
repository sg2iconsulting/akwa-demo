// ServiceCard.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ServiceCard from "./ServiceCard";

const meta: Meta<typeof ServiceCard> = {
  title: "molecules/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
  argTypes: {
    imgSrc: { control: "text" },
    title: { control: "text" },
    className: { control: "text" },
    style: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    imgSrc: "/afriquiaGaz/service/solution.png",
    title: "Service 1",
    className: "",
    style: {},
  },
};

export const CustomStyle: Story = {
  args: {
    imgSrc: "/fastVolt/navBackFv.png",
    title: "Service 2",
    className: "custom-class",
    style: { border: "2px solid #8BBA25" },
  },
};

export const LongTitle: Story = {
  args: {
    imgSrc: "/maghreb/maghrebNavBack.png",
    title: "This is a very long service title that should be truncated",
    className: "",
    style: {},
  },
};