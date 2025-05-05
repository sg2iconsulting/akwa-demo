import React from "react";

export interface DropDownSelectProps<T extends object> {
  options: T[];
  labelKey: keyof T;
  valueKey: keyof T;
  selectedValue: string;
  onSelect: (value: string) => void;
  itemBackgroundHoverColor: string;
  className?: string;
}

const DropDownSelect = <T extends object>({
  options,
  labelKey,
  valueKey,
  selectedValue,
  onSelect,
  itemBackgroundHoverColor,
  className,
}: DropDownSelectProps<T>) => {
  return (
    <div className={`absolute left-0 mt-2 w-full border border-gray-300 rounded-lg shadow-lg ${className}`}>
      {options.map((option) => (
        <div
          key={option[valueKey] as string}
          className={`px-4 py-2 hover:bg-[#052337] cursor-pointer ${
            option[labelKey] === "En" ? "rounded-t-lg" : ""
          } ${option[labelKey] === "Ar" ? "rounded-b-lg" : ""}`}
          onClick={() => onSelect(option[valueKey] as string)}
          style={{
            backgroundColor:
              option[valueKey] === selectedValue ? itemBackgroundHoverColor : "transparent",
            transition: "background-color 0.3s ease",
          }}
        >
          {option[labelKey] as React.ReactNode}
        </div>
      ))}
    </div>
  );
};

export default DropDownSelect;