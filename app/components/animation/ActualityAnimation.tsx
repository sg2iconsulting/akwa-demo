"use client";
import useInView from "@/app/hook/useView";
import { motion } from "framer-motion";
import Actuality, { ActProps } from "../actuality/Actuality";

const ActualityAnimation = ({imgSrc, color, btnColor, title, descrip, Date, ttlColor}: ActProps) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <Actuality
        imgSrc={imgSrc}
        btnColor={btnColor}
        color={color}
        title={title}
        ttlColor={ttlColor}
        descrip={descrip}
        Date={Date}
      />
    </motion.div>
  );
};

export default ActualityAnimation;
