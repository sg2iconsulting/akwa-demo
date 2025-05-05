import React from "react";
import Button from "../../atoms/Button/Button";
import MenuItemsList, {
  itemProps,
} from "../../molecules/MenuItemsList/MenuItemsList";
import SelectItems, {
  LanguageOptions,
} from "../../molecules/SelectItems/SelectItems";
import Image from "../../atoms/Image/Image";
import ThemeToggle from "../../molecules/ThemeToggle/ThemeToggle";

export interface DesktopNavbarProps {
  desktopLogoSrcImage: string;
  desktopLogoClassename?: string;
  desktopLogoStyle?: React.CSSProperties;

  menuItemsList: itemProps[];

  menuItemClassename?: string;
  menuItemStyle?: React.CSSProperties;

  selectItems: LanguageOptions[];
  selectLabelItem: string;
  selectValueItem: string;
  selectIconPath: string;
  selectIconColor?: string;
  selectItemClassename?: string;
  selectItemsTextColor?: string;

  buttonClassename?: string;
  buttonStyle?: React.CSSProperties;
  buttonLable: React.ReactNode;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  desktopLogoSrcImage,
  desktopLogoClassename,
  desktopLogoStyle,
  menuItemsList,
  menuItemClassename,
  menuItemStyle,
  selectItems,
  selectLabelItem,
  selectValueItem,
  selectIconPath,
  selectIconColor,
  selectItemClassename,
  selectItemsTextColor,
  buttonClassename,
  buttonStyle,
  buttonLable,
}) => {
  return (
    <div className="hidden lg:flex items-center justify-between w-full">
      <Image
        src={desktopLogoSrcImage || "/fastVolt/fastVoltLogo.png"}
        alt="Logo"
        className={desktopLogoClassename}
        style={desktopLogoStyle}
      />

      <MenuItemsList
        menuItems={menuItemsList}
        menuItemClassename={menuItemClassename}
        menuItemStyle={menuItemStyle}
      />
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-4">
          <ThemeToggle
            trackClassename="w-12 h-7 bg-gray-300 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            lightIconColor="#FFD700"
            darkIconColor="#A9A9A9"
            iconSize={24}
          />
          <SelectItems
            selectItems={selectItems}
            labelItem={selectLabelItem}
            valueItem={selectValueItem}
            iconPath={selectIconPath}
            iconSize={16}
            iconColor={selectIconColor}
            selectItemClassename={selectItemClassename}
            selectItemsTextColor={selectItemsTextColor || "black"}
          />

          <Button className={buttonClassename} style={buttonStyle || {}}>
            {buttonLable}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
