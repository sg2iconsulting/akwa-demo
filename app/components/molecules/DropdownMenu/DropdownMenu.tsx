// import React from "react";
// import DropdownItem from "../../atoms/DropdownItem/DropdownItem";
// import { itemProps } from "../MenuItemsList/MenuItemsList";

// interface DropdownMenuProps {
//   items: itemProps[];
//   isOpen: boolean;
//   className?: string;
// }

// const DropdownMenu: React.FC<DropdownMenuProps> = ({
//   items,
//   isOpen,
//   className,
// }) => {
//   return (
//     <div className="relative">
//       <div 
//         className={`absolute left-[70px] -bottom-[101px] md:left-[85px] md:-bottom-[21px] lg:-left-6 lg:bottom-[3px] xl:-left-8 xl:bottom-[24px] 2xl:-left-7 rounded-[10px] w-28 md:w-32 xl:w-[170px] 2xl:w-[195px] flex flex-col gap-2 text-start lg:py-2 bg-[green] text-white overflow-hidden transition-all duration-300 ease-out ${
//           isOpen 
//             ? "opacity-100 visible max-h-[180px]" 
//             : "opacity-0 invisible max-h-0"
//         }`}
//       >
//         <div className="flex flex-col gap-2 pl-3 lg:pl-5 md:py-1 xl:py-2">
//           {items.map((item, index) => (
//             <DropdownItem key={index} label={item.menuItem} href={item.link} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropdownMenu;

// app/components/molecules/DropdownMenu/DropdownMenu.tsx
import React from "react";
import DropdownItem from "../../atoms/DropdownItem/DropdownItem";
import { itemProps } from "../MenuItemsList/MenuItemsList";
import { cn } from "../../../utils/cn"; // Assuming you have a cn utility

interface DropdownMenuProps {
  items: itemProps[];
  isOpen: boolean;
  position?: "top" | "bottom";
  backgroundColor?: string;
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  isOpen,
  position = "top",
  backgroundColor = "black",
  className = "",
}) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className={cn(
        "absolute z-50 min-w-[150px] rounded-md shadow-lg py-2 px-1",
        position === "top" ? "bottom-full mb-2" : "top-full mt-2",
        className
      )}
      style={{ backgroundColor, opacity: 1 }}
    >
      {items.map((item, index) => (
        <DropdownItem 
          key={index} 
          label={item.menuItem} 
          href={item.link} 
          className="text-[9px] md:text-[11px] xl:text-[14px] 2xl:text-[17px] w-full py-1 px-2 rounded"
        />
      ))}
    </div>
  );
};

export default DropdownMenu;