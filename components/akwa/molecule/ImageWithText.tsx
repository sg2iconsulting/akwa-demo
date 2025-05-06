"use client";

import { motion } from "framer-motion";
import Heading from "@/components/common/atoms/Heading";
import Paragraph from "@/components/common/atoms/Paragraph";

interface ImageWithTextProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageClassname: string;
  imagePosition?: "left" | "right";
  className?: string;
}

export default function ImageWithText({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  imageClassname,
  className = "",
}: ImageWithTextProps) {
  const textContent = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === "left" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full flex flex-col justify-center"
    >
      <Heading
        tag="h2"
        className="mb-4 text-[24px]  md:text-[30px] xl:text-[36px] 2xl:text-[48px]  font-bold font-poppins"
      >
        {title}
      </Heading>
      {description.split("\n\n").map((paragraph, index) => (
        <Paragraph key={index} className="mb-4 text-[#4C4C4C]">
          {paragraph}
        </Paragraph>
      ))}
    </motion.div>
  );

  const imageContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-stretch w-full"
    >
      <img src={imageSrc} alt={imageAlt} className={imageClassname} />
    </motion.div>
  );

  return (
    <div
      className={`flex md:flex-row flex-col gap-8 ${className} ${
        imagePosition == "left" ? "flex-col-reverse" : "flex-col"
      }`}
    >
      {imagePosition === "left" ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
}
