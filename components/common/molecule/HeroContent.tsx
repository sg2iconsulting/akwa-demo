import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

interface HeroContentProps {
  title: string;
  subtitle: string;
  titleContainerClassName?: string;
  titleClassName?: string;
  subtitleContainerClassName?: string;
  subtitleClassName?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({
  title,
  subtitle,
  titleContainerClassName = "w-[90%] md:w-[70%]",
  titleClassName = "text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[85px] 3xl:text-[100px] font-bold leading-tight xl:mt-8 2xl:mt-12 3xl:mt-16",
  subtitleContainerClassName = "text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold",
  subtitleClassName = "w-[80%] md:w-[75%]",
}) => {
  return (
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
      <div className={titleContainerClassName}>
        <Heading tag="h1" className={titleClassName}>
          {title}
        </Heading>
      </div>
      <div className={subtitleContainerClassName}>
        <Paragraph className={subtitleClassName}>{subtitle}</Paragraph>
      </div>
    </div>
  );
};

export default HeroContent;
