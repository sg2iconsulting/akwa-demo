"use client";
import useInView from "@/hooks/isInView";
import { motion } from "framer-motion";
import ListCard from "../ListCard";

const AnimatedListCard = () => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <ListCard />
    </motion.div>
  );
};

export default AnimatedListCard;
