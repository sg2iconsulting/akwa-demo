'use client'
import { motion } from "framer-motion";
import useInView from "@/hooks/UseView";
import Section, { SectionProps } from "./Section";
import SectionApp from "../SectionApp";

const AnimatedSectionApp = ({ imageSrc, title, text, btn }: SectionProps) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <SectionApp imageSrc={imageSrc} title={title} text={text} btn={btn} />
    </motion.div>
  );
};

export default AnimatedSectionApp;