import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LanguageSelect from "./LanguageSwitcher";

const meta: Meta<typeof LanguageSelect> = {
  title: "atoms/LanguageSelect",
  component: LanguageSelect,
  argTypes: {
    languageItemsTextColor: { control: "color" },
    iconColor: { control: "color" },
    chevronColor: { control: "color" },
    itemBackgroundHoverColor: { control: "color" },
  },
};

export default meta;

const Default: StoryObj<typeof LanguageSelect> = {
  render: (args) => <LanguageSelect {...args} />,
  args: {
    languageItems: [
      { value: "fr", label: "Fr" },
      { value: "en", label: "En" },
      { value: "ar", label: "Ar" },
    ],
    languageItemsTextColor: "#000",
    iconColor: "#000",
    chevronColor: "#000",
    itemBackgroundHoverColor: "#f0f0f0",
  },
};

export const DefaultStory = Default;
