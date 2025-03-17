import React from "react";
import { IconType } from "react-icons";

interface IconButtonProps {
  icon: IconType;
  onClick?: () => void;
  className?: string;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  className = "",
  ariaLabel
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      aria-label={ariaLabel}
    >
      <Icon className="text-xl" />
    </button>
  );
};

export default IconButton; 