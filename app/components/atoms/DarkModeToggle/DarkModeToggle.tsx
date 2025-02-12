import React from "react";

interface DarkModeToggleProps {
  resolvedTheme: string;
  handleToggle: () => void;
  containerClassname?: string;
  containerStyle?: React.CSSProperties;
  cercleDivClassname?: string;
  cercleDivStyle?: React.CSSProperties;
  inputClassname?: string;
  inputStyle?: React.CSSProperties;
  SunIcon: React.ElementType;
  MoonIcon: React.ElementType;
  sunIconClassname?: string;
  sunIconStyle?: React.CSSProperties;
  moonIconClassname?: string;
  moonIconStyle?: React.CSSProperties;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  resolvedTheme,
  handleToggle,
  containerClassname,
  containerStyle,
  cercleDivClassname,
  cercleDivStyle,
  inputClassname,
  inputStyle,
  SunIcon,
  MoonIcon,
  sunIconClassname,
  sunIconStyle,
  moonIconClassname,
  moonIconStyle,
}) => {
  return (
    <div
      className={containerClassname || "flex items-center gap-2 mt-1 justify-around w-[90px] mr-3"}
      style={containerStyle}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className={sunIconClassname || "text-white text-[13px] md:text-[28px] mb-1"} style={sunIconStyle} />
      ) : (
        <MoonIcon className={moonIconClassname || "text-white text-[10px] md:text-[15px] mb-1"} style={moonIconStyle} />
      )}
      <form>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className={`sr-only peer ${inputClassname || ""}`}
            style={inputStyle}
            checked={resolvedTheme === "light"}
            onChange={handleToggle}
          />
          <div
            className={`relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 
                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                  after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border 
                  after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600
                  focus:outline-none focus:ring-0 sm:w-11 sm:h-6 sm:after:h-5 sm:after:w-5 ${cercleDivClassname || ""}`}
            style={cercleDivStyle}
          ></div>
        </label>
      </form>
    </div>
  );
};

export default DarkModeToggle;
