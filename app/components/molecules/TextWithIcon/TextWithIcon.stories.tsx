import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import TextWithIcon from "./TextWithIcon";

const meta: Meta<typeof TextWithIcon> = {
  title: "molecules/TextWithIcon",
  component: TextWithIcon,
  argTypes: {
    paragraph: {
      control: "text",
    },
    iconColor: {
      control: "color",
    },
    iconSize: {
      control: "number",
    },
    paragraphTextColor: {
      control: "color",
    },
    iconClassname: {
      control: "text",
    },
    textClassname: {
      control: "text",
    },
    containerClassename: {
      control: "text",
    },
    containerStyle: {
      control: "object",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof TextWithIcon> = {
  args: {
    paragraph: "This is a paragraph with an icon.",
    icon: IoCheckmarkCircle,
    iconColor: "#D1FF33",
    iconSize: 24,
    paragraphTextColor: "black",
    iconClassname: "",
    textClassname: "text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold ",
    containerClassename: "flex items-center gap-2 lg:gap-4",
    containerStyle: {},
  },
};

export const CustomIconAndText: StoryObj<typeof TextWithIcon> = {
  args: {
    paragraph: "Here is a custom icon and larger text.",
    icon: IoCheckmarkCircle,
    iconColor: "#FF5733",
    iconSize: 48,
    paragraphTextColor: "#333333",
    iconClassname: "custom-icon",
    textClassname: "text-lg font-semibold",
    containerClassename: "flex items-center gap-4",
    containerStyle: { padding: "10px" },
  },
};

export const SmallIconAndContainer: StoryObj<typeof TextWithIcon> = {
  args: {
    paragraph: "This paragraph uses a smaller icon and different container styles.",
    icon: IoCheckmarkCircle,
    iconColor: "#00BFFF",
    iconSize: 16,
    paragraphTextColor: "#444444",
    iconClassname: "",
    textClassname: "text-sm",
    containerClassename: "flex items-center gap-2",
    containerStyle: { backgroundColor: "#F0F0F0", padding: "8px" },
  },
};
