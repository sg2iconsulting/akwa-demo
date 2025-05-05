import React from "react";
import { motion } from "framer-motion";

interface AppDownloadButtonProps {
  imageSrc: string;
  altText: string;
  className?: string;
}

const AppDownloadButton: React.FC<AppDownloadButtonProps> = ({
  imageSrc,
  altText,
  className = "",
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full cursor-pointer"
      />
    </motion.button>
  );
};

export default AppDownloadButton; 