import React from 'react'

export interface ButtonProps {
    buttonClassename?: string;
    buttonStyle?: React.CSSProperties;
    buttonLabel: string;
}

const Button = ({buttonClassename="px-6 py-4 bg-red-400 text-grey-800", buttonStyle, buttonLabel}: ButtonProps) => {
  return (
    <button className={buttonClassename || ""} style={buttonStyle || {}}>
        {buttonLabel}
    </button>
  )
}

export default Button