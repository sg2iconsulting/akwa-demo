
// import React, { useState } from "react";
// import { HiMiniChevronDown } from "react-icons/hi2";
// import LanguageItem from "../../atoms/LanguageItems/LanguageItem";
// import SvgIcon from "../../atoms/SvgIcon/SvgIcon";

// export interface LanguageOptions {
//   value: string;
//   label: string;
// }

// export interface LanguageSelectProps {
//   languageItems: LanguageOptions[];
//   languageItemsTextColor: string;
//   itemBackgroundHoverColor: string;
//   iconColor: string;
//   chevronColor: string;
//   iconPath: string;
//   iconSize: number;
// }

// const LanguageSelect: React.FC<LanguageSelectProps> = ({
//   languageItems,
//   languageItemsTextColor,
//   iconColor,
//   chevronColor,
//   itemBackgroundHoverColor,
//   iconPath,
//   iconSize,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState("fr");

//   const handleOptionClick = (value: string) => {
//     setSelectedValue(value);
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex items-center">
//       <SvgIcon icon={iconPath} color={iconColor} size={iconSize} />
//       <div
//         style={{
//           color: languageItemsTextColor,
//         }}
//         className="relative inline-block items-center"
//       >
//         {/* Trigger Button */}
//         <div
//           className="flex items-center gap-2 rounded-lg bg-transparent h-7 px-2 cursor-pointer"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span>
//             {languageItems.find((opt) => opt.value === selectedValue)?.label}
//           </span>
//           <HiMiniChevronDown color={chevronColor} />
//         </div>
//         {isOpen && (
//           <div className="absolute left-0 mt-2 w-full border border-gray-300 rounded-lg shadow-lg">
//             {languageItems.map((option) => (
//               <LanguageItem
//                 key={option.value}
//                 label={option.label}
//                 isSelected={option.value === selectedValue}
//                 onClick={() => handleOptionClick(option.value)}
//                 itemBackgroundHoverColor={itemBackgroundHoverColor}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LanguageSelect;

import React, { useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";
import SvgIcon from "../../atoms/SvgIcon/SvgIcon";
import SelectInput from "../../atoms/SelectInput/SelectInput";

export interface LanguageOptions {
  value: string;
  label: string;
}

export interface SelectItemsProps {
  languageItems: LanguageOptions[];
  languageItemsTextColor: string;
  itemBackgroundHoverColor?: string;
  iconColor: string;
  chevronColor: string;
  iconPath: string;
  iconSize: number;
}

const SelectItems: React.FC<SelectItemsProps> = ({
  languageItems,
  languageItemsTextColor,
  iconColor,
  chevronColor,
  iconPath,
  iconSize,
}) => {
  const [selectedValue, setSelectedValue] = useState("fr");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="flex items-center">
      <SvgIcon icon={iconPath} color={iconColor} size={iconSize} />
      <div
        style={{
          color: languageItemsTextColor,
        }}
        className="relative inline-block items-center"
      >
        <SelectInput
          options={languageItems}
          value={selectedValue}
          onChange={handleChange}
          className="flex items-center gap-2 rounded-lg bg-transparent h-7 px-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SelectItems;