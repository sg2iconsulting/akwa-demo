"use client";
import useInView from "@/hook/useView";
import { motion } from "framer-motion";
import Applications from "../maghreb/Applications";

const ApplicationsAnimation = () => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <Applications />
    </motion.div>
  );
};

export default ApplicationsAnimation;
