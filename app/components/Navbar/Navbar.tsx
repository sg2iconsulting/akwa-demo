"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState, useEffect, FC } from "react";
import { GrMenu } from "react-icons/gr";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/styles/swiperBullets.css";
import useInView from "../../hook/useView";
import LanguageSwitcher, {
  LanguageOptions,
} from "../LanguageSwitcher/LanguageSwitcher";
import Button from "../Button/Button";

interface MenuItem {
  label: string;
  href: string;
}

interface NavbarProps {
  link?: string;
  menuItems: MenuItem[];
  SupComponent?: FC;
  navbarBackgroundColor?: string;
  menuItemsTextColor?: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  logoSrcUrl: string;
  logoSizeStyle?: React.CSSProperties;
  classeName?: string;
  languageItems: LanguageOptions[];
  itemBackgroundHoverColor?: string;
  languageItemsTextColor?: string;
  iconColor?: string;
  chevronColor?: string;
  buttonLabel: string;
  roundedButton?: string;
  borderButton?: string;
  borderButtonColor?: string;
}

const Navbar = ({
  link = "",
  menuItems,
  SupComponent,
  navbarBackgroundColor,
  menuItemsTextColor,
  buttonBackgroundColor,
  buttonTextColor,
  logoSrcUrl,
  buttonLabel,
  roundedButton,
  borderButton,
  borderButtonColor,
  languageItems = [
    { value: "en", label: "En" },
    { value: "fr", label: "Fr" },
    { value: "ar", label: "Ar" },
  ],
  itemBackgroundHoverColor,
  languageItemsTextColor,
  iconColor,
  chevronColor,
  classeName = "w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]",
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const MotionButton = motion(Button);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollDirection, setScrollDirection] = useState("up");

  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref, isInView } = useInView();

  useEffect(() => {
    setMounted(true);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && isOpen) {
        setIsOpen(false);
      }
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      style={{
        backgroundColor: navbarBackgroundColor,
      }}
      className="font-poppins w-full max-w-[2000px] mx-auto relative dark:bg-[#121212] z-40"
    >
      {/* Navbar */}
      <div
        style={{
          backgroundColor: navbarBackgroundColor,
        }}
        className="w-full h-[50px] md:h-[70px] 2xl:h-[123px] absolute top-0 left-0 z-50 bg-transparent flex p-5 md:px-10 lg:px-20 justify-between items-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <img
            src={logoSrcUrl}
            // src={logoSrcUrl}
            alt="Logo"
            className={classeName}
            // style={logoSizeStyle}
          />
        </motion.div>

        {/* Menu Button for Mobile */}
        <div className="xl:hidden flex gap-3">
          <div className="xl:flex gap-5 text-[12px] md:text-[14px]">
            <div className="flex items-center gap-1 mt-1 justify-around">
              {resolvedTheme === "dark" ? (
                <HiSun className="text-white text-[20px] mb-1 dark:text-white" />
              ) : (
                <FaMoon className="text-white text-[10px] md:text-[15px] mb-1" />
              )}
              <form>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={resolvedTheme === "light"}
                    onChange={handleToggle}
                    name=""
                  />
                  <div
                    className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 
                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                  after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border 
                  after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600
                  focus:outline-none focus:ring-0
                  sm:w-11 sm:h-6 sm:after:h-5 sm:after:w-5"
                  ></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>
              </form>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-[20px] md:text-[24px]"
          >
            <GrMenu />
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex gap-5">
          <ul
            style={{
              color: menuItemsTextColor,
            }}
            className="flex xl:gap-12 2xl:gap-16 text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold"
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={item.href}>{item.label}</Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="xl:flex 2xl:gap-4 hidden">
          <div className="flex items-center">
            <LanguageSwitcher
              languageItems={languageItems}
              itemBackgroundHoverColor={itemBackgroundHoverColor || ""}
              languageItemsTextColor={languageItemsTextColor || "white"}
              iconColor={iconColor || "white"}
              chevronColor={chevronColor || "white"}
            />
          </div>
          <div className="flex items-center gap-2 mt-1 justify-around w-[90px] mr-3">
            {resolvedTheme === "dark" ? (
              <HiSun className="text-white text-[13px] md:text-[28px] mb-1 dark:text-white" />
            ) : (
              <FaMoon className="text-white text-[10px] md:text-[15px] mb-1" />
            )}
            <form>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={resolvedTheme === "light"}
                  onChange={handleToggle}
                  name=""
                />
                <div
                  className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 
                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                  after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border 
                  after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600
                  focus:outline-none focus:ring-0
                  sm:w-11 sm:h-6 sm:after:h-5 sm:after:w-5"
                ></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label>
            </form>
          </div>
          {/* Desktop Buttons */}
          <div className="hidden xl:block">
            <MotionButton
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              backgroundColor={buttonBackgroundColor}
              textColor={buttonTextColor}
              roundedButton={roundedButton}
              label={buttonLabel}
              border={borderButton}
              borderColor={borderButtonColor}
            />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`xl:hidden w-full bg-[#052337] shadow-md overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <ul
          style={{
            color: menuItemsTextColor,
          }}
          className="flex flex-col font-bold items-center gap-4 p-6 text-[10px] md:text-[12px] mt-6 md:mt-11 "
        >
          <li className="">
            <MotionButton
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              backgroundColor={buttonBackgroundColor}
              textColor={buttonTextColor}
              roundedButton={roundedButton}
              label={buttonLabel}
              border={borderButton}
              borderColor={borderButtonColor}
            />
          </li>
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Swiper Section */}
      <div className="w-full h-full relative">
        {SupComponent && <SupComponent />}
      </div>
    </div>
  );
};

export default Navbar;
