import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import PromoCard, { PromoCardProps } from "../PromoCard/PromoCard";
import "@/app/styles/promosBullets.css";
import useInView from "@/hook/useView";
import { useMediaQuery } from "react-responsive";

export interface PromosSliderProps {
  promoCards?: PromoCardProps[];
}

const promoCardss = [
  {
    productName: "PIRELLI",
    productImageSrc: "/speedy/pneu.png",
    serie: "P-ZERO PZ4",
    reference: "235/50 R19 99W",
    priceValue: "1760",
    priceLabelTextColor: "#000000",
    oldPrice: "2000",
    promoContainerBackground: "#FFFFFF",
    productNameTextColor: "#000000",
    serieTextColor: "#FF0000",
    referenceTextColor: "#000000",
    priceTextColor: "#00AA00",
    oldPriceTextColor: "#999999",
    oldPriceBackgroundColor: "#F5F5F5",
    buttonBackgroundColor: "#D52435",
    buttonTextColor: "#FFFFFF",
  },
  {
    productName: "PIRELLI",
    productImageSrc: "/speedy/pneu.png",
    serie: "P-ZERO PZ4",
    reference: "235/50 R19 99W",
    priceValue: "1760",
    priceLabelTextColor: "#000000",
    oldPrice: "2000",
    promoContainerBackground: "#FFFFFF",
    productNameTextColor: "#000000",
    serieTextColor: "#FF0000",
    referenceTextColor: "#000000",
    priceTextColor: "#00AA00",
    oldPriceTextColor: "#999999",
    oldPriceBackgroundColor: "#F5F5F5",
    buttonBackgroundColor: "#D52435",
    buttonTextColor: "#FFFFFF",
  },
  {
    productName: "PIRELLI",
    productImageSrc: "/speedy/pneu.png",
    serie: "P-ZERO PZ4",
    reference: "235/50 R19 99W",
    priceValue: "1760",
    priceLabelTextColor: "#000000",
    oldPrice: "2000",
    promoContainerBackground: "#FFFFFF",
    productNameTextColor: "#000000",
    serieTextColor: "#FF0000",
    referenceTextColor: "#000000",
    priceTextColor: "#00AA00",
    oldPriceTextColor: "#999999",
    oldPriceBackgroundColor: "#F5F5F5",
    buttonBackgroundColor: "#D52435",
    buttonTextColor: "#FFFFFF",
  },
  {
    productName: "PIRELLI",
    productImageSrc: "/speedy/pneu.png",
    serie: "P-ZERO PZ4",
    reference: "235/50 R19 99W",
    priceValue: "1760",
    priceLabelTextColor: "#000000",
    oldPrice: "2000",
    promoContainerBackground: "#FFFFFF",
    productNameTextColor: "#000000",
    serieTextColor: "#FF0000",
    referenceTextColor: "#000000",
    priceTextColor: "#00AA00",
    oldPriceTextColor: "#999999",
    oldPriceBackgroundColor: "#F5F5F5",
    buttonBackgroundColor: "#D52435",
    buttonTextColor: "#FFFFFF",
  },
  {
    productName: "PIRELLI",
    productImageSrc: "/speedy/pneu.png",
    serie: "P-ZERO PZ4",
    reference: "235/50 R19 99W",
    priceValue: "1760",
    priceLabelTextColor: "#000000",
    oldPrice: "2000",
    promoContainerBackground: "#FFFFFF",
    productNameTextColor: "#000000",
    serieTextColor: "#FF0000",
    referenceTextColor: "#000000",
    priceTextColor: "#00AA00",
    oldPriceTextColor: "#999999",
    oldPriceBackgroundColor: "#F5F5F5",
    buttonBackgroundColor: "#D52435",
    buttonTextColor: "#FFFFFF",
  },
];

const PromosSlider = ({ promoCards }: PromosSliderProps) => {
  const { ref, isInView } = useInView();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const initial = isInView
    ? isMobile
      ? { opacity: 0, y: 25 }
      : { opacity: 0, x: 40 }
    : {};

  const animate = isInView
    ? isMobile
      ? { opacity: 1, y: 0 }
      : { opacity: 1, x: 0 }
    : isMobile
    ? { opacity: 0, y: 25 }
    : { opacity: 0, x: 40 };

  return (
    <div className="font-poppins w-full max-w-[2000px] mx-auto h-full flex flex-col px-5 md:px-10 lg:px-20 gap-4 lg:gap-7 ">
      <div className="w-full h-full">
        <motion.h2
          ref={ref}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8 }}
          className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black xl:mb-7"
        >
          Promos du moment
        </motion.h2>
      </div>
      <div className="w-full h-full">
        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            890: {
              slidesPerView: 1.1,
            },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 0,
            },
            1124: {
              slidesPerView: 1.3,
              spaceBetween: 0,
            },
            1214: {
              slidesPerView: 1.4,
              spaceBetween: 0,
            },
            1310: {
              slidesPerView: 1.6,
              spaceBetween: 0,
            },
            1440: {
              slidesPerView: 1.8,
              spaceBetween: 0,
            },
            1596: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1780: {
              slidesPerView: 2.3,
              spaceBetween: 0,
            },
            1900: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
          }}
        >
          {!promoCards &&
            promoCardss.map((promo, index) => (
              <SwiperSlide key={index} className="mb-6 md:mb-10 lg:mb-16">
                <div className="p-1">
                  <PromoCard
                    productName={promo.productName}
                    productImageSrc={promo.productImageSrc}
                    serie={promo.serie}
                    reference={promo.reference}
                    priceValue={promo.priceValue}
                    priceLabelTextColor={promo.priceLabelTextColor}
                    oldPrice={promo.oldPrice}
                    promoContainerBackground={promo.promoContainerBackground}
                    productNameTextColor={promo.productNameTextColor}
                    serieTextColor={promo.serieTextColor}
                    referenceTextColor={promo.referenceTextColor}
                    oldPriceTextColor={promo.oldPriceTextColor}
                    priceTextColor={promo.priceTextColor}
                    oldPriceBackgroundColor={promo.oldPriceBackgroundColor}
                    buttonTextColor={promo.buttonTextColor}
                    buttonBackgroundColor={promo.buttonBackgroundColor}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PromosSlider;
