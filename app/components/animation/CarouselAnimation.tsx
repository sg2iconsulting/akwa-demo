"use client";
import useInView from "@/hook/useView";
import { motion } from "framer-motion";
import TrendingSlider, { TrendingSliderProps } from "../carousel/Carousel";

const CarouselAnimation = ({
  slides,
  title,
  description,
  titleTextColor,
  descriptionTextColor,
  slidesStyle,
  navigationIconColor,
  navigationStyle,
  hiddenTitle,
}: TrendingSliderProps) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <TrendingSlider
        slides={slides}
        title={title}
        description={description}
        titleTextColor={titleTextColor}
        descriptionTextColor={descriptionTextColor}
        slidesStyle={slidesStyle}
        navigationIconColor={navigationIconColor}
        navigationStyle={navigationStyle}
        hiddenTitle={hiddenTitle}
      />
    </motion.div>
  );
};

export default CarouselAnimation;
