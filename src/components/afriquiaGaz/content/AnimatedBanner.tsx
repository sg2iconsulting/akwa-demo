"use client";
import useInView from "@/hooks/isInView";
import { motion } from "framer-motion";
import Banner from "./Banner";

const AnimatedBanner = ({ imageSrc }: any) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <Banner imageSrc={imageSrc} />
    </motion.div>
  );
};

export default AnimatedBanner;
