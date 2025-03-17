import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  inputClassname?: string;
  inputStyle?: React.CSSProperties;
  cercleDivClassname?: string;
  cercleDivStyle?: React.CSSProperties;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  inputClassname = "sr-only peer",
  inputStyle,
  cercleDivClassname = "relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600focus:outline-none focus:ring-0 sm:w-11 sm:h-6 sm:after:h-5 sm:after:w-5",
  cercleDivStyle,
}) => {
  return (
    <form>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className={inputClassname}
          style={inputStyle}
          checked={checked}
          onChange={onChange}
        />
        <div className={cercleDivClassname} style={cercleDivStyle}></div>
      </label>
    </form>
  );
};

export default ToggleSwitch;
