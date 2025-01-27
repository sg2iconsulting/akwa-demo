"use client";
import useInView from "@/app/hook/useView";
import { motion } from "framer-motion";
import Section, { SectionProps } from "../Section/Section";

const SectionAnimation = ({
  title,
  description,
  imgSrc,
  buttonBackgroundColor,
  textColor,
  backgroundImagePosition,
  buttonTextColor,
  backgroundStyle,
}: SectionProps) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <Section
        title={title}
        description={description}
        imgSrc={imgSrc}
        buttonBackgroundColor={buttonBackgroundColor}
        textColor={textColor}
        backgroundImagePosition={backgroundImagePosition}
        buttonTextColor={buttonTextColor}
        backgroundStyle={backgroundStyle}
      />
    </motion.div>
  );
};

export default SectionAnimation;
