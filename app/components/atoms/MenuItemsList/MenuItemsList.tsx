import React from "react";

export interface MenuItemsListProps {
  menuItems: string[];
  menuItemStyle?: React.CSSProperties;
  menuItemClassename?: string;
  menuItemsListContainerClassename?: string;
  menuItemsListContainerStyle?: React.CSSProperties;
}

const MenuItemsList = ({
  menuItems= ["Home", "About", "Contact"],
  menuItemsListContainerStyle= {},
  menuItemsListContainerClassename= "",
  menuItemStyle= {},
  menuItemClassename= "",
}: MenuItemsListProps) => {
  return (
    <ul className={menuItemsListContainerClassename || ""} style={menuItemsListContainerStyle || {}}>
      {menuItems &&
        menuItems.map((item, index) => (
          <li key={index} className={menuItemClassename || ""} style={menuItemStyle || {}}>
            {item}
          </li>
        ))}
    </ul>
  );
};

export default MenuItemsList;
