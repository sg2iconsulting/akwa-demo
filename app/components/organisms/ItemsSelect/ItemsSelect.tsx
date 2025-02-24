"use client";
import React, { useState } from "react";
import SvgIcon from "../../atoms/SvgIcon/SvgIcon";
import DropDownSelect from "../../molecules/DropDownSelect/DropDownSelect";
import DropdownTrigger from "../../atoms/DropDownTrigger/DropDownTrigger";

export interface ItemsSelectProps<T extends object> {
  languageItems: T[];
  labelKey: keyof T;
  valueKey: keyof T;
  languageItemsTextColor: string;
  itemBackgroundHoverColor: string;
  iconColor: string;
  chevronColor: string;
  iconPath: string;
}

const ItemsSelect = <T extends object>({
  languageItems,
  labelKey,
  valueKey,
  languageItemsTextColor,
  itemBackgroundHoverColor,
  iconColor,
  chevronColor,
  iconPath,
}: ItemsSelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("fr");

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center">
      <SvgIcon icon={iconPath} color={iconColor} size={20} />
      <div
        style={{ color: languageItemsTextColor }}
        className="relative inline-block items-center"
      >
        <DropdownTrigger
          label={languageItems.find((opt) => opt[valueKey] === selectedValue)?.[labelKey] as string}
          chevronColor={chevronColor}
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <DropDownSelect
            options={languageItems}
            labelKey={labelKey}
            valueKey={valueKey}
            selectedValue={selectedValue}
            onSelect={handleOptionClick}
            itemBackgroundHoverColor={itemBackgroundHoverColor}
          />
        )}
      </div>
    </div>
  );
};

export default ItemsSelect;

// import { useState } from "react";
// import SvgIcon from "../../atoms/SvgIcon/SvgIcon";
// import DropDownSelect from "../../molecules/DropDownSelect/DropDownSelect";
// import DropdownTrigger from "../../atoms/DropDownTrigger/DropDownTrigger";

// export interface LanguageSelectProps {
//   languageItems: { [key: string]: string }[];
//   labelKey: string;
//   valueKey: string;
//   languageItemsTextColor: string;
//   itemBackgroundHoverColor: string;
//   iconColor: string;
//   chevronColor: string;
// }

// const LanguageSelect = ({
//   languageItems,
//   labelKey,
//   valueKey,
//   languageItemsTextColor,
//   itemBackgroundHoverColor,
//   iconColor,
//   chevronColor,
// }: LanguageSelectProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(languageItems[0]?.[valueKey] || "");

//   const handleOptionClick = (value: string) => {
//     setSelectedValue(value);
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex items-center gap-2">
//       {/* Language Icon */}
//       <SvgIcon icon="" color={iconColor} size={20} />

//       {/* Dropdown Component */}
//       <DropDownSelect isOpen={isOpen} setIsOpen={setIsOpen}>

//         {/* Dropdown Items */}
//         {isOpen && (
//           <div className="absolute left-0 mt-2 w-full border border-gray-300 rounded-lg shadow-lg">
//             {languageItems.map((option) => (
//               <div
//                 key={option[valueKey]}
//                 className="px-4 py-2 cursor-pointer"
//                 style={{
//                   backgroundColor: itemBackgroundHoverColor,
//                   transition: "background-color 0.3s ease",
//                 }}
//                 onClick={() => handleOptionClick(option[valueKey])}
//               >
//                 {option[labelKey]}
//               </div>
//             ))}
//           </div>
//         )}
//       </DropDownSelect>
//     </div>
//   );
// };

// export default LanguageSelect;
