// "use client";
// import React from "react";
// // import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
// import FeatureList from "../../molecules/FeatureList/FeatureList";
// import { IoCheckmarkCircle } from "react-icons/io5";
// import Heading from "../../atoms/Heading/Heading";

// interface SolutionsProps {
//   paragraphs: string[];
//   firstTitle: string;
//   firstTitleTextColor?: string;
//   secondTitle: string;
//   secondTitleTextColor?: string;
//   paragraphTextColor?: string;
//   iconTextColor?: string;
//   withAnimation?: boolean;
// }

// const Solutions: React.FC<SolutionsProps> = ({
//   paragraphs,
//   firstTitle,
//   firstTitleTextColor = "black",
//   secondTitle,
//   secondTitleTextColor = "#A2C24C",
//   paragraphTextColor = "black",
//   iconTextColor = "#8BBA25",
//   withAnimation = true,
// }) => {
//   // Split the paragraphs array into two halves
//   const halfLength = Math.ceil(paragraphs.length / 2);
//   const leftParagraphs = paragraphs.slice(0, halfLength);
//   const rightParagraphs = paragraphs.slice(halfLength);

//   return (
//     <section className="font-poppins w-full ">
//       <div className="w-full px-5 md:px-10 lg:px-20 h-full flex flex-col gap-3">
//         <div className="w-full lg:w-[50%]">
//           <Heading
//             tag="h2"
//             className={` leading-none text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white`}
//           >
//             {firstTitle}
//           </Heading>
//         </div>
//         <Heading
//           tag="h3"
//           className={`text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium  dark:text-white mt-2 lg:mt-0`}
//         >
//           {secondTitle}
//         </Heading>
//       </div>

//       <div className="w-full p-5 md:px-10 lg:px-20 h-full">
//         <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-10 2xl:gap-x-16 items-center">
//           <div className="w-full md:w-1/2">
//             <FeatureList
//               paragraphs={leftParagraphs}
//               icon={IoCheckmarkCircle}
//               iconColor={iconTextColor}
//               paragraphTextColor={paragraphTextColor}
//             />
//           </div>

//           <div className="w-full md:w-1/2">
//             <FeatureList
//               paragraphs={rightParagraphs}
//               icon={IoCheckmarkCircle}
//               iconColor={iconTextColor}
//               paragraphTextColor={paragraphTextColor}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;

"use client";
import React from "react";
import FeatureList from "../../molecules/FeatureList/FeatureList";
import { IoCheckmarkCircle } from "react-icons/io5";
import Heading from "../../atoms/Heading/Heading";
import { cn } from "@/app/utils/cn";
import { IconType } from "react-icons";

interface SolutionsProps {
  paragraphs: string[];
  firstTitle: string;
  firstTitleTextColor?: string;
  secondTitle: string;
  secondTitleTextColor?: string;
  paragraphTextColor?: string;
  iconTextColor?: string;
  withAnimation?: boolean;
  firstTitleClassename?: string;
  secondTitleClassename?: string;
  rightSectionIcon?: IconType;
  leftSectionIcon?: IconType;
  leftSectionIconClassename?: string;
  rightSectionIconClassename?: string;
  paragraphClassename?: string;
}

const Solutions: React.FC<SolutionsProps> = ({
  paragraphs,
  firstTitle,
  firstTitleTextColor = "black",
  secondTitle,
  secondTitleTextColor = "#A2C24C",
  paragraphTextColor = "black",
  iconTextColor = "#8BBA25",
  withAnimation = true,
  firstTitleClassename,
  secondTitleClassename,
  rightSectionIcon = IoCheckmarkCircle,
  leftSectionIcon = IoCheckmarkCircle,
  paragraphClassename,
  leftSectionIconClassename,
  rightSectionIconClassename,
}) => {
  // Split the paragraphs array into two halves
  const halfLength = Math.ceil(paragraphs.length / 2);
  const leftParagraphs = paragraphs.slice(0, halfLength);
  const rightParagraphs = paragraphs.slice(halfLength);

  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto py-8 md:py-12 lg:py-16">
      {/* Title Section */}
      <div className="w-full px-5 md:px-10 lg:px-20 mb-8 md:mb-12 lg:mb-16">
        <div className="max-w-4xl">
          <Heading
            tag="h2"
            className={cn(
              "leading-tight w-[60%] text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white mb-3 md:mb-4",
              firstTitleClassename
            )}
            style={{ color: firstTitleTextColor }}
          >
            {firstTitle}
          </Heading>

          <Heading
            tag="h3"
            className={cn(
              "text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium dark:text-white",
              secondTitleClassename
            )}
            style={{ color: secondTitleTextColor }}
          >
            {secondTitle}
          </Heading>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full px-5 md:px-10 lg:px-20">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <FeatureList
              paragraphs={leftParagraphs}
              icon={leftSectionIcon}
              iconColor={iconTextColor}
              paragraphTextColor={paragraphTextColor}
              textClassName={cn(
                "text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold",
                paragraphClassename
              )}
              containerClassName="w-full flex flex-col gap-5 md:gap-6 lg:gap-8"
              iconClassename={leftSectionIconClassename}
            />
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <FeatureList
              paragraphs={rightParagraphs}
              icon={rightSectionIcon}
              iconColor={iconTextColor}
              paragraphTextColor={paragraphTextColor}
              textClassName={cn(
                "text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold",
                paragraphClassename
              )}
              containerClassName="w-full flex flex-col gap-5 md:gap-6 lg:gap-8"
              iconClassename={rightSectionIconClassename}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
