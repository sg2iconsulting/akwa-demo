"use client";
import React from "react";
import DropdownItem from "../../atoms/DropdownItem/DropdownItem";
import { itemProps } from "../MenuItemsList/MenuItemsList";

interface DropdownMenuProps {
  items: itemProps[];
  isOpen: boolean;
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  isOpen,
  className = "absolute left-[70px] -bottom-[101px] md:left-[85px] md:-bottom-[21px] lg:-left-6 lg:bottom-[3px] xl:-left-8 xl:bottom-[24px] 2xl:-left-7 rounded-[10px] w-28 md:w-32 xl:w-[170px] 2xl:w-[195px] flex flex-col gap-2 text-start lg:py-2 bg-[#052337] text-white overflow-hidden md:transition-all md:duration-700 md:ease-out",
}) => {
  return (
    <div className={`${className} ${isOpen ? "block md:max-h-[160px] 2xl:max-h-[180px]" : "hidden md:block md:max-h-0"}`}>
      <div className="flex flex-col gap-2 pl-3 lg:pl-5 md:py-1 xl:py-2">
        {items.map((item, index) => (
          <DropdownItem key={index} label={item.menuItem} href={item.link} />
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
