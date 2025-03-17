import { Meta, StoryObj } from "@storybook/react";
import HeroVideoSliders, { Slide } from "./HeroVideoSliders";

export default {
  title: "Components/HeroVideoSliders",
  component: HeroVideoSliders,
  tags: ["autodocs"], 
  argTypes: {
    slides: {
      control: "object",
    }
  },
} as Meta;

const sampleSlides: Slide[] = [
  {
    videoSrcUrl:
      "https://www.youtube.com/embed/HTMeFNhrnMs?si=JqlXF9DqSiu2aBKl",
    title: "Bouteille Nouvelle Génération Clic-On",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    backgroundColor: "#ffffff",
    titleTextColor: "#000000",
    descriptionTextColor: "#494949",
  },
  {
    videoSrcUrl:
      "https://www.youtube.com/embed/SlMqBIkuIRU?si=vf40_-Lbn0gU0H3T",
    title: "Conseils pour protéger ta famille",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    backgroundColor: "#ffffff",
    titleTextColor: "#000000",
    descriptionTextColor: "#494949",
  },
  {
    videoSrcUrl:
      "https://www.youtube.com/embed/9Xp5Nfd4OyI?si=D1GYq8Fl2Bn0-Af2",
    title: "Système de branchement Clic-On",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    backgroundColor: "#ffffff",
    titleTextColor: "#000000",
    descriptionTextColor: "#494949",
  },
];

export const Default: StoryObj = {
  args: {
    slides: sampleSlides,
  },
};
