"use client";
import useInView from "@/app/hook/useView";
import { motion } from "framer-motion";
import Actuality, { ActProps } from "../actuality/Actuality";

const ActualityAnimation = ({backgroundButtonColor, backgroundItemColor, titleTextColor, buttonTextColor, label, items}: ActProps) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <Actuality
        items={items}
        backgroundButtonColor={backgroundButtonColor}
        backgroundItemColor={backgroundItemColor}
        titleTextColor={titleTextColor}
        buttonTextColor={buttonTextColor}
        label={label}
      />
    </motion.div>
  );
};

export default ActualityAnimation;
