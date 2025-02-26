import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import InputSectionBanner, { InputSectionBannerProps } from './InputSectionBanner';

export default {
  title: 'molecules/InputSectionBanner',
  component: InputSectionBanner,
  argTypes: {
    buttonBackgroundColor: { control: 'color' },
    buttonTextColor: { control: 'color' },
    inputClassName: { control: 'text' },
    buttonClassName: { control: 'text' },
    containerClassName: { control: 'text' },
  },
} as Meta;

export const Default: StoryObj<InputSectionBannerProps> = {
  args: {
    placeholder: 'Enter your email',
    buttonLabel: "Sign up",
    buttonBackgroundColor: '#8BBA25',
    buttonTextColor: 'white',
  },
};

export const CustomStyles: StoryObj<InputSectionBannerProps> = {
  args: {
    placeholder: 'Your email address',
    buttonLabel: 'Subscribe',
    buttonBackgroundColor: '#FF5733',
    buttonTextColor: '#000000',
    inputClassName: 'w-full px-3 py-2 bg-blue-100 rounded-lg',
    buttonClassName: 'absolute inset-y-1 right-1 px-4 py-2 rounded-lg font-bold',
    containerClassName: 'relative w-[300px] text-center text-black',
  },
};

export const DarkMode: StoryObj<InputSectionBannerProps> = {
  args: {
    placeholder: 'Your email address',
    buttonLabel: 'Subscribe',
    buttonBackgroundColor: '#000000',
    buttonTextColor: '#FFFFFF',
    inputClassName: 'w-full px-3 py-2 bg-gray-800 text-white rounded-lg',
    buttonClassName: 'absolute inset-y-1 right-1 px-4 py-2 bg-yellow-500 text-white rounded-lg font-bold',
    containerClassName: 'relative w-[300px] text-center text-white',
  },
};
