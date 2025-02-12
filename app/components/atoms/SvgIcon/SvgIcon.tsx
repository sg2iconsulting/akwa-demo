import React from "react";

interface SvgIconProps {
  icon: string; 
  color: string;
  size: number;
}

const SvgIcon: React.FC<SvgIconProps> = ({ icon, color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      xmlns=""
      fill="none"
    >
      <path d={icon} fill={color} />
    </svg>
  );
};

export default SvgIcon;
