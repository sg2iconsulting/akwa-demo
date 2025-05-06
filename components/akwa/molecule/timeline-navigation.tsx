"use client";

import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface TimelineNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function TimelineNavigation({
  onPrevious,
  onNext,
}: TimelineNavigationProps) {
  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: "rgb(0 0 0 / 0.9)" },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <motion.button
        className="absolute left-2  top-[calc(50%-24px)] w-12 h-12 rounded-full bg-black/50 flex items-center backdrop-blur-sm justify-center z-50"
        onClick={onPrevious}
        aria-label="Previous"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <FaChevronLeft className="w-6 h-6 text-gray-700" />
      </motion.button>

      <motion.button
        className="absolute right-2 top-[calc(50%-24px)] w-12 h-12 rounded-full bg-black/50 flex items-center backdrop-blur-sm justify-center  z-50"
        onClick={onNext}
        aria-label="Next"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <FaChevronRight className="w-6 h-6 text-gray-700" />
      </motion.button>
    </>
  );
}
