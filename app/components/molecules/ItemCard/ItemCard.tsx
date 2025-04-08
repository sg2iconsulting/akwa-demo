import React from "react";
import { motion } from "framer-motion";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Image from "../../atoms/Image/Image";

export interface ItemCardsProp {
  imgSrc: string;
  title: string;
  date: string;
  url?: string;
  imageClassename?: string;
  titleClassename?: string;
  dateClassename?: string;
  containerBackgroundColor: string;
  containerBorderStyle: string;
  textColor: string;
}

const ItemCard = ({
  imgSrc,
  title,
  date,
  imageClassename,
  titleClassename,
  dateClassename,
  containerBackgroundColor,
  containerBorderStyle,
  textColor,
}: ItemCardsProp) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-full h-[90px] md:h-[126px] cursor-pointer rounded-[12px]  border dark:bg-[#1E1E1E] dark:border-[#1E1E1E] border-[#F1F1F1] shadow-slider-shadow"
      style={{
        backgroundColor: containerBackgroundColor || undefined,
        border: containerBorderStyle || undefined,
        color: textColor || undefined,
      }}
    >
      <div className="p-4 flex items-center justify-evenly w-full h-full gap-2">
        <div className="flex flex-col gap-2 w-[80%] h-auto">
          <Paragraph className={dateClassename}>
            {date}
          </Paragraph>
          <Heading
            tag="h3"
            className={titleClassename}
          >
            {title}
          </Heading>
        </div>
        <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] aspect-square">
          <Image
            src={imgSrc}
            alt={title}
            imageClassename={imageClassename}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ItemCard;

// import React from "react";
// import { motion } from "framer-motion";
// import Heading from "../../atoms/Heading/Heading";
// import Paragraph from "../../atoms/Paragraph/Paragraph";
// import Image from "../../atoms/Image/Image";

// export interface ItemCardsProps {
//   imgSrc: string;
//   title: string;
//   date: string;
//   containerClassName?: string;
//   containerStyle?: React.CSSProperties;
//   contentClassName?: string;
//   contentStyle?: React.CSSProperties;
//   imageContainerClassName?: string;
//   imageContainerStyle?: React.CSSProperties;
//   imageClassName?: string;
//   imageStyle?: React.CSSProperties;
// }

// const ItemCard = ({
//   imgSrc,
//   title,
//   date,
//   containerClassName,
//   contentClassName,
//   imageContainerClassName,
//   imageClassName,
//   containerStyle,
//   contentStyle,
//   imageContainerStyle,
//   imageStyle
// }: ItemCardsProps) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//       className={`cursor-pointer rounded-[12px] shadow-slider-shadow ${containerClassName}`}
//       style={containerStyle}
//     >
//       <div className="flex items-center justify-between w-full h-full p-4">
//         <div className={`flex flex-col gap-2 ${contentClassName}`} style={contentStyle}>
//           <Paragraph>{date}</Paragraph>
//           <Heading tag="h3">{title}</Heading>
//         </div>
//         <Image
//           src={imgSrc}
//           alt={title}
//           containerClassname={`aspect-square ${imageContainerClassName}`}
//           imageClassename={`object-cover rounded-[8px] ${imageClassName}`}
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default ItemCard;
