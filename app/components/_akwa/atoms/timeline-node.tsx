"use client";

import { motion } from "framer-motion";

interface TimelineNodeProps {
  year: string;
  isActive: boolean;
  isEven: boolean;
  onClick: () => void;
}

export default function TimelineNode({
  year,
  isActive,
  isEven,
  onClick,
}: TimelineNodeProps) {
  return (
    <div className="flex flex-col items-center py-12 relative z-[1]">
      <motion.div
        className="size-24 rounded-full flex items-center justify-center text-center cursor-pointer border-white text-white border-4 overflow-visible"
        onClick={onClick}
        animate={{
          backgroundColor: isEven ? "#052337" : "#19A0BF",
          scale: isActive ? 1.3 : 1,
        }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
          duration: 0.3,
        }}
      >
        <motion.div className="text-lg font-bold">{year}</motion.div>
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-1 bg-[#19A0BF] transform -translate-y-1/2 w-[500px] z-[-5] rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
