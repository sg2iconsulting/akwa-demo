"use client";
import useInView from "@/hook/useView";
import { motion } from "framer-motion";
import TrendingSlider from "../Carousel";

interface Slide {
  image: string;
}

interface TrendingSliderProps {
  slides: Slide[];
  speedy: boolean;
  fvolt: boolean;
  title: string;
  descrip: string;
}

const TrendingSliderAnimation = ({
  slides,
  speedy,
  fvolt,
  title,
  descrip,
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
        speedy={speedy}
        fvolt={fvolt}
        title={title}
        descrip={descrip}
      />
    </motion.div>
  );
};

export default TrendingSliderAnimation;
