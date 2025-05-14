import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ChiffreCounter, {
  ChiffreCounterProps,
} from "@/components/common/organisme/ChiffreCounter";

const meta: Meta<ChiffreCounterProps> = {
  title: "Organisms/ChiffreCounter",
  component: ChiffreCounter,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    titleClassName: { control: "text" },
    containerClassName: { control: "text" },
    containerKeyFigureClassename: { control: "text" },
  },
};

export default meta;

const mockKeyFigures = [
  {
    value: 20000,
    sign: "+",
    duration: 3,
    paragraphs: ["Emplois directs et", "indirects"],
    // className: "font-bold lg:text-[28px] 2xl:text-[48px]",
    className:
      "flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48",
    deviderClassename: "w-10 bg-white",
    paragraphClassename:
      "text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
    valueClassename: "font-bold lg:text-[28px] 2xl:text-[48px]",
    signClassename: "",
  },
  {
    value: 2,
    sign: "",
    duration: 3,
    paragraphs: ["Sociétés cotées en", "bourse"],
    // className: "font-bold lg:text-[28px] 2xl:text-[48px]",
    className:
      "flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48",
    deviderClassename: "w-10 bg-white",
    paragraphClassename:
      "text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
    valueClassename: "font-bold lg:text-[28px] 2xl:text-[48px]",
    signClassename: "",
  },
  {
    value: 70,
    sign: "",
    duration: 5,
    paragraphs: ["Sociétés"],
    // className: "font-bold lg:text-[28px] 2xl:text-[48px]",
    className:
      "flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48",
    deviderClassename: "w-10 bg-white",
    paragraphClassename:
      "text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
    valueClassename: "font-bold lg:text-[28px] 2xl:text-[48px]",
    signClassename: "",
  },
  {
    value: 40,
    sign: "+",
    duration: 5,
    paragraphs: ["Marques phares"],
    className:
      "flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48",
    deviderClassename: "w-10 bg-white",
    paragraphClassename:
      "text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
    valueClassename: "font-bold lg:text-[28px] 2xl:text-[48px]",
    signClassename: "",
  },
];

type Story = StoryObj<ChiffreCounterProps>;

export const Default: Story = {
  args: {
    title: "Our Impact in Numbers",
    keyFigures: mockKeyFigures,
  },
};
