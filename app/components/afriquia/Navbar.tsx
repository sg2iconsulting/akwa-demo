"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GrMenu } from "react-icons/gr";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/styles/maghrebBullets.css";
import useInView from "../../hook/useView";
import LanguageSelect from "./LanguageSwitcher";

export interface NavProp {
  space: string;
  btnColor: string;
  link: string
}

const Navbar = ({ btnColor, space, link }: NavProp) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="font-poppins w-full max-w-[2000px] mx-auto dark:bg-[#121212]">
      {/* Navbar */}
      <div className="z-10 w-full h-[80px] md:h-[96px] 2xl:h-[123px] top-0 left-0 bg-transparent flex px-5 md:px-10 lg:px-20 justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <img
            src="/afriquiaGaz/logo/navbarLogo.png"
            alt="Afriquia Gaz Logo"
            className="w-[80px] md:w-[120px] lg:w-[140px] 2xl:w-[160px] 3xl:w-[170px] "
          />
        </motion.div>

        {/* Menu Button for Mobile */}
        <div className="1xl:hidden flex gap-3">
          <div className="xl:flex gap-5 text-[12px] md:text-[14px]">
            <div className="flex items-center gap-1 mt-1 justify-around">
              {resolvedTheme === "dark" ? (
                <HiSun
                  className={`text-[#111111] dark:text-white transition-colors duration-1000 ease-in-out text-[20px] mb-1 `}
                />
              ) : (
                <FaMoon
                  className={`text-[#111111] dark:text-white transition-colors duration-1000 ease-in-out text-[10px] md:text-[15px] mb-1`}
                />
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
            className={`text-[#111111] dark:text-white transition-colors duration-1000 ease-in-out text-[20px] md:text-[24px]`}
          >
            <GrMenu />
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden 1xl:flex gap-5">
          <ul className="flex xl:gap-6 2xl:gap-8 3xl:gap-14 text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[18px] font-bold text-[#111111] dark:text-white">
            <motion.li
              className="cursor-pointer "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Nous connaitre
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Nos solutions
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Nos produits
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Efficacité Énergétique 
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              FAQ
            </motion.li>
          </ul>
        </div>

        <div className="1xl:flex 2xl:gap-4 hidden">
          <div className="flex items-center">
            <LanguageSelect />
          </div>
          <div className="flex items-center gap-2 mt-1 justify-around w-[90px] mr-3">
            {resolvedTheme === "dark" ? (
              <HiSun className="text-[#111111] text-[13px] md:text-[28px] mb-1 dark:text-white" />
            ) : (
              <FaMoon className="text-[#111111] text-[10px] md:text-[15px] mb-1" />
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
          <div className="hidden 1xl:block">
            <motion.button
              className={`lg:w-[220px] 3xl:w-[250px] w-[18px] h-[40px] md:h-[50px]  2xl:h-[67px] text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] rounded-full text-white font-bold ${btnColor}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link || "#"}>{space}</Link>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`1xl:hidden w-full bg-white dark:bg-black shadow-md overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col font-bold items-center gap-4 p-6 text-[10px] md:text-[12px] text-[#111111] dark:text-white ">
          <li className="">
            <motion.button
              className={`lg:w-[220px] xl:w-[250px] w-[150px] h-[40px] md:h-[50px] rounded-full text-white font-bold ${btnColor}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link || "#"}>{space}</Link>
            </motion.button>
          </li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Nous connaitre
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Nos solutions
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Nos produis
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Efficacité Énergétique 
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            FAQ
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
