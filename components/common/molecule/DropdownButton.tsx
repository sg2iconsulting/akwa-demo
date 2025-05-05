"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { cn } from "@/utils/cn";
import DropdownMenu from "./DropdownMenu";

interface itemProps {
  menuItem?: React.ReactNode;
  link?: string;
}

interface DropdownButtonProps {
  dropdownItems: itemProps[];
  label: string;
  position?: "top" | "bottom";
  backgroundColor?: string;
  className?: string;
}

const DropdownButton = ({
  dropdownItems,
  label = "Nos Filiales",
  position = "top",
  backgroundColor = "black",
  className = "",
}: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "cursor-pointer whitespace-nowrap text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px] font-normal",
          className
        )}
      >
        <div className="flex items-center gap-1">
          {label}
          <HiChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </motion.button>

      <DropdownMenu
        items={dropdownItems}
        isOpen={isOpen}
        position={position}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};

export default DropdownButton;
