"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

interface TabButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps>,
    MotionProps {
  children: ReactNode;
  isActive?: boolean;
}

export default function TabButton({
  children,
  isActive = false,
  className = "",
  ...props
}: TabButtonProps) {
  return (
    <motion.button
      className={`px-8 py-4 text-[#6B7280] font-medium transition-colors ${
        isActive ? "text-gray-800" : "hover:text-gray-800"
      } ${className} relative`}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800"
          layoutId="activeTab"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}
