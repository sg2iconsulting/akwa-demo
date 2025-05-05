import React from "react";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import Button from "../atoms/Button";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
  className = "",
}) => {
  return (
    <Button
      onClick={onClick}
      className={`lg:hidden p-2 rounded-md font-white ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <IoMdClose className="text-2xl font-white" />
      ) : (
        <GrMenu className="text-2xl font-white" />
      )}
    </Button>
  );
};

export default MobileMenuButton;
