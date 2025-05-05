import React from "react";
import { IconType } from "react-icons";
import { FaSun, FaMoon } from "react-icons/fa";
import Icon from "../atoms/Icon";
import ToggleSwitch from "./ToggleSwitch";

interface ToggleWithIconProps {
  checked: boolean;
  onChange: () => void;
  sunIcon?: IconType;
  moonIcon?: IconType;
  sunIconClassname?: string;
  sunIconStyle?: React.CSSProperties;
  moonIconClassname?: string;
  moonIconStyle?: React.CSSProperties;
  inputClassname?: string;
  inputStyle?: React.CSSProperties;
  trackClassname?: string;
  trackStyle?: React.CSSProperties;
  containerClassname?: string;
  containerStyle?: React.CSSProperties;
}

const ToggleWithIcon: React.FC<ToggleWithIconProps> = ({
  checked,
  onChange,
  sunIcon = FaSun,
  moonIcon = FaMoon,
  sunIconClassname = "text-yellow-500 text-[20px] md:text-[28px] mb-1",
  sunIconStyle,
  moonIconClassname = "text-gray-300 text-[15px] md:text-[20px] mb-1",
  moonIconStyle,
  inputClassname,
  inputStyle,
  trackClassname,
  trackStyle,
  containerClassname = "lg:flex items-center hidden",
  containerStyle,
}) => {
  return (
    <div className={containerClassname} style={containerStyle || {}}>
      <div className="w-full h-full flex items-center space-x-2 mt-1.5">
        <Icon
          icon={checked ? sunIcon : moonIcon}
          iconClassename={checked ? sunIconClassname : moonIconClassname}
          iconStyle={checked ? sunIconStyle : moonIconStyle}
          iconColor={checked ? "white" : "red"}
          iconSize={16}
        />
        <ToggleSwitch
          checked={checked}
          onChange={onChange}
          inputClassname={inputClassname}
          inputStyle={inputStyle}
        />
      </div>
      {/* <ToggleSwitch 
      checked={checked}
      onChange={onChange}
      inputClassname={inputClassname}
      inputStyle={inputStyle}
      trackClassname={trackClassname}
      trackStyle={trackStyle}
      /> */}
    </div>
  );
};

export default ToggleWithIcon;
