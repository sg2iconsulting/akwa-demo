import React from "react";

interface LanguageItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  itemBackgroundHoverColor: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({
  label,
  isSelected,
  onClick,
  itemBackgroundHoverColor,
}) => {
  return (
    <div
      className={`px-4 py-2 cursor-pointer ${isSelected ? "bg-blue-500" : ""}`}
      onClick={onClick}
      style={{
        backgroundColor: itemBackgroundHoverColor,
        transition: "background-color 0.3s ease",
      }}
    >
      {label}
    </div>
  );
};

export default LanguageItem;
