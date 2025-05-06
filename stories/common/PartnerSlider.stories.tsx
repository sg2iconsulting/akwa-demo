import PartnerSlider from "@/components/common/template/PartnerSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PartnerSlider> = {
  title: "Sections/PartnerSlider",
  component: PartnerSlider,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PartnerSlider>;

export const Default: Story = {
  args: {
    title: "Nos partenaires",
    logos: [
      {
        image: "/fastVolt/partnerSlides/slide1.jpeg",
        alt: "Green Park Energy",
      },
      { image: "/fastVolt/partnerSlides/slide2.png", alt: "Marjane" },
      {
        image: "/fastVolt/partnerSlides/slide3.png",
        alt: "Michlifen Resort & Golf",
      },
      {
        image: "/fastVolt/partnerSlides/slide4.png",
        alt: "Fairmont Hotels & Resorts",
      },
      { image: "/fastVolt/partnerSlides/slide5.jpeg", alt: "Morocco Mall" },
      {
        image: "/fastVolt/partnerSlides/slide1.jpeg",
        alt: "Green Park Energy",
      },
      { image: "/fastVolt/partnerSlides/slide2.png", alt: "Marjane" },
      {
        image: "/fastVolt/partnerSlides/slide3.png",
        alt: "Michlifen Resort & Golf",
      },
      {
        image: "/fastVolt/partnerSlides/slide4.png",
        alt: "Fairmont Hotels & Resorts",
      },
      { image: "/fastVolt/partnerSlides/slide5.jpeg", alt: "Morocco Mall" },
    ],
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: true,
    loop: true,
    showPagination: true,
    showNavigation: false,
  },
};
