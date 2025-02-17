import React from "react";
import CheckboxInput from "../../atoms/CheckboxInput/CheckboxInput";
import CheckboxToggleTrack from "../../atoms/CheckboxToggleTrack/CheckboxToggleTrack";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  inputClassname?: string;
  inputStyle?: React.CSSProperties;
  trackClassname?: string;
  trackStyle?: React.CSSProperties;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  inputClassname,
  inputStyle,
  trackClassname,
  trackStyle,
}) => {
  return (
    <form>
      <label className="inline-flex items-center cursor-pointer">
        <CheckboxInput checked={checked} onChange={onChange} className={inputClassname} style={inputStyle} />
        <CheckboxToggleTrack className={trackClassname} style={trackStyle} />
      </label>
    </form>
  );
};

export default ToggleSwitch;
