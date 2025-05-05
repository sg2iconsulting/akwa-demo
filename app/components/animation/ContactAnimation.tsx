"use client";
import useInView from "@/hook/useView";
import { motion } from "framer-motion";
import Contact from "../maghreb/Contact";

const ContactAnimation = () => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <Contact />
    </motion.div>
  );
};

export default ContactAnimation;
