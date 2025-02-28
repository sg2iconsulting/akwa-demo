import Link from "next/link";
import React from "react";

export interface itemProps {
  menuItem?: React.ReactNode;
  link?: string;
}

export interface MenuItemsListProps {
  menuItemStyle?: React.CSSProperties;
  menuItemClassename?: string;
  menuItemsListContainerClassename?: string;
  menuItemsListContainerStyle?: React.CSSProperties;
  menuItems: itemProps[];
}

const MenuItemsList = ({
  menuItems = [
    {
      menuItem: "Home",
      link: "#",
    },
    {
      menuItem: "Profile",
      link: "#",
    },
    {
      menuItem: "About",
      link: "#",
    },
    {
      menuItem: "Contact",
      link: "#",
    },
  ],
  menuItemsListContainerStyle = {},
  menuItemsListContainerClassename = "",
  menuItemStyle = {},
  menuItemClassename = "",
}: MenuItemsListProps) => {
  return (
    <ul
      className={
        menuItemsListContainerClassename ||
        "lg:flex justify-evenly gap-8 font-bold text-white hidden"
      }
      style={menuItemsListContainerStyle || {}}
    >
      {menuItems &&
        menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link || ""}
            className={menuItemClassename || "flex items-center cursor-pointer"}
          >
            <li style={menuItemStyle || {}}>{item.menuItem}</li>
          </Link>
        ))}
    </ul>
  );
};

export default MenuItemsList;
