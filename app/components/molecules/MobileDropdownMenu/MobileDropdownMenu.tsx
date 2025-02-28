import React from "react";
import Button from "../../atoms/Button/Button";
import MenuItemsList, { itemProps } from "../../atoms/MenuItemsList/MenuItemsList";

interface MobileDropdownMenuProps {
  isOpen: boolean;
  menuItems: itemProps[];
  menuItemsTextColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  roundedButton?: boolean;
  buttonLabel?: string;
  borderButton?: boolean;
  borderButtonColor?: string;
}

const MobileDropdownMenu: React.FC<MobileDropdownMenuProps> = ({
  isOpen,
  menuItems,
  menuItemsTextColor = "white",
  buttonBackgroundColor = "#ff0000",
  buttonTextColor = "#fff",
  roundedButton = true,
  buttonLabel = "Get Started",
  borderButton = false,
  borderButtonColor = "#fff",
}) => {
  return (
    <div
      className={`lg:hidden w-full bg-[#052337] shadow-md overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
        isOpen ? "max-h-[300px]" : "max-h-0"
      }`}
    >
      <ul
        style={{ color: menuItemsTextColor }}
        className="flex flex-col font-bold items-center gap-4 p-6 text-[10px] md:text-[12px]"
      >
        <li>
          <Button
            buttonClassname={`px-6 py-2 ${buttonBackgroundColor} ${buttonTextColor} ${roundedButton ? "rounded-full" : ""} ${borderButton ? `border ${borderButtonColor}` : ""}`}
          >
            {buttonLabel}
          </Button>
        </li>
        <MenuItemsList
          menuItems={menuItems}
          menuItemClassename="cursor-pointer"
          menuItemsListContainerClassename="flex flex-col items-center gap-4"
        />
      </ul>
    </div>
  );
};

export default MobileDropdownMenu;
