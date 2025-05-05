import { cn } from "@/utils/cn";
import React from "react";
import DropdownItem from "../atoms/DropdownItem";

interface itemProps {
  menuItem?: React.ReactNode;
  link?: string;
}

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
