"use client";
import React, { useState, useEffect } from "react";

import { cn } from "@/utils/cn";
import Image from "../atoms/Image";
import MobileMenuButton from "../molecule/MobileMenuButton";
import DesktopNavbar, { DesktopNavbarProps } from "../organisme/DesktopNavbar";
import useInView from "@/hook/useView";
import MobileNavbar from "../organisme/MobileNavbar";

export interface NavbarProps {
  mobileLogoSrcImage: string;
  mobileLogoClassname?: string;
  mobileLogoStyle?: React.CSSProperties;

  mobileButtonClassename?: string;
  mobileButtonStyle?: React.CSSProperties;
  mobileButtonLable: React.ReactNode;

  mobileMenuItemClassename?: string;
  mobileMenuItemStyle?: React.CSSProperties;

  desktopNavbarProps: DesktopNavbarProps;
}

const Navbar: React.FC<NavbarProps> = ({
  mobileLogoSrcImage,
  mobileLogoClassname,
  mobileLogoStyle,
  mobileButtonClassename,
  mobileButtonStyle,
  mobileButtonLable,
  mobileMenuItemClassename,
  mobileMenuItemStyle,
  desktopNavbarProps,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { ref, isInView } = useInView();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <nav
        ref={ref}
        className={`absolute top-0 left-0 right-0 bg-white lg:bg-transparent z-50 transition-transform duration-300 px-5 md:px-10 lg:px-20 ${
          scrollDirection === "down" && !isInView && !isOpen
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        <div className="h-[90px] flex items-center justify-between">
          <div className="flex items-center justify-between w-full lg:hidden">
            <Image
              src={mobileLogoSrcImage}
              alt="fastVolt Logo"
              className={cn(
                "w-[100px] md:w-[130px] lg:w-[160px] 2xl:w-[200px]",
                mobileLogoClassname
              )}
              style={mobileLogoStyle}
            />
            <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
          <DesktopNavbar
            desktopLogoSrcImage={desktopNavbarProps?.desktopLogoSrcImage}
            desktopLogoClassename={cn(
              "w-[100px] md:w-[130px] lg:w-[160px] 2xl:w-[200px]",
              desktopNavbarProps?.desktopLogoClassename
            )}
            menuItemsList={desktopNavbarProps?.menuItemsList}
            menuItemClassename={cn(
              "flex items-center cursor-pointer",
              desktopNavbarProps?.menuItemClassename
            )}
            selectItems={desktopNavbarProps?.selectItems}
            selectLabelItem={desktopNavbarProps?.selectLabelItem}
            selectValueItem={desktopNavbarProps?.selectValueItem}
            selectIconPath={desktopNavbarProps?.selectIconPath}
            selectIconColor={desktopNavbarProps?.selectIconColor}
            selectItemsTextColor={desktopNavbarProps?.selectItemsTextColor}
            selectItemClassename={desktopNavbarProps?.selectItemClassename}
            buttonClassename={cn(
              "w-[160px] py-2 bg-[#D1FF33] text-black font-bold rounded-full",
              desktopNavbarProps?.buttonClassename
            )}
            buttonLable={desktopNavbarProps?.buttonLable}
          />
        </div>

        <MobileNavbar
          menuItemsList={desktopNavbarProps?.menuItemsList}
          mobileMenuItemClassename={cn(
            "text-[10px] md:text-[12px] font-medium text-black transition-colors",
            mobileMenuItemClassename
          )}
          mobileMenuItemStyle={mobileMenuItemStyle}
          mobileButtonClassename={cn(
            "w-[160px] text-[10px] md:text-[12px] py-2 bg-[#D1FF33] text-black font-bold rounded-full",
            mobileButtonClassename
          )}
          mobileButtonStyle={mobileButtonStyle}
          mobileButtonLable={mobileButtonLable}
          isOpen={isOpen}
          closeMenu={closeMenu}
        />
      </nav>
    </>
  );
};

export default Navbar;
