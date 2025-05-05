import React from 'react';

export interface ButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTextClassename?: string;
  buttonTextStyle?: React.CSSProperties;
  buttonTextLabel: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({
  buttonTextClassename = "px-6 py-2 text-white bg-[#19A0BF] text-xs md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[140px] md:w-[180px] lg:w-[240px] rounded-full",
  buttonTextStyle,
  buttonTextLabel,
  ...props
}) => {
  return (
    <button className={buttonTextClassename} style={buttonTextStyle} {...props}>
      {buttonTextLabel}
    </button>
  );
};

export default ButtonText;
