import clsx from "clsx";
import React from "react";

export interface SelectOptionsProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Record<string, any>[];
  labelKey: string;
  valueKey: string;
  value?: string;
  className?: string;
}

const SelectOptions = ({ options, labelKey, valueKey, value, onChange, className, ...props }: SelectOptionsProps) => {
  return (
    <select
      value={value}
      onChange={() => {}}
      className={clsx("bg-re-500", className)}
      {...props}
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
