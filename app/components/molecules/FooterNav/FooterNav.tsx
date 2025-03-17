import React from "react";
import FooterItem from "../../atoms/FooterItem/FooterItem";

interface FooterNavProps {
  items: { label: string; href: string }[];
}

const FooterNav: React.FC<FooterNavProps> = ({ items }) => {
  return (
    <ul className="flex flex-wrap w-[60%] xl:w-auto xl:flex-nowrap xl:flex-row text-center justify-center gap-6 lg:gap-10 font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px]">
      {items.map((item, index) => (
        <FooterItem key={index} label={item.label} href={item.href} />
      ))}
    </ul>
  );
};

export default FooterNav;