"use client";
import { motion } from "framer-motion";
import useInView from "@/hooks/isInView";
import Section, { SectionProps } from "./Section";

const AnimatedSection = ({ imageSrc, title, text, btn }: SectionProps) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <Section imageSrc={imageSrc} title={title} text={text} btn={btn} />
    </motion.div>
  );
};

export default AnimatedSection;
