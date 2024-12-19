"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { GrMenu } from "react-icons/gr";
import { IoCloseCircle } from "react-icons/io5";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/styles/swiperBullets.css";
import useInView from "../../hook/useView";
import LanguageSwitcher from "../LanguageSwitcher";
import SelectOptions from "./SelectOptions";

const Navbar = ({ link = "" }: { link?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref, isInView } = useInView();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenModal = (src: string) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

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
            src="/speedy/logoSpeedy.png"
            alt="Speedy Logo"
            className="w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]"
          />
        </motion.div>

        {/* Menu Button for Mobile */}
        <div className="1xl:hidden flex gap-3">
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
        <div className="hidden 1xl:flex gap-5">
          <ul className="flex xl:gap-12 2xl:gap-16 text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold text-white">
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
              Pneu
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Entretien
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Promos
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Blog
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

        <div className="1xl:flex gap-4 hidden">
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
              className={`lg:w-[200px] xl:w-[220px] w-[18px] h-[40px] md:h-[50px]  2xl:h-[67px] text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] border border-white text-white font-medium`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link || "#"}>Contacter nous</Link>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`1xl:hidden w-full bg-[#2B3773] shadow-md overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col font-bold items-center gap-4 p-6 text-[10px] md:text-[12px] mt-11 text-white">
          <li className="">
            <motion.button
              className={`lg:w-[220px] xl:w-[250px] w-[140px] h-[40px] md:h-[50px] border border-white font-medium `}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link || "#"}>Contacter nous</Link>
            </motion.button>
          </li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Qui sommes-nous
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Pneu
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Entretien
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Promos
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Blog
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            FAQ
          </motion.li>
        </ul>
      </div>

      {/* Swiper Section */}
      <div className="w-full h-full relative">
        <img
          src="/speedy/navback.jpeg"
          className="w-full h-[400px] md:h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center sm:justify-normal xl:justify-center text-center text-white bg-black bg-opacity-40 ">
          <div className="flex w-full h-full flex-col justify-center items-center mb-40 xl:mb-10 gap-5 lg:gap-10 xl:gap-16">
            <h1 className="text-[18px] sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-40 xl:mt-0 px-4 xl:px-60 w-full ">
              Chez SPEEDY, Profitez d’un bilan technique gratuit !
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 xl:gap-10 ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 items-center justify-center px-6 py-2 xl:py-3 bg-[#3B7AB7] font-bold cursor-pointer text-white"
              >
                <img src="/speedy/icons/Icon-1.png" className="w-4 l md:w-7g:w-10" />
                <p className="text-[8px] md:text-[11px] lg:text-[14px]">ACHETEZ VOS PNEUS</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 items-center justify-center px-6 py-2 xl:py-3 bg-[#043882] font-bold cursor-pointer text-white"
              >
                <img src="/speedy/icons/Icon-7.png" className="w-4 l md:w-7g:w-10" />
                <p className="text-[8px] md:text-[11px] lg:text-[14px]">DEMANDE DE DEVIS</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 items-center justify-center px-6 py-2 xl:py-3 bg-[#01A8FF] font-bold cursor-pointer text-white"
              >
                <img src="/speedy/icons/Location.png" className="w-4 md:w-7 lg:w-10" />
                <p className="text-[8px] md:text-[11px] lg:text-[14px]">TROUVEZ UN CENTRE</p>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="hidden xl:block xl:absolute xl:bottom-0 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:translate-y-1/2 w-full xl:w-[80%] xl:h-[500px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className="w-full h-full flex flex-col items-center">
            <div className="w-[480px] h-[35%] ">
              <img src="/speedy/demi-pneu.png" />
            </div>
            <div className="w-full h-[65%] dark:bg-[#1E1E1E] bg-white flex flex-col items-center justify-center">
              <div className="w-full flex flex-col gap-10">
                <h2 className="w-full text-lg font-bold xl:px-8 1xl:px-12 2xl:px-24">
                  Trouvez vos pneus
                </h2>
                <div className="w-full">
                  <SelectOptions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
