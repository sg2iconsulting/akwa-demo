"use client";
import React, { FC } from "react";
import FooterNav from "../../molecules/FooterNav/FooterNav";
import SocialMediaIcons from "../../molecules/SocialMediaIcons/SocialMediaIcons";
import Image from "../../atoms/Image/Image";
import { IconType } from "react-icons";

export interface FooterProps {
  footerItemsTextColor: string;
  footerBackgroundColor: string;
  footerItems: { label: string; href: string }[];
  socialMediaItems?: { icon: IconType; iconSize?: number; iconColor?: string }[];
  SupComponent?: FC<{ backgroundColor: string; textColor: string }>;
  classeName?: string;
  footerLogoSource: string;
}

const Footer: React.FC<FooterProps> = ({
  footerBackgroundColor,
  footerItemsTextColor,
  footerItems,
  socialMediaItems,
  SupComponent,
  classeName = "w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]",
  footerLogoSource,
}) => {
  return (
    <section
      style={{ color: footerItemsTextColor, backgroundColor: footerBackgroundColor }}
      className="font-poppins w-full xl:h-auto p-5 md:px-10 lg:px-20 flex items-center mt-10 transition-all duration-300"
    >
      <div className="w-full flex flex-col py-8 gap-y-5 md:flex-row justify-between items-center max-w-[1940px] mx-auto relative">
        <Image imageSource={footerLogoSource} imageAlt="Footer Logo" imageClassename={classeName} />
        <FooterNav items={footerItems} />
        {SupComponent && <SupComponent backgroundColor={footerBackgroundColor} textColor={footerItemsTextColor} />}
        {socialMediaItems && <SocialMediaIcons items={socialMediaItems} />}
      </div>
    </section>
  );
};

export default Footer;
