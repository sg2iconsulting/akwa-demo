import React from "react";
import { IconType } from "react-icons";
import { FaSun, FaMoon } from "react-icons/fa";
import Icon from "../../atoms/Icon/Icon";
import ToggleSwitch from "../../atoms/ToggleSwitch/ToggleSwitch";

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
  cercleDivClassname?: string;
  cercleDivStyle?: React.CSSProperties;
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
  cercleDivClassname,
  cercleDivStyle,
  containerClassname = "flex items-center space-x-2",
  containerStyle,
}) => {
  return (
    <div className={containerClassname} style={containerStyle || {}}>
      <Icon
        icon={checked ? sunIcon : moonIcon}
        iconClassename={checked ? sunIconClassname : moonIconClassname}
        iconStyle={checked ? sunIconStyle : moonIconStyle}
        iconColor={checked ? "purple" : "red"}
        iconSize={16}
      />
      <ToggleSwitch
        checked={checked}
        onChange={onChange}
        inputClassname={inputClassname}
        inputStyle={inputStyle}
        cercleDivClassname={cercleDivClassname}
        cercleDivStyle={cercleDivStyle}
      />
    </div>
  );
};

export default ToggleWithIcon;
