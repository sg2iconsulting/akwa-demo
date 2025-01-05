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
import "@/app/styles/swiperBullets.css";
import useInView from "../../hook/useView";
import LanguageSwitcher from "../LanguageSwitcher";
import { BsLightning } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const Navbar = ({ link = "" }: { link?: string }) => {
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
    <div className="font-poppins w-full max-w-[2000px] mx-auto relative dark:bg-[#121212]">
      {/* Navbar */}
      <div className="w-full h-[80px] md:h-[96px] 2xl:h-[123px] absolute top-0 left-0 z-50 bg-transparent flex p-5 md:px-10 lg:px-20 justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <img
            src="/fastVolt/fastVoltLogo.png"
            alt="fastVolt Logo"
            className="w-[100px] md:w-[130px] lg:w-[160px] 2xl:w-[200px]"
          />
        </motion.div>

        {/* Menu Button for Mobile */}
        <div className="1xl:hidden flex gap-3">
          <div className="xl:flex gap-5 text-[12px] md:text-[14px]">
            <div className="flex items-center gap-1 mt-1 justify-around">
              {resolvedTheme === "dark" ? (
                <HiSun
                  className={`text-${
                    isOpen ? "black" : "white"
                  } dark:text-white transition-colors duration-1000 ease-in-out text-[20px] mb-1 `}
                />
              ) : (
                <FaMoon
                  className={`text-${
                    isOpen ? "black" : "white"
                  } dark:text-white transition-colors duration-1000 ease-in-out text-[10px] md:text-[15px] mb-1`}
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
            className={`text-${
              isOpen ? "black" : "white"
            } dark:text-white transition-colors duration-1000 ease-in-out text-[20px] md:text-[24px]`}
          >
            <GrMenu />
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden 1xl:flex gap-5">
          <ul className="flex xl:gap-8 2xl:gap-10 text-[10px] md:text-[12px] xl:text-[16px] 3xl:text-[22px] font-bold text-white">
            <motion.li
              className="cursor-pointer text-[#D1FF33] "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Accueil
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Qui sommes-nous
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Comment ça marche?
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Carte des bornes
            </motion.li>
          </ul>
        </div>

        <div className="1xl:flex 2xl:gap-4 hidden">
          <div className="flex items-center">
            <LanguageSwitcher />
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
          <div className="hidden 1xl:block">
            <motion.button
              className={`lg:w-[200px] xl:w-[220px] w-[18px] h-[40px] md:h-[50px]  2xl:h-[67px] text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] rounded-full text-black font-bold bg-[#D1FF33]`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link || "www.google.com"}>Nous appeler</Link>
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
        <ul className="flex flex-col font-bold items-center gap-4 p-6 text-[10px] md:text-[12px] mt-11 text-black dark:text-white">
          <li className="">
            <motion.button
              className={`lg:w-[220px] xl:w-[250px] w-[140px] h-[40px] md:h-[50px] rounded-full text-black font-bold bg-[#D1FF33]`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link || "#"}>Nous appeler</Link>
            </motion.button>
          </li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Accueil
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Qui sommes-nous?
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Comment ça marche?
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Carte des bornes
          </motion.li>
        </ul>
      </div>

      {/* Swiper Section */}
      <div className="w-full h-full relative">
        <img
          src="/fastVolt/navBackFv.png"
          className="w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center sm:justify-normal xl:justify-center text-center text-white"></div>
        <div className="w-full h-full absolute inset-0 flex items-center px-5 md:px-10 lg:px-20 2xl:px-24">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-white">
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
              <div className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[100px] font-bold leading-tight">
                <p className="">À vous l’expérience</p>
                <p className="">unique de l’électrique !</p>
              </div>
              <div className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold">
                <p className="-[80%] md:w-[75%]">
                  Le temps d’une pause café, rechargez vos batteries et prenez
                  la route vers une mobilité durable, avec les bornes de
                  recharge rapide FastVolt destinées aux véhicules électriques
                  et hybrides rechargeables que vous retrouverez dans les
                  principaux axes routiers et centres urbains.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6">
              <p className="text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold">
                Télécharger l’application FastVolt
              </p>
              <div className="flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/fastVolt/googlePlay.png"
                    className="w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto cursor-pointer"
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/fastVolt/appStore.png"
                    className="w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto cursor-pointer"
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-10 lg:justify-between mt-10 w-full px-5 md:px-10 lg:px-20 gap-y-4">
        <div className="flex gap-1 lg:gap-2 2xl:gap-4 items-center">
          <FiMapPin
            color="#D1FF33"
            className="md:w-8 md:h-8 2xl:w-[40px] 2xl:h-[40px]"
          />
          <h2 className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold">
            Réseau de bornes le plus important du royaume
          </h2>
        </div>
        <div className="flex gap-1 lg:gap-2 2xl:gap-4 items-center">
          <MdAccessTimeFilled
            color="#D1FF33"
            className="md:w-8 md:h-8 2xl:w-[50px] 2xl:h-[50px]"
          />
          <h2 className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold">
            30 minutes de durée de recharge
          </h2>
        </div>
        <div className="flex gap-1 lg:gap-2 2xl:gap-4 items-center">
          <BsLightning
            color="#D1FF33"
            className="md:w-8 md:h-8  2xl:w-[50px] 2xl:h-[50px]"
          />
          <h2 className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold">
            Puissance de recharge jusqu’a 100 Kw DC{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
