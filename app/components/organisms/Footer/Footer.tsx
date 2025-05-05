// "use client";
// import React from "react";
// import SocialMediaIcons from "../../molecules/SocialMediaIcons/SocialMediaIcons";
// import Image from "../../atoms/Image/Image";
// import { IconType } from "react-icons";
// import FooterItemsList from "../../atoms/FooterItemsList/FooterItemsList";
// import { itemProps } from "../../molecules/MenuItemsList/MenuItemsList";
// import { cn } from "@/app/utils/cn";

// export interface FooterProps {
//   footerItemsTextColor?: string;
//   footerBackgroundColor?: string;
//   footerItems: itemProps[];
//   socialMediaItems?: {
//     icon: IconType;
//     iconSize?: number;
//     iconColor?: string;
//   }[];
//   imageClassename?: string;
//   footerLogoSource: string;
//   footerItemClassename?: string;
//   footerItemLinkClassename?: string;
//   footerContainerClassename?: string;
// }

// const Footer: React.FC<FooterProps> = ({
//   footerBackgroundColor,
//   footerItemsTextColor,
//   footerItems,
//   socialMediaItems,
//   imageClassename,
//   footerLogoSource,
//   footerItemClassename,
//   footerItemLinkClassename,
//   footerContainerClassename,
// }) => {
//   return (
//     <section
//       // style={{ color: footerItemsTextColor, backgroundColor: footerBackgroundColor }}
//       className={cn(
//         "font-poppins bg-[green] w-full xl:h-auto p-5 md:px-10 lg:px-20 flex items-center mt-10 transition-all duration-300",
//         footerContainerClassename
//       )}
//     >
//       <div className="w-full flex flex-col px-5 lg:px-0 py-8 gap-y-5 md:flex-row justify-between md:justify-center lg:flex-nowrap md:flex-wrap items-center max-w-[1940px] mx-auto relative">
//         <Image
//           src={footerLogoSource}
//           alt="Footer Logo"
//           imageClassename={cn("w-[100px] 2xl:w-[150px]", imageClassename)}
//         />
//         <FooterItemsList
//           menuItems={footerItems}
//           menuItemLinkClassename={cn(
//             "text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px] whitespace-nowrap py-1",
//             footerItemLinkClassename
//           )}
//           menuItemClassename={cn(
//             "cursor-pointer px-2 py-1 text-center transition-all duration-200 hover:opacity-80 text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px]",
//             footerItemClassename
//           )}
//         />
//         {socialMediaItems && <SocialMediaIcons items={socialMediaItems} />}
//       </div>
//     </section>
//   );
// };

// export default Footer;

// app/components/organisms/Footer/Footer.tsx
import React from "react";
import { cn } from "../../../../utils/cn";
import Image from "../../atoms/Image/Image";
import SocialMediaIcons from "../../molecules/SocialMediaIcons/SocialMediaIcons";
import FooterItemsList, {
  FooterItem,
} from "../../molecules/FooterItemsList/FooterItemsList";
import { IconType } from "react-icons"; // Import IconType from react-icons

// Update to use the same type as SocialMediaIcons component
interface SocialMediaItem {
  icon: IconType; // Use IconType instead of React.ComponentType
  iconSize?: number;
  iconColor?: string;
  iconStyle?: React.CSSProperties;
  link?: string;
  iconClassename?: string;
}

interface FooterProps {
  footerItems: FooterItem[];
  socialMediaItems?: SocialMediaItem[];
  footerLogoSource: string;
  imageClassename?: string;
  footerContainerClassename?: string;
  footerItemClassename?: string;
  footerItemLinkClassename?: string;
  footerBackgroundColor?: string;
  footerItemsTextColor?: string;
}

const Footer: React.FC<FooterProps> = ({
  footerItems,
  socialMediaItems,
  footerLogoSource,
  imageClassename = "",
  footerContainerClassename = "",
  footerItemClassename = "",
  footerItemLinkClassename = "",
  footerBackgroundColor = "#121212",
  footerItemsTextColor = "white",
}) => {
  return (
    <footer
      style={{
        color: footerItemsTextColor,
        backgroundColor: footerBackgroundColor,
      }}
      className={cn(
        "font-poppins w-full xl:h-auto p-5 md:px-10 lg:px-20 flex items-center mt-10 transition-all duration-300",
        footerContainerClassename
      )}
    >
      <div className="w-full flex flex-col px-5 lg:px-0 py-8 gap-y-5 md:flex-row justify-between md:justify-center lg:justify-between lg:flex-nowrap md:flex-wrap items-center max-w-[1940px] mx-auto relative">
        <Image
          src={footerLogoSource}
          alt="Footer Logo"
          imageClassename={cn("w-[100px] 2xl:w-[150px]", imageClassename)}
        />

        <FooterItemsList
          menuItems={footerItems}
          menuItemLinkClassename={cn(
            "text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px] whitespace-nowrap py-1",
            footerItemLinkClassename
          )}
          menuItemClassename={cn(
            "cursor-pointer px-2 py-1 text-center transition-all duration-200 text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px]",
            footerItemClassename
          )}
          backgroundColor={footerBackgroundColor}
        />

        {socialMediaItems && <SocialMediaIcons items={socialMediaItems} />}
      </div>
    </footer>
  );
};

export default Footer;
