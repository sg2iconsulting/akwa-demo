import { Meta, StoryObj } from "@storybook/react";
import { motion } from "framer-motion";
import InfosBanner from "./InfosBanner";

const meta: Meta<typeof InfosBanner> = {
  title: "Components/InfosBanner",
  component: InfosBanner,
  argTypes: {
    title: { control: "text" },
    titleTextColor: { control: "color" },
    description: { control: "text" },
    descriptionTextColor: { control: "color" },
    imageSrc: { control: "text" },
    children: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof InfosBanner>;

export const AppDownload: Story = {
  args: {
    title: "Welcome to InfosBanner",
    titleTextColor: "#000000",
    description: "This is a description for the banner.",
    descriptionTextColor: "#333333",
    imageSrc: "/afriquiaGaz/section/appDownload.png",
    children: (
      <div className="flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-8">
        <motion.img
          src="/fastVolt/appStore.png"
          alt="App Store"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-[100px] md:w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[210px] cursor-pointer"
        />
        <motion.img
          src="/fastVolt/googlePlay.png"
          alt="Google Play"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-[100px] md:w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[210px] cursor-pointer"
        />
      </div>
    ),
  },
};

export const Infos: Story = {
  args: {
    title: "Welcome to InfosBanner",
    titleTextColor: "#000000",
    description: "This is a description for the banner.",
    descriptionTextColor: "#333333",
    imageSrc: "/afriquiaGaz/section/Groupbut1.png",
    children: (
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="bg-[#A2BB51] text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px] z-40 w-24 h-6 md:w-36 md:h-10 xl:w-56 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold rounded-full"
      >
        En savoir plus
      </motion.button>
    ),
  },
};
