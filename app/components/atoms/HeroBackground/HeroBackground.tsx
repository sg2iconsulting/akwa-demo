import React from "react";

interface HeroBackgroundProps {
  imageSrc: string;
  className?: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  imageSrc,
  className = "w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover",
}) => {
  return <img src={imageSrc} className={className} alt="Hero background" />;
};

export default HeroBackground; 