import React from 'react'

export interface ButtonTextProps {
    buttonTextClassename?: string;
    buttonTextStyle?: React.CSSProperties;
    buttonTextLabel: string;
}

const ButtonText = ({buttonTextClassename="px-6 py-2 bg-red-400 text-grey-800", buttonTextStyle, buttonTextLabel}: ButtonTextProps) => {
  return (
    <button className={buttonTextClassename || ""} style={buttonTextStyle || {}}>
        {buttonTextLabel}
    </button>
  )
}

export default ButtonText