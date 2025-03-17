// import Link from "next/link";
// import React from "react";
// import { MenuItemsListProps } from "../MenuItemsList/MenuItemsList";

// const FooterItemsList = ({
//   menuItems = [
//     {
//       menuItem: "Home",
//       link: "#",
//     },
//     {
//       menuItem: "Profile",
//       link: "#",
//     },
//     {
//       menuItem: "About",
//       link: "#",
//     },
//     {
//       menuItem: "Contact",
//       link: "#",
//     },
//   ],
//   menuItemsListContainerStyle = {},
//   menuItemsListContainerClassename = "",
//   menuItemStyle = {},
//   menuItemClassename = "",
// }: MenuItemsListProps) => {
//   return (
//     <ul
//       className={
//         menuItemsListContainerClassename ||
//         "flex flex-wrap w-full justify-evenly gap-4 font-bold text-white"
//       }
//       style={menuItemsListContainerStyle || {}}
//     >
//       {menuItems &&
//         menuItems.map((item, index) => {
//           const isDropdown = typeof item.menuItem !== 'string' && React.isValidElement(item.menuItem);

//           if (isDropdown) {
//             return (
//               <li
//                 key={index}
//                 style={menuItemStyle || {}}
//                 className={menuItemClassename?.replace('flex items-center', '') || "cursor-pointer"}
//               >
//                 {item.menuItem}
//               </li>
//             );
//           }

//           return (
//             <Link
//               key={index}
//               href={item.link || ""}
//               className={menuItemClassename || "flex items-center cursor-pointer"}
//             >
//               <li className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-full" style={menuItemStyle || {}}>{item.menuItem}</li>
//             </Link>
//           );
//         })}
//     </ul>
//   );
// };

// export default FooterItemsList;

import Link from "next/link";
import React from "react";
import { MenuItemsListProps } from "../../molecules/MenuItemsList/MenuItemsList";

const FooterItemsList = ({
  menuItems = [
    { menuItem: "Home", link: "#" },
    { menuItem: "Profile", link: "#" },
    { menuItem: "About", link: "#" },
    { menuItem: "Contact", link: "#" },
  ],
  menuItemStyle = {},
  menuItemClassename = "",
  menuItemLinkClassename
}: MenuItemsListProps) => {
  return (
    <ul
      className={"flex flex-row flex-wrap justify-center w-full font-bold gap-6 lg:gap-8 text-white overflow-x-auto scrollbar-hide"}
      style={{ scrollbarWidth: "none" }}
    >
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
                className={menuItemClassename?.replace("flex items-center", "")}
              >
                {item.menuItem}
              </li>
            );
          }

          return (
            <Link
              key={index}
              href={item.link || ""}
              className="flex items-center cursor-pointer hover:opacity-80 transition-all duration-200"
            >
              <li
                className={menuItemLinkClassename}
                style={menuItemStyle || {}}
              >
                {item.menuItem}
              </li>
            </Link>
          );
        })}
    </ul>
  );
};

export default FooterItemsList;
