import type { Meta, StoryObj } from "@storybook/react";
import HeroSlider, {
  HeroSlideItem,
} from "@/components/common/template/HeroSlider";
import { CTAButton } from "@/components/common/molecule/CTAButton";

const meta: Meta<typeof HeroSlider> = {
  title: "Sections/HeroSlider",
  component: HeroSlider,
};

export default meta;
type Story = StoryObj<typeof HeroSlider>;

const exampleSlides: HeroSlideItem[] = [
  {
    type: "image",
    src: "fastVolt/navBackFv.png",
    title: "Le plus grand réseau marocain des bornes électriques!",
    subtitle: "Experience the beauty of nature",
    cta: {
      label: "Learn More",
      url: "#",
    } as CTAButton,
    appDownloadSection: {
      title: "Télécharger l'application FastVolt",
      googlePlayImageSrc: "/fastVolt/googlePlay.png",
      appStoreImageSrc: "/fastVolt/appStore.png",
    },
  },
  {
    type: "video",
    src: "https://sg2i.com/wp-content/uploads/2024/12/transitionenergetique.mp4",
    posterSrc: "https://picsum.photos/600/400",
    title: "Mobilité durable et innovation",
    subtitle:
      "Le temps d'une pause café, rechargez vos batteries et prenez la route vers une mobilité durable...",
  },
];
const akwaSlides: HeroSlideItem[] = [
  {
    type: "video",
    src: "https://sg2i.com/wp-content/uploads/2024/12/Groupeenergetique.mp4",
    title: "Groupe énergétique par excellence",
    subtitle: "",
    cta: {
      label: "Voir la vidéo",
      className: "px-6 py-2 bg-[#D1FF33] text-black font-bold rounded-full",
    },
  },
  {
    type: "video",
    src: "https://sg2i.com/wp-content/uploads/2024/12/transitionenergetique.mp4",
    title: "Transition Énergétique,",
    subtitle: "la voie de l'avenir",
    cta: {
      label: "Voir la vidéo",
      className: "px-6 py-2 bg-[#D1FF33] text-black font-bold rounded-full",
    },
  },
  {
    type: "video",
    src: "https://sg2i.com/wp-content/uploads/2024/12/AkwaAfrica.mp4",
    title: "AKWA AFRICA,",
    subtitle: "de nouvelles perspectives d'avenir",
    cta: {
      label: "Voir la vidéo",
      className: "px-6 py-2 bg-[#D1FF33] text-black font-bold rounded-full",
    },
  },
];

const commonClasses = {
  title:
    "text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[85px] 3xl:text-[100px] font-bold leading-tight xl:mt-8 2xl:mt-12 3xl:mt-16",
  subtitle:
    "text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold",
  appDownloadTitle:
    "text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold",
  appButton: "w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto",
  slide:
    "w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover",
};

export const Default: Story = {
  args: {
    slides: exampleSlides,
    effect: "slide",
    enableVideoModal: true,
    showPagination: true,
    paginationColor: "#8BBA25",
    titleClassName: commonClasses.title,
    subtitleClassName: commonClasses.subtitle,
    appDownloadTitleClassName: commonClasses.appDownloadTitle,
    appButtonClassName: commonClasses.appButton,
    slideClassName: commonClasses.slide,
  },
};
export const Akwa: Story = {
  args: {
    slides: akwaSlides,
    effect: "slide",
    enableVideoModal: true,
    showPagination: true,

    titleClassName: commonClasses.title,
    subtitleClassName: commonClasses.subtitle,
    appDownloadTitleClassName: commonClasses.appDownloadTitle,
    appButtonClassName: commonClasses.appButton,
    slideClassName: commonClasses.slide,
  },
};
