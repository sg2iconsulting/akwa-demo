import React from "react";

interface CheckboxInputProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  checked,
  onChange,
  className = "sr-only peer",
  style,
}) => {
  return (
    <input
      type="checkbox"
      className={className}
      style={style}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default CheckboxInput;
