import React from "react";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  className?: string;
  style?: React.CSSProperties;
}

const InputField = ({ type = "text", className, style, ...props }: InputFieldProps) => {
  return <input type={type} className={className} style={style} {...props} />;
};

export default InputField;
