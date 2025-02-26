import React from "react";

export interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  style?: React.CSSProperties;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  className = "sr-only peer",
  style,
  ...props
}) => {
  return <input type="checkbox" className={className} style={style} {...props} />;
};

export default CheckboxInput;
