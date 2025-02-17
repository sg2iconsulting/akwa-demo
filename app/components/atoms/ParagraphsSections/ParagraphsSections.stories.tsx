import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ParagraphsSections, {
  ParagraphsSectionsProps,
} from "./ParagraphsSections";

// Define metadata for the story
const meta: Meta<typeof ParagraphsSections> = {
  title: "atoms/ParagraphsSections",
  component: ParagraphsSections,
  tags: ["docs"],
  argTypes: {
    paragraphs: {
      defaultValue: [
        "This is the first paragraph.",
        "This is the second paragraph.",
      ],
    },
    containerClassName: {
      control: "text",
    },
    containerStyle: {
      control: "object",
    },
    paragraphClassName: {
      control: "text",
    },
    paragraphStyle: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ParagraphsSections>;

export const Default: Story = {
  args: {
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    containerClassName:
      "text-gray-800 dark:text-whitetext-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 dark:text-white",
    paragraphClassName: "",
  },
};

export const CustomStyled: Story = {
  args: {
    paragraphs: [
      "This is a custom-styled paragraph.",
      "Another paragraph with different styling.",
    ],
    containerClassName: "bg-gray-100 p-4 rounded-md",
    paragraphClassName: "text-blue-500 font-semibold",
    paragraphStyle: { fontSize: "18px", lineHeight: "1.5" },
  },
};
