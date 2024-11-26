"use client";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion";
import Link from "next/link";

const NavBar = ({ logo, Links }: navBarPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      key={"Top"}
      className="xl:padding-x px-2 py-4 flex flex-row items-center justify-center"
    >
      <nav className="max-container relative z-[1000]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src={logo}
                alt="Logo"
                className="w-[160px] lg:min-w-[180px] object-cover p-2"
              />
            </Link>
          </div>
          {/* Desktop Links & Others*/}
          <div className="w-full gap-4 hidden lg:flex justify-evenly whitespace-nowrap">
            <ul className="flex flex-row justify-center items-center gap-4 xl:gap-10 text-lg xl:text-[22px]">
              {Links &&
                Links.map((link: NavBarLink, key) => (
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    key={key}
                  >
                    <Link href="/">
                      <p className="leading-normal font-bold text-sky">
                        {link.label}
                      </p>
                    </Link>
                  </motion.div>
                ))}
            </ul>
          </div>

          <div className="text-sky flex gap-4 max-lg:hidden p-6">
            <LanguageSwitcher />
            <motion.button
              whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
              className="border-[3px] border-sky px-6 py-3 rounded-full font-bold whitespace-nowrap text-nowrap"
            >
              Nous Contacter
            </motion.button>
          </div>

          <div className="lg:hidden p-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <CiMenuBurger className="size-10" />
            </button>
          </div>
        </div>

        {/* Links (mobile) */}

        <ul
          className={`absolute w-full bg-white right-0 shadow-xl p-4  transition-max-height overflow-hidden duration-500 
            lg:hidden flex flex-col gap-4 justify-center items-center font-DMsans font-bold text-lg text-center
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} `}
          style={{ transitionProperty: "max-height, opacity" }}
        >
          {Links &&
            Links.map((Link: NavBarLink, key) => (
              <li key={key}>
                <a
                  href={"/"}
                  className="leading-normal font-bold text-sky text-[20px]"
                >
                  {Link.label}
                </a>
              </li>
            ))}
          <li>
            <div className="text-sky flex gap-2 p-2">
              <LanguageSwitcher />
              <button className="border-[3px] border-sky px-6 py-3 rounded-full font-bold whitespace-nowrap text-nowrap">
                Nous Contacter
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

export type navBarPropsType = {
  logo: string;
  Links: NavBarLink[];
};

export type NavBarLink = {
  label: string;
};
