import React from "react";
import { FaLinkedin } from "react-icons/fa";

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
          {links.map((link, key: number) => (
            <li key={key}>
              <a href="#" className="leading-normal text-[16px] text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <FaLinkedin color="white" className="size-10 " />
        </div>
      </nav>
    </section>
  );
};

export default Footer;
