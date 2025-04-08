// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { HiChevronRight } from "react-icons/hi";
// import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu";
// import {
//   itemProps,
//   MenuItemsListProps,
// } from "../../molecules/MenuItemsList/MenuItemsList";
// import Paragraph from "../../atoms/Paragraph/Paragraph";

// export interface DropdownButtonProps {
//   dropdownItems: itemProps[];
//   label: string;
// }

// const DropdownButton = ({
//   dropdownItems = [
//     {
//       menuItem: "Home",
//       link: "#",
//     },
//     {
//       menuItem: "Profile",
//       link: "#",
//     },
//     {
//       menuItem: "About",
//       link: "#",
//     },
//     {
//       menuItem: "Contact",
//       link: "#",
//     },
//   ],
//   label = "Nos Filiales",
// }: DropdownButtonProps) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => setIsOpen(!isOpen);


//   return (
//     <div className="relative">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         transition={{ duration: 0.7 }}
//         onClick={toggleDropdown}
//         className="cursor-pointer font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px]"
//       >
//         <div className="flex items-center gap-1">
//           <Paragraph className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">{label}</Paragraph>
//           <HiChevronRight
//             className={`lg:text-lg xl:text-xl transform transition-transform md:duration-500 ${
//               isOpen ? "rotate-90 md:-rotate-90" : "rotate-0"
//             }`}  
//           />
//         </div>
//       </motion.button>

//       <DropdownMenu items={dropdownItems} isOpen={isOpen} />
//     </div>
//   );
// };

// export default DropdownButton;



// app/components/organisms/DropdownButton/DropdownButton.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu";
import { itemProps } from "../../molecules/MenuItemsList/MenuItemsList";
import { cn } from "../../../utils/cn"; // Assuming you have a cn utility

export interface DropdownButtonProps {
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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