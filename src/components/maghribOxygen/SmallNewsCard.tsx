import Link from "next/link";
import { motion } from "framer-motion";
import useInView from "@/hooks/isInView";
import { useState } from "react";
interface NewsCardProps {
  index: number;
  publishDate: string;
  title: string;
  featuredImage: string;
}

const NewsCard = ({
  index,
  publishDate,
  title,
  featuredImage,
}: NewsCardProps) => {
  const { ref, isInView } = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <motion.div
      className="border border-[#F1F1F1] rounded-[12px] flex  pl-6 p-3 items-center justify-between hover:scale-105 hover:shadow-xl transition-all duration-300"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="flex flex-col">
        <h4 className="text-xs mb-2 text-start">{publishDate}</h4>

        <h2 className="font-bold line-clamp-3 text-start">{title}</h2>
      </div>
      <img
        src={featuredImage}
        alt={title}
        className="max-w-[120px] w-full rounded-xl object-cover aspect-square"
      />
    </motion.div>
  );
};

export default NewsCard;
