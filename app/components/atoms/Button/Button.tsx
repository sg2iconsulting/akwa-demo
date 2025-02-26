import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonClassname?: string;
  buttonStyle?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  buttonClassname = "px-6 py-2 bg-red-400 text-grey-800 rounded-full",
  buttonStyle,
  children,
  ...props
}) => {
  return (
    <button className={buttonClassname} style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
