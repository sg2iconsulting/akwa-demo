import React from "react";
import { HiMiniChevronDown } from "react-icons/hi2";

export interface DropdownTriggerProps {
  label: string;
  chevronColor: string;
  onClick: () => void;
  className?: string;
}

const DropdownTrigger = ({
  label,
  chevronColor,
  onClick,
  className,
}: DropdownTriggerProps) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg bg-transparent h-7 px-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span>{label}</span>
      <HiMiniChevronDown color={chevronColor} />
    </div>
  );
};

export default DropdownTrigger;