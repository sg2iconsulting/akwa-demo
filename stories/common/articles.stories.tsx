import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import PostCardItem, {
  PostCardItemProps,
} from "@/components/common/template/PostCardItem";

const meta: Meta<PostCardItemProps> = {
  title: "Organisms/PostCardItem",
  component: PostCardItem,
  tags: ["autodocs"],
  args: {
    title: "Latest News",
    labelButton: "Read More",
  },
};

export default meta;
type Story = StoryObj<PostCardItemProps>;

// Dummy data for posts
const items = [
  {
    imgSrc: "https://picsum.photos/800/600",
    title: "Main Article Title",
    date: "2025-05-14",
    description:
      "This is the description of the main article. It is concise yet informative.",
    containerBackgroundColor: "white",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "black",
  },
  ...Array.from({ length: 5 }).map((_, i) => ({
    imgSrc: "https://picsum.photos/200",
    title: `AFRIQUIA GAZ S’ALLIE À L’ASSOCIATION TIBU MAROC ET OUVRE UN CENTRE POUR LA JEUNESSE D’INZEGANE ${
      i + 1
    }`,
    date: "2025-05-14",

    containerBackgroundColor: "black",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "black",
  })),
];
const Akwaitems = [
  {
    imgSrc: "https://picsum.photos/800/600",
    title: "Main Article Title",
    date: "2025-05-14",
    description:
      "This is the description of the main article. It is concise yet informative.",
    imageClassename: "object-cover w-full h-full",
    dateClassename: "text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]",
    titleClassename:
      "text-[15px] md:text-[23px] lg:text-2xl xl:text-[28px] 2xl:text-[36px] font-bold",
    descriptionClassename:
      "text-[10px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium line-clamp-2",
    buttonClassename: "px-6 py-2 w-[200px] rounded-full",
    containerBackgroundColor: "white",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "#052337",
  },
  ...Array.from({ length: 5 }).map((_, i) => ({
    imgSrc: "https://picsum.photos/200",
    title: `AFRIQUIA GAZ S’ALLIE À L’ASSOCIATION TIBU MAROC ET OUVRE UN CENTRE POUR LA JEUNESSE D’INZEGANE ${
      i + 1
    }`,
    date: "2025-05-14",
    imageClassename: "w-full h-full rounded-[8px] object-cover",
    dateClassename: "text-[8px] md:text-[12px] xl:text-[13px]",
    titleClassename:
      "text-[10px] md:text-[14px] xl:text-[15px] font-bold line-clamp-2",
    descriptionClassename: "",
    buttonClassename: "",
    containerBackgroundColor: "white",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "#052337",
  })),
];

// Default story
export const Default: Story = {
  args: {
    items,
    backgroundItemColor: "#1347ad"
  },
};

// Custom styles story
export const AkwaStyles: Story = {
  args: {
    title: "Actualités",
    titleClassename: "",
    titleTextColor: "#052337",
    backgroundItemColor: "#052337",
    backgroundButtonColor: "#19A0BF",
    buttonTextColor: "#FFFFFF",
    labelButton: "Lire plus",
    items: Akwaitems,
  },
};

// Loading state story
export const Loading: Story = {
  args: {
    isLoading: true,
    items: [],
  },
};
