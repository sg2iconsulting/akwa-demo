"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GrMenu } from "react-icons/gr";
import { GiEarthAmerica } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = ({ btnColor, space, link }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();

  // useEffect(() => {
  //   setMounted(true);
  //   setIsDarkMode(resolvedTheme === "dark");
  // }, [resolvedTheme]);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (e: any) => {
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

  // const handleToggle = (e :any) => {
  //   setIsDarkMode(!isDarkMode);
  //   if (e.target.checked)
  //     setTheme('light');
  //   else
  //     setTheme('dark');
  //   console.log('togle : ', e.target.checked)
  // };

  if (!mounted) return null;

  return (
    <div className="font-poppins w-full bg-white dark:bg-[#1E1E1E]">
      <div className="w-full h-[80px] md:h-[96px] xl:h-[175px] flex px-5 md:px-10  max-w-[2000px] mx-auto justify-between items-center">
        <div>
          <img
            src="/logo/navbarLogo.png"
            alt="Afriquia Gaz Logo"
            className="w-[80px] md:w-[120px] lg:w-[150px] "
          />
        </div>

        <div className="xl:hidden flex">
          <div className="xl:flex gap-3 md:gap-5 text-[12px] md:text-[14px]">
            {/* <div className="flex items-center lg:gap-3">
              <GiEarthAmerica className="lg:text-xl" />
              <select
                value={"FR"}
                className="p-2 border rounded focus:outline-none focus:ring-0 border-none"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </div> */}
            {/* <div className="flex items-center gap-3">
              {!isDarkMode ? (
                <FaMoon className="text-slate-600 text-[10px]" />
              ) : (
                <GoSun className="text-slate-600 text-[13px]" />
              )}
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isDarkMode}
                  value={"isDarkMode"}
                  onChange={() => {}}
                />
                <div
                  className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-300 
                   peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                   peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
                   after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border 
                   after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
                   focus:outline-none focus:ring-0"
                ></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label>
            </div> */}
            <div className="flex items-center gap-3">
              {resolvedTheme === "dark" ? (
                <GoSun className="text-slate-600 text-[13px] lg:text-[18px] dark:text-white" />
              ) : (
                <FaMoon className="text-slate-600 text-[10px] lg:text-[15px]" />
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
                  // className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-300 
                  //  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                  //  peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
                  //  after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border 
                  //  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
                  //  focus:outline-none focus:ring-0"
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-[#387CCC] text-[20px] md:text-[24px]`}
          >
            <GrMenu />
          </button>
        </div>

        <div className="hidden xl:block">
          <motion.button
            className={`lg:w-[220px] xl:w-[250px] w-[200px] h-[40px] md:h-[50px] rounded-full text-white font-bold ${btnColor}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={link}>{space}</Link>
          </motion.button>
        </div>

        <div className="hidden xl:flex gap-5 md:gap-10">
          <ul className="flex gap-4 md:gap-8 text-[12px] md:text-[13px] lg:text-[13px] xl:text-[16px] font-bold">
            <motion.li
              className=" cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Nous Connaitre
            </motion.li>
            <motion.li
              className=" cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Nos Solutions
            </motion.li>
            <motion.li
              className=" cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Nos Produits
            </motion.li>
            <motion.li
              className=" cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Efficacité Énergétique
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

        <div className="hidden xl:flex text-[12px] md:text-[14px]">
          {/* <div className="flex items-center lg:gap-3">
            <GiEarthAmerica className="lg:text-xl" />
            <select
              value={"FR"}
              className="p-2 border rounded focus:outline-none focus:ring-0 border-none"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
          </div> */}
          <div className="flex items-center gap-3">
            {resolvedTheme === "dark" ? (
              <GoSun className="text-slate-600 text-[13px] lg:text-[18px] dark:text-white" />
            ) : (
              <FaMoon className="text-slate-600 text-[10px] lg:text-[15px]" />
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

        {/* <div className="hidden xl:flex gap-3 md:gap-5 text-[12px] md:text-[14px]">
          <div className="flex items-center gap-3">
            <GiEarthAmerica className="text-xl"/>
            <select value={"FR"} className="p-2 border rounded">
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            {!isDarkMode ? <FaMoon className="text-slate-600"/> : <GoSun className="text-slate-600"/>}
            <label className="inline-flex items-center cursor-pointer border-0 outline-none">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDarkMode}
                value={"isDarkMode"}
                onChange={handleToggle}
              />
              <div className="relative w-11 h-6  rounded-full peer peer-focus:ring-4  dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              </span>
            </label>
          </div>
        </div> */}
      </div>

      <div
        className={`xl:hidden w-full bg-white dark:bg-[#121212] shadow-md overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col font-bold items-center gap-4 p-4 text-[10px] md:text-[13px]">
          <li className="">
            <motion.button
              className={`lg:w-[220px] xl:w-[250px] w-[200px] h-[40px] md:h-[50px] rounded-full text-white font-bold ${btnColor}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link}>{space}</Link>
            </motion.button>
          </li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Nous Connaitre
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Nos Solutions
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Nos Produits
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Efficacité Énergétique
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
    </div>
  );
};

export default Navbar;
