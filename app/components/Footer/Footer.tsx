"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { ImLinkedin } from "react-icons/im";
import DropdownButton from "../DropButton";
import Link from "next/link";
import IconComponent from "../IconComponent/IconComponent";

interface FooterItem {
  label: string;
  href: string;
}

export interface FooterProps {
  footerItemsTextColor: string;
  footerBackgroundColor: string;
  footerItems: FooterItem[];
  socialMediaItems?: React.ReactNode[];
  SupComponent?: FC<{ backgroundColor: string; textColor: string }>;
  classeName?: string;
  footerLogoSource: string;
}

const Footer = ({
  footerBackgroundColor,
  footerItemsTextColor,
  footerItems,
  socialMediaItems, 
  SupComponent,
  classeName = "w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]",
  footerLogoSource
}: FooterProps) => {
  return (
    <section
      style={{
        color: footerItemsTextColor,
        backgroundColor: footerBackgroundColor,
      }}
      className={`font-poppins w-full xl:h-auto p-5 md:px-10 lg:px-20 flex items-center mt-10 transition-all duration-300`}
    >
      <div className="w-full flex flex-col py-8 gap-y-5 md:flex-row justify-between items-center max-w-[1940px] mx-auto relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <img
            // src={"logo/akwaLogo.png"}
            src={footerLogoSource}
            alt="Akwa Group Logo"
            className="w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]"
          />
        </motion.div>
        <ul className="flex flex-wrap w-[60%] xl:w-auto xl:flex-nowrap xl:flex-row text-center justify-center gap-6 lg:gap-10 font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px]">
          {footerItems.map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.li>
          ))}
          <li>
            {/* <DropdownButton backgroundColor={footerBackgroundColor} textColor={footerItemsTextColor} /> */}
            {SupComponent && <SupComponent backgroundColor={footerBackgroundColor} textColor={footerItemsTextColor} />}

          </li>
        </ul>
        <div className="flex gap-4 lg:gap-6 xl:gap-10 py-4 xl:py-0">
          {socialMediaItems && <IconComponent socialMediaItems={socialMediaItems} />}
        </div>
      </div>
    </section>
  );
};

export default Footer;
