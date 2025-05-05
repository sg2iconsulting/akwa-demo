import Link from "next/link";
import React from "react";

export interface itemProps {
  menuItem?: React.ReactNode;
  link?: string;
}

export interface MenuItemsListProps {
  menuItems: itemProps[];
  menuItemClassename?: string;
  menuItemStyle?: React.CSSProperties;
  menuItemLinkClassename?: string;
}

const MenuItemsList = ({
  menuItems,
  menuItemStyle = {},
  menuItemClassename = "",
}: MenuItemsListProps) => {
  return (
    <ul className="lg:flex justify-evenly gap-4 xl:gap-8 font-bold text-white hidden">
      {menuItems &&
        menuItems.map((item, index) => {
          const isDropdown =
            typeof item.menuItem !== "string" &&
            React.isValidElement(item.menuItem);

          if (isDropdown) {
            return (
              <li
                key={index}
                style={menuItemStyle || {}}
                className={
                  menuItemClassename || "flex items-center cursor-pointer"
                }
              >
                {item.menuItem}
              </li>
            );
          }

          return (
            <Link
              key={index}
              href={item.link || ""}
              className={
                menuItemClassename || "flex items-center cursor-pointer"
              }
              style={menuItemStyle}
            >
              <li style={menuItemStyle || {}}>{item.menuItem}</li>
            </Link>
          );
        })}
    </ul>
  );
};

export default MenuItemsList;
