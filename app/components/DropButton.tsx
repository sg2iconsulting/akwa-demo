// import React, { useState } from "react";
// import { FaChevronUp } from "react-icons/fa"; // Icon for dropdown arrow pointing up
// import { motion } from "framer-motion";

// const DropdownButton: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       {/* Button */}
//       <button
//         onClick={toggleDropdown}
//         className="font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px]"
//       >
//         Nos Filiales
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute bottom-full right-0 z-10 mb-2 origin-bottom-right bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//           <div className="py-1">
//             <a
//               href="#"
//               className="block px-4 py-2 font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px] text-gray-700 hover:bg-gray-100"
//             >
//              Speedy
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px] text-gray-700 hover:bg-gray-100"
//             >
//               Afriquia Gaz
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownButton;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";

interface DropdownButtonProps {
  setFooterExpanded: (expanded: boolean) => void;
}

const DropdownButton = ({ setFooterExpanded }: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setFooterExpanded(!isOpen);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={toggleDropdown}
        className="cursor-pointer font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px] relative"
      >
        Nos Filiales
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-[48px] left-16 md:left-20 md:-bottom-[51px] lg:left-0 lg:bottom-full mb-4  w-24 md:w-28  xl:w-32 flex flex-col gap-2 text-start py-2 border border-r-0 border-[#19A0BF] border-l-0 text-white max-h-[70px] xl:max-h-[80px] overflow-y-auto"
        >
          <div className="space-y-2">
            {["Speedy", "Afriquia Gaz"].map((option, index) => (
              <div key={index} className="font-medium">
                <a href="#" className="flex gap-2 items-center">
                  <MdOutlineChevronRight />
                  <p>{option}</p>
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DropdownButton;
