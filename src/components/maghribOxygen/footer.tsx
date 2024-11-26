"use client";

import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = ({
  links,
}: {
  links: {
    label: string;
  }[];
}) => {
  return (
    <section className="py-8 px-4 lg:min-h-[150px] flex justify-center items-center  bg-[#19517D]">
      <nav className="flex justify-between items-center sm:gap-24 w-full max-container">
        <div className="">
          <img
            alt="footerLogo"
            src="/maghriboxygen/logoF.png"
            className="max-w-[200px] w-full object-cover p-2"
          />
        </div>
        <ul className="flex-1 flex justify-evenly gap-2 items-center text-sm  max-xl:hidden text-white font-bold text-nowrap">
          {links &&
            links.map((link: NavBarLink, key) => (
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                key={key}
              >
                <Link href="/">
                  <p className="leading-normal text-[16px] text">
                    {link.label}
                  </p>
                </Link>
              </motion.div>
            ))}
        </ul>
        <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}>
          <div className="flex items-center justify-center cursor-pointer">
            <FaLinkedin color="white" className="size-10 " />
          </div>
        </motion.div>
      </nav>
    </section>
  );
};

export default Footer;

type NavBarLink = {
  label: string;
};
