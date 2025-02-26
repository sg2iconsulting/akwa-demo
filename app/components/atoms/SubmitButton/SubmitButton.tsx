import React from "react";

export interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SubmitButton = ({ children, className, style, ...props }: SubmitButtonProps) => {
  return (
    <button type="submit" className={className} style={style} {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;
