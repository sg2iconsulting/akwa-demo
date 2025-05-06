import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Carousel from "@/components/common/template/Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Sections/Carousel",
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const sampleSlides = [
  { image: "https://picsum.photos/600/405" },
  { image: "https://picsum.photos/600/404" },
  { image: "https://picsum.photos/600/403" },
  { image: "https://picsum.photos/600/402" },
  { image: "https://picsum.photos/600/401" },
  { image: "https://picsum.photos/600/406" },
];
const sampleSlides2 = [
  { image: "https://picsum.photos/600/900" },
  { image: "https://picsum.photos/600/900" },
  { image: "https://picsum.photos/600/900" },
  { image: "https://picsum.photos/600/900" },
  { image: "https://picsum.photos/600/900" },
  { image: "https://picsum.photos/600/900" },
  { image: "https://picsum.photos/600/900" },
];

export const Default: Story = {
  args: {
    slides: sampleSlides,
    title: "Our Portfolio",
    description: "A showcase of our best work",
    titleTextColor: "#000000",
    descriptionTextColor: "#555555",
  },
};
export const vertical: Story = {
  args: {
    slides: sampleSlides2,
    title: "Our Portfolio",
    description: "A showcase of our best work",
    titleTextColor: "#000000",
    descriptionTextColor: "#555555",
  },
};

export const CustomNavigationIcons: Story = {
  args: {
    slides: sampleSlides,
    title: "Featured Projects",
    description: "Explore some of our highlights",
    titleTextColor: "#1E40AF",
    descriptionTextColor: "#1E3A8A",
    navigationIconColor: "#FF5722",
    leftChevronIcon: FaArrowLeft,
    rightChevronIcon: FaArrowRight,
  },
};

export const HiddenTitle: Story = {
  args: {
    slides: sampleSlides,
    title: "Hidden Title",
    description: "This title should not display",
    titleTextColor: "#000",
    descriptionTextColor: "#000",
    hiddenTitle: "none",
  },
};

export const CustomBreakpoints: Story = {
  args: {
    slides: sampleSlides,
    title: "Responsive Carousel",
    description: "Watch it adapt to screen size",
    titleTextColor: "#000",
    descriptionTextColor: "#000",
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  },
};
