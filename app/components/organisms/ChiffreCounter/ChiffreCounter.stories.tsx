// import { Meta, StoryObj } from "@storybook/react";
// import ChiffreCounter from "./ChiffreCounter";

// const meta: Meta<typeof ChiffreCounter> = {
//   title: "Organisms/ChiffreCounter",
//   component: ChiffreCounter,
//   tags: ["autodocs"],
//   args: {},
// };

// export default meta;
// type Story = StoryObj<typeof ChiffreCounter>;

// export const Default: Story = {};

import React from "react";
import ChiffreCounter, { ChiffreCounterProps } from "./ChiffreCounter";
import { Meta, StoryObj } from "@storybook/react";
import { KeyFigureProps } from "../../molecules/KeyFigure/KeyFigure";

const keyFigures: KeyFigureProps[] = [
  { 
    value: 20000,
    sign: "+",
    duration: 3,
    paragraphs: ["Emplois directs et", "indirects"],
  },
  {
    value: 2,
    sign: "",
    duration: 3,
    paragraphs: ["Sociétés cotées en", "bourse"],
  },
  {
    value: 70,
    sign: "",
    duration: 5,
    paragraphs: ["Sociétés"],
  },
  {
    value: 40,
    sign: "+",
    duration: 5,
    paragraphs: ["Marques phares"],
  },
];

const meta: Meta<typeof ChiffreCounter> = {
  title: "organisms/ChiffreCounter",
  component: ChiffreCounter,
  argTypes: {
  },
} as Meta<ChiffreCounterProps>;

export default meta;

const baseArgs = {
  title: "Chiffres Clés",
  keyFigures,
  titleClassName: "text-[24px] font-black text-center",
  containerClassName: "w-full h-full flex flex-col gap-8 py-10 px-5 text-white bg-[#052337]",
};

export const Default: StoryObj<ChiffreCounterProps> = {
  args: baseArgs,
};

export const CustomTitle: StoryObj<ChiffreCounterProps> = {
  args: {
    ...baseArgs,
    title: "Custom Key Figures",
    titleClassName: "text-[32px] font-bold text-left text-yellow-500",
  },
};

export const NoKeyFigures: StoryObj<ChiffreCounterProps> = {
  args: {
    ...baseArgs,
    title: "No Key Figures",
    keyFigures: [],
  },
};

export const CustomStyling: StoryObj<ChiffreCounterProps> = {
  args: {
    ...baseArgs,
    titleClassName: "text-[50px] font-black text-left text-red-500",
    containerStyle: { backgroundColor: "#1A1A1A" },
    containerKeyfigureStyle: { display: "grid", gridTemplateColumns: "1fr 1fr" },
  },
};
