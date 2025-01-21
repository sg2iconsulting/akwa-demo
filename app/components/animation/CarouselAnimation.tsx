"use client";
import useInView from "@/app/hook/useView";
import { motion } from "framer-motion";
import TrendingSlider, { TrendingSliderProps } from "../carousel/Carousel";


const CarouselAnimation = ({slides, title, descrip, clrTitle, descripTitles, slidesStyle, navigationClr, navigationBg, hiddenTitle}: TrendingSliderProps) => {
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
        descrip={descrip}
        clrTitle={clrTitle}
        descripTitles={descripTitles}
        slidesStyle={slidesStyle}
        navigationClr={navigationClr}
        navigationBg={navigationBg}
        hiddenTitle={hiddenTitle}
      />
    </motion.div>
  );
};

export default CarouselAnimation;
