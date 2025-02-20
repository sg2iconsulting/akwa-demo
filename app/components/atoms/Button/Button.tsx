import React from 'react'

export interface ButtonProps {
    buttonClassename?: string;
    buttonStyle?: React.CSSProperties;
    children: React.ReactNode;
}

const Button = ({buttonClassename="px-6 py-2 bg-red-400 text-grey-800 rounded-full", buttonStyle, children}: ButtonProps) => {
  return (
    <button className={buttonClassename || ""} style={buttonStyle || {}}>
        {children}
    </button>
  )
}

export default Button