import Link from "next/link";
import React, { forwardRef } from "react";

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  roundedButton?: string;
  link?: string;
  onClick?: () => void;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      backgroundColor,
      textColor,
      onClick,
      roundedButton,
      border,
      borderColor,
      link
    },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        ref={ref}
        className={`w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] cursor-pointer mt-2 text-[10px] md:text-[12px] xl:text-[16px] 
          2xl:text-[22px] font-bold mb-2`}
        style={{
          backgroundColor: backgroundColor || undefined,
          color: textColor || undefined,
          borderRadius: roundedButton || undefined,
          border: border || undefined,
          borderColor: borderColor || undefined,
        }}
      >
        <Link href={link || "#"}>{label}</Link>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
