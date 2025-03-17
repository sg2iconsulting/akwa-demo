"use client";
import React from "react";
import { useTheme } from "next-themes";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import CheckboxInput from "../../atoms/CheckboxInput/CheckboxInput";
import Icon from "../../atoms/Icon/Icon";

interface ThemeToggleProps {
  containerClassename?: string;
  checkboxClassename?: string;
  trackClassename?: string;
  lightIconClassename?: string;
  darkIconClassename?: string;
  lightIconColor?: string;
  darkIconColor?: string;
  iconSize?: number;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  checkboxClassename = "sr-only peer",
  trackClassename = "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-grey-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-grey-300",
  lightIconClassename = "ml-2",
  darkIconClassename = "mr-2",
  lightIconColor = "#FBBF24", 
  darkIconColor = "#6B7280",
  iconSize = 18,
}) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-3 p-2 rounded-lg">
      <Icon 
        icon={FaMoon} 
        iconClassename={darkIconClassename}
        iconSize={iconSize}
        iconColor={resolvedTheme === "dark" ? lightIconColor : darkIconColor}
      />
      <label className="relative inline-flex items-center cursor-pointer">
        <CheckboxInput
          checked={resolvedTheme === "light"}
          onChange={handleToggle}
          className={checkboxClassename}
        />
        <div className={trackClassename}></div>
      </label>
      <Icon 
        icon={HiSun} 
        iconClassename={lightIconClassename}
        iconSize={iconSize}
        iconColor={resolvedTheme === "light" ? lightIconColor : darkIconColor}
      />
    </div>
  );
};

export default ThemeToggle;