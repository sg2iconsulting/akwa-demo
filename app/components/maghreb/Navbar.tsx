"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GrMenu } from "react-icons/gr";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/styles/maghrebBullets.css";
import useInView from "../../hook/useView";
import LanguageSwitcher from "../LanguageSwitcher";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <div className="z-10 w-full h-[80px] md:h-[96px] 2xl:h-[123px] absolute top-0 left-0 bg-transparent flex p-5 md:px-10 lg:px-20 justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <img
            src="/maghreb/maghrebLogo.png"
            alt="maghreb Logo"
            className="w-[80px] md:w-[100px] lg:w-[130px] 2xl:w-[160px]"
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
          <ul className="flex xl:gap-8 2xl:gap-14 3xl:gap-16 text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] font-bold text-white">
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
              Application
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Réseaux
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              QHSE
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Actualités
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
              className={`lg:w-[200px] 3xl:w-[220px] w-[18px] h-[40px] md:h-[50px]  2xl:h-[67px] text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] rounded-full text-white font-bold bg-[#0085C3]`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link || "www.google.com"}>Nous contacter</Link>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`1xl:hidden w-full bg-[#0085C3] dark:bg-black shadow-md overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col font-bold items-center gap-4 p-6 text-[10px] md:text-[12px] mt-14 text-black dark:text-white ">
          <li className="">
            <motion.button
              className={`lg:w-[220px] xl:w-[250px] w-[140px] h-[40px] md:h-[50px] rounded-full text-black font-bold bg-white`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link || "#"}>Nous contacter</Link>
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
            Applications
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Réseaux
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            QHSE
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Actualités
          </motion.li>
        </ul>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px]">
        <video
          src="/maghreb/MaghrebOxygene.mp4" 
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop
          speed={2000}
          className="relative w-full h-full z-10 bg-black bg-opacity-40"
        >
          <SwiperSlide>
            <div className="w-full h-full absolute inset-0 flex items-center px-5 md:px-10 lg:px-20 2xl:px-24">
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-white">
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                  <div className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[100px] font-bold leading-tight">
                    <p className="">Industrie</p>
                  </div>
                  <div className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold">
                    <p className="w-[65%]">
                      Pour permettre aux industriels d’optimiser leurs coûts et
                      d’atteindre le niveau de qualité que les produits
                      industriels exigent, Maghreb Oxygène leur apporte des
                      solutions intégrées gaz et soudage.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] 2xl:w-[290px] 2xl:h-[67px] rounded-full bg-[#0085C3] cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold text-white mt-3 md:mt-4 lg:mt-6 xl:mt-8"
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full absolute inset-0 flex items-center px-5 md:px-10 lg:px-20 2xl:px-24">
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-white">
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                  <div className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[100px] font-bold leading-tight">
                    <p className="">Santé</p>
                  </div>
                  <div className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold">
                    <p className="w-[65%]">
                      Maghreb Oxygène produit, conditionne et distribue des gaz
                      médicaux comme l’oxygène médical gazeux ou liquide, le
                      protoxyde d’azote et l’air synthétique, conformément aux
                      spécifications de la pharmacopée Européenne.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] 2xl:w-[290px] 2xl:h-[67px] rounded-full bg-[#0085C3] cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold text-white mt-3 md:mt-4 lg:mt-6 xl:mt-8"
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Navbar;
