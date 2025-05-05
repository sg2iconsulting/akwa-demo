import React, { useState } from "react";
import SvgIcon from "../../atoms/SvgIcon/SvgIcon";
import SelectOptions from "../../atoms/SelectOptions/SelectOptions";

export interface LanguageOptions {
  value: string;
  label: React.ReactNode;
}

export interface SelectItemsProps {
  selectItems: LanguageOptions[];
  selectItemClassename?: string;
  selectItemsTextColor: string;
  itemBackgroundHoverColor?: string;
  iconColor?: string;
  iconPath: string;
  iconSize: number;
  labelItem: string;
  valueItem: string;
}

const SelectItems: React.FC<SelectItemsProps> = ({
  selectItems,
  selectItemClassename,
  selectItemsTextColor,
  iconColor,
  iconPath,
  iconSize,
  labelItem,
  valueItem,
}) => {
  const [selectedValue, setSelectedValue] = useState("fr");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="flex items-center">
      <SvgIcon icon={iconPath} color={iconColor || "#000000"} size={iconSize} />
      <div
        style={{
          color: selectItemsTextColor,
        }}
        className="relative inline-block items-center"
      >
        <SelectOptions
          options={selectItems}
          labelKey={labelItem}
          valueKey={valueItem}
          value={selectedValue}
          onChange={handleChange}
          className={selectItemClassename}
        />
      </div>
    </div>
  );
};

export default SelectItems;
