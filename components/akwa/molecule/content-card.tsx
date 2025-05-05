"use client";

import { motion } from "framer-motion";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";

interface ContentCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function ContentCard({
  title,
  description,
  className = "",
}: ContentCardProps) {
  return (
    <motion.div
      className={`p-8 border rounded-lg shadow-sm ${className} max-w-[1280px] w-full`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Heading
          tag="h3"
          className="mb-4 font-bold text-[24px] md:text-[36px] xl:text-[48px]"
        >
          {title}
        </Heading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Paragraph className="text-[#4C4C4C]">{description}</Paragraph>
      </motion.div>
    </motion.div>
  );
}
