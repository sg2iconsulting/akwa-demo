import React from "react";

export interface SelectOptionsProps {
  options: Record<string, any>[];
  labelKey: string;
  valueKey: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const SelectOptions = ({ options, labelKey, valueKey, value, onChange, className }: SelectOptionsProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={className}
    >
      {options.map((option, index) => (
        <option key={index} value={option[valueKey]}>
          {option[labelKey]}
        </option>
      ))}
    </select>
  );
};

export default SelectOptions;
