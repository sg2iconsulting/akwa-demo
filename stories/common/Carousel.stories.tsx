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

const sampleSlides3 = [
  { image: "/akwagroup/images/carburant.png" },
  { image: "/akwagroup/images/dev.png" },
  { image: "/akwagroup/images/transition.png" },
  { image: "/akwagroup/images/fluides.png" },
  { image: "/akwagroup/images/gaz.png" },
  { image: "/akwagroup/images/carburant.png" },
  { image: "/akwagroup/images/immobilier.png" },
  { image: "/akwagroup/images/dev.png" },
  { image: "/akwagroup/images/transition.png" },
  { image: "/akwagroup/images/fluides.png" },
  { image: "/akwagroup/images/gaz.png" },
  { image: "/akwagroup/images/immobilier.png" },
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
export const AkwaStyle: Story = {
  args: {
    slides: sampleSlides3,
    title: "6 Pôles",
    description: "diversifiés pour apporter des réponses globales",
    slideClassename:
      "w-full h-full object-cover shadow-[0_0_20px_0_rgba(0,0,0,0.2)] aspect-[585.62/761.28]",
    titleClassename:
      "text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white",
    descriptionClassename:
      "text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium dark:text-white",
    titleTextColor: "#052337",
    leftChevronIconClassename: "xl:text-[50px] 2xl:text-[70px] font-bold",
    rightChevronIconClassename: "xl:text-[50px] 2xl:text-[70px] font-bold",
    descriptionTextColor: "#666666",
    navigationIconColor: "#FFFFFF",
    leftChevronIcon: FaChevronLeft,
    rightChevronIcon: FaChevronRight,
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
