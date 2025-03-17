"use client";
import React from "react";
import { motion } from "framer-motion";

interface DropdownItemProps {
  label: React.ReactNode;
  href?: string;
  className?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  href = "",
  className = "text-[9px] md:text-[11px] xl:text-[14px] 2xl:text-[17px]",
}) => {
  return (
    <motion.div
      className={`font-normal ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.7 }}
    >
      <a href={href} className="flex gap-2 items-center">
        {label}
      </a>
    </motion.div>
  );
};

export default DropdownItem;
