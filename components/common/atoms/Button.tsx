import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonClassename?: string;
  buttonStyle?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  buttonClassename = "px-6 py-2 lg:py-4 text-white bg-[#8BBA25] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[170px] md:w-[200px] lg:w-[240px] rounded-full",
  buttonStyle,
  children,
  ...props
}) => {
  return (
    <button className={buttonClassename} style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
