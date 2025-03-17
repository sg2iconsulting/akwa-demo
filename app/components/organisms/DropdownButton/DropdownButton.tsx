"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu";
import {
  itemProps,
  MenuItemsListProps,
} from "../../molecules/MenuItemsList/MenuItemsList";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export interface DropdownButtonProps {
  dropdownItems: itemProps[];
  label: string;
}

const DropdownButton = ({
  dropdownItems = [
    {
      menuItem: "Home",
      link: "#",
    },
    {
      menuItem: "Profile",
      link: "#",
    },
    {
      menuItem: "About",
      link: "#",
    },
    {
      menuItem: "Contact",
      link: "#",
    },
  ],
  label = "Nos Filiales",
}: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);


  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.7 }}
        onClick={toggleDropdown}
        className="cursor-pointer font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px]"
      >
        <div className="flex items-center gap-1">
          <Paragraph className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{label}</Paragraph>
          <HiChevronRight
            className={`lg:text-lg xl:text-xl transform transition-transform md:duration-500 ${
              isOpen ? "rotate-90 md:-rotate-90" : "rotate-0"
            }`}
          />
        </div>
      </motion.button>

      <DropdownMenu items={dropdownItems} isOpen={isOpen} />
    </div>
  );
};

export default DropdownButton;
