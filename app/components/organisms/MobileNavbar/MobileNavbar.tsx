import React from "react";
import { motion } from "framer-motion";
import Logo from "../../atoms/Logo/Logo";
import NavLinks from "../../molecules/NavLinks/NavLinks";
import ThemeToggle from "../../atoms/ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../../molecules/LanguageSwitcher/LanguageSwitcher";
import Button from "../../atoms/Button/Button";
import { itemProps } from "../../molecules/MenuItemsList/MenuItemsList";

interface MobileNavbarProps {
  isOpen: boolean;
  closeMenu: () => void;

  menuItemsList: itemProps[];
  mobileMenuItemsListStyle?: React.CSSProperties;

  mobileMenuItemClassename?: string;
  mobileMenuItemStyle?: React.CSSProperties;

  mobileButtonClassename?: string;
  mobileButtonStyle?: React.CSSProperties;
  mobileButtonLable: React.ReactNode;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen,
  closeMenu,
  menuItemsList,
  mobileMenuItemsListStyle,
  mobileMenuItemClassename,
  mobileMenuItemStyle,
  mobileButtonLable,
  mobileButtonClassename,
  mobileButtonStyle,
}) => {
  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="lg:hidden fixed top-[60px] left-0 right-0 bg-white mt-6 dark:bg-gray-900 shadow-lg z-40 overflow-hidden"
    >
      <div className="flex justify-center w-full py-4">
        <Button className={mobileButtonClassename} style={mobileButtonStyle}>
          {mobileButtonLable}
        </Button>
      </div>
      <div className="flex flex-col items-center p-4 space-y-6">
        <NavLinks
          menuItemsList={menuItemsList}
          menuItemsListStyle={mobileMenuItemsListStyle}
          menuItemClassename={mobileMenuItemClassename}
          menuItemStyle={mobileMenuItemStyle}
          isMobile={true}
          closeMenu={closeMenu}
        />
      </div>
    </motion.div>
  );
};

export default MobileNavbar;
