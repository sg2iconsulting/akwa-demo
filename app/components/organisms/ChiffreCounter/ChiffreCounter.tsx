// "use client";
// import React from "react";
// import Heading from "../../atoms/Heading/Heading";
// import KeyFigure from "../../molecules/KeyFigure/KeyFigure";

// const ChiffreCounter = () => {
//   return (
//     <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
//       <div className="w-full h-full flex flex-col gap-8 md:gap-14 xl:gap-20 py-10 md:py-16 xl:py-20 2xl:py-28 px-5 md:px-10 lg:px-20 text-white bg-[#052337]">
//         <Heading
//           tag="h2"
//           className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black"
//         >
//           Chiffres Clés
//         </Heading>

//         <div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-5 xl:gap-14 text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[28px] xl:mb-8">
//           <KeyFigure
//             value={20000}
//             sign="+"
//             duration={3}
//             paragraphs={["Emplois directs et", "indirects"]}
//             className="h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48"
//           />
//           <KeyFigure
//             value={2}
//             sign=""
//             duration={3}
//             paragraphs={["Sociétés cotées en", "bourse"]}
//             className="h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48"
//           />
//           <KeyFigure
//             value={70}
//             sign=""
//             duration={5}
//             paragraphs={["Sociétés"]}
//             className="h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48"
//           />
//           <KeyFigure
//             value={40}
//             sign="+"
//             duration={5}
//             paragraphs={["Marques phares"]}
//             className="h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChiffreCounter;

"use client";
import React from "react";
import Heading from "../../atoms/Heading/Heading";
import KeyFigure from "../../molecules/KeyFigure/KeyFigure";
import { cn } from "@/app/utils/cn";

export interface KeyFigureProps {
  value: number;
  sign?: string;
  duration: number;
  paragraphs: string[];
  className?: string;
  style?: React.CSSProperties;
  deviderClassename?: string;
  paragraphClassename?: string;
  valueClassename?: string;
  signClassename?: string;
}

export interface ChiffreCounterProps {
  title: string;
  titleClassName?: string;
  titleStyle?: React.CSSProperties;
  keyFigures: KeyFigureProps[];
  containerKeyFigureClassename?: string;
  containerKeyfigureStyle?: React.CSSProperties;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
}

const ChiffreCounter = ({
  title,
  titleClassName,
  titleStyle,
  keyFigures,
  containerKeyFigureClassename = "flex flex-wrap justify-center md:justify-between items-center w-full gap-5 xl:gap-14 text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[28px] xl:mb-8",
  containerKeyfigureStyle,
  containerClassName = "w-full h-full flex flex-col gap-8 md:gap-14 xl:gap-20 py-10 md:py-16 xl:py-20 2xl:py-28 px-5 md:px-10 lg:px-20 text-white bg-[#052337] ",
  containerStyle,
}: ChiffreCounterProps) => {
  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div
        className={containerClassName}
        style={containerStyle}
      >
        <Heading
          tag="h2"
          className={cn("text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black", titleClassName)}
          style={titleStyle}
        >
          {title}
        </Heading>

        <div className={containerKeyFigureClassename} style={containerKeyfigureStyle || {}}>
          {keyFigures.map((figure, index) => (
            <KeyFigure
              key={index}
              value={figure.value}
              sign={figure.sign}
              duration={figure.duration}
              paragraphs={figure.paragraphs}
              className={cn("font-bold lg:text-[28px] 2xl:text-[48px]", figure.className)}
              signClassename={cn("", figure.signClassename)}
              deviderClassename={cn("w-10 bg-white", figure.deviderClassename)}
              valueClassename={cn("font-bold lg:text-[28px] 2xl:text-[48px]", figure.valueClassename)}
              paragraphClassename={cn("text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]", figure.paragraphClassename)}
              style={figure.style}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiffreCounter;