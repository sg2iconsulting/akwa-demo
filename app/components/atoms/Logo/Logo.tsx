import React from "react";
import Link from "next/link";
import { BsLightning } from "react-icons/bs";

interface LogoProps {
  link?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ link = "/", className = "" }) => {
  return (
    <Link href={link} className={`flex items-center gap-2 ${className}`}>
      <BsLightning className="text-[22px] md:text-[26px] text-[#19A0BF]" />
      <span className="font-bold text-lg md:text-xl">FastVolt</span>
    </Link>
  );
};

export default Logo; 