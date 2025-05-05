"use client";
import useInView from "@/hook/useView";
import { motion } from "framer-motion";
import Sect, { SectProps } from "../afriquia/Sect";

const SectAnimation = ({ title, descrip, imgSrc, space }: SectProps) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <Sect title={title} descrip={descrip} imgSrc={imgSrc} space={space} />
    </motion.div>
  );
};

export default SectAnimation;
