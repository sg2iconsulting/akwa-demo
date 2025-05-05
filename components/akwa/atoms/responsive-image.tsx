"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait" | "custom";
  height?: number;
  className?: string;
}

export default function ResponsiveImage({
  src,
  alt,
  aspectRatio = "custom",
  height,
  className = "",
}: ResponsiveImageProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    custom: height ? `h-[${height}px]` : "h-64",
  };

  return (
    <motion.div
      className={`relative ${aspectRatioClasses[aspectRatio]} rounded-lg overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
}
