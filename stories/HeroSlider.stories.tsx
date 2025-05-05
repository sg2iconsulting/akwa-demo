import type { Meta, StoryObj } from "@storybook/react";
import HeroSlider, {
  HeroSlideItem,
} from "@/components/common/template/HeroSlider";
import { CTAButton } from "@/components/common/molecule/CTAButton";

const meta: Meta<typeof HeroSlider> = {
  title: "Organisms/HeroSlider",
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
    posterSrc: "https://via.placeholder.com/1200x600?text=Video+Poster",
    title: "Mobilité durable et innovation",
    subtitle:
      "Le temps d'une pause café, rechargez vos batteries et prenez la route vers une mobilité durable...",
  },
];

export const Default: Story = {
  args: {
    slides: exampleSlides,
    effect: "slide",
    enableVideoModal: true,
    showPagination: true,
    paginationStyles: `
      .swiper-pagination {
        position: absolute;
        bottom: 20px !important;
        z-index: 50 !important;
      }

      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background: white;
        opacity: 0.6;
      }

      .swiper-pagination-bullet-active {
        opacity: 1;
        background: #8BBA25;
      }

      .swiper-button-next, .swiper-button-prev {
        color: white;
      }
    `,
    titleClassName:
      "text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[85px] 3xl:text-[100px] font-bold leading-tight xl:mt-8 2xl:mt-12 3xl:mt-16",
    subtitleClassName:
      "text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold",
    appDownloadTitleClassName:
      "text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold",
    appButtonClassName: "w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto",
    slideClassName:
      "w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover",
  },
};

export const TestStory: Story = {
  args: {
    slides: [
      {
        type: "image",
        src: "fastVolt/navBackFv.png",
        title: "Le plus grand réseau marocain des bornes électriques!",
        subtitle: "Experience the beauty of nature",

        cta: {
          label: "Learn More",
          url: "#",
        },

        appDownloadSection: {
          title: "Télécharger l'application FastVolt",
          googlePlayImageSrc: "/fastVolt/googlePlay.png",
          appStoreImageSrc: "/fastVolt/appStore.png",
        },
      },
      {
        type: "video",
        src: "https://sg2i.com/wp-content/uploads/2024/12/transitionenergetique.mp4",
        posterSrc: "https://via.placeholder.com/1200x600?text=Video+Poster",
        title: "Mobilité durable et innovation",
        subtitle:
          "Le temps d'une pause café, rechargez vos batteries et prenez la route vers une mobilité durable...",
      },
    ],

    effect: "fade",
    enableVideoModal: false,
    showPagination: false,
    paginationStyles:
      "\n      .swiper-pagination {\n        position: absolute;\n        bottom: 20px !important;\n        z-index: 50 !important;\n      }\n\n      .swiper-pagination-bullet {\n        width: 12px;\n        height: 12px;\n        background: white;\n        opacity: 0.6;\n      }\n\n      .swiper-pagination-bullet-active {\n        opacity: 1;\n        background: #8BBA25;\n      }\n\n      .swiper-button-next, .swiper-button-prev {\n        color: white;\n      }\n    ",
    titleClassName:
      "text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[85px] 3xl:text-[100px] font-bold leading-tight xl:mt-8 2xl:mt-12 3xl:mt-16",
    subtitleClassName:
      "text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold",
    appDownloadTitleClassName:
      "text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold",
    appButtonClassName: "w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto",
    slideClassName:
      "w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover",
  },
};
