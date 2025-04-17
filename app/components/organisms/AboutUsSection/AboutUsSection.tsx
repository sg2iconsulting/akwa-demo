import React from "react";
import Image from "../../atoms/Image/Image";
import Heading from "../../atoms/Heading/Heading";

interface AboutUsSectionProps {
  imgSrc: string;
  title: string;
  paragraphs: string[];
  imageClassName?: string;
  titleClassName?: string;
  paragraphClassName?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  imgSrc,
  title,
  paragraphs = [],
  imageClassName = "w-full h-full object-cover rounded-lg",
  titleClassName = "text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-[#0E1B25] dark:text-white",
  paragraphClassName = "text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 text-[#4C4C4C] dark:text-white",
  headingTag = "h2",
}) => {
  return (
    <div className={`flex flex-col-reverse md:flex-row gap-8 md:gap-16 xl:gap-24 items-center px-5 md:px-10 lg:px-20`}>
      <div className="w-full md:w-1/2 max-h-[300px] md:max-h-none md:h-auto">
        <div className="aspect-w-16 aspect-h-9 md:aspect-auto">
          <Image 
            src={imgSrc} 
            alt={title} 
            imageClassename={`${imageClassName} h-auto max-h-[250px] md:max-h-none md:h-full`} 
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 w-full md:w-1/2 mb-4 md:mb-0">
        <Heading tag={headingTag} className={titleClassName}>
          {title}
        </Heading>
        
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={paragraphClassName}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;