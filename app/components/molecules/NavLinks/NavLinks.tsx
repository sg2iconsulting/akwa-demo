import React from "react";
import NavbarLink from "../../atoms/NavbarLink/NavbarLink";
import { itemProps } from "../MenuItemsList/MenuItemsList";

interface NavLinksProps {
  isMobile?: boolean;
  menuItemsList: itemProps[];
  menuItemsListStyle?: React.CSSProperties;
  menuItemClassename?: string;
  menuItemStyle?: React.CSSProperties;
  closeMenu?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  isMobile = false,
  closeMenu,
  menuItemsList,
  menuItemsListStyle,
  menuItemClassename,
  menuItemStyle
}) => {

  return (
    <div className={`${isMobile ? "flex-col space-y-4" : "space-x-6"} flex justify-evenly gap-4 xl:gap-8 font-bold lg:hidden`} style={menuItemsListStyle}>
      {menuItemsList.map((item, index) => (
        <NavbarLink
          key={index}
          href={item.link || "#"}
          label={item.menuItem || "label"}
          className={menuItemClassename}
          style={menuItemStyle}
          onClick={closeMenu}
        />
      ))}
    </div>
  );
};

export default NavLinks; 