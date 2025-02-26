import React from 'react';

export interface ButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTextClassename?: string;
  buttonTextStyle?: React.CSSProperties;
  buttonTextLabel: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({
  buttonTextClassename = "px-6 py-2 bg-red-400 text-grey-800",
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
