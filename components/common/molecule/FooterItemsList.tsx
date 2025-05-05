import React from "react";
import DropdownButton from "./DropdownButton";

interface itemProps {
  menuItem?: React.ReactNode;
  link?: string;
}

export interface FooterItem {
  menuItem: string | React.ReactNode;
  link?: string;
  isDropdown?: boolean;
  dropdownItems?: itemProps[];
}

interface FooterItemsListProps {
  menuItems: FooterItem[];
  menuItemClassename?: string;
  menuItemLinkClassename?: string;
  backgroundColor?: string;
}

const FooterItemsList: React.FC<FooterItemsListProps> = ({
  menuItems,
  menuItemClassename = "",
  menuItemLinkClassename = "",
  backgroundColor = "black",
}) => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-4 py-4">
      {menuItems.map((item, index) => (
        <li key={index} className={menuItemClassename}>
          {item.isDropdown && item.dropdownItems ? (
            <DropdownButton
              label={typeof item.menuItem === "string" ? item.menuItem : "Menu"}
              dropdownItems={item.dropdownItems}
              position="top"
              backgroundColor={backgroundColor}
              className={menuItemLinkClassename}
            />
          ) : typeof item.menuItem === "string" ? (
            <a href={item.link || "#"} className={menuItemLinkClassename}>
              {item.menuItem}
            </a>
          ) : (
            item.menuItem
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterItemsList;
