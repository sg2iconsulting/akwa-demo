'use client'
import React, { useState, useEffect } from "react";
import Image from "../../atoms/Image/Image";

export interface FadeShowProp {
  imgLinks: string[];
  duration: number;
}

const ImageFadeShow = ({ imgLinks, duration }: FadeShowProp) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [fade, setFade] = useState(true);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % imgLinks.length);
          setFade(true);
        }, 1000);
      }, duration);
  
      return () => clearInterval(intervalId);
    }, [imgLinks]);

  return (
    <div>
      <Image
        imageSource={imgLinks[activeIndex]}
        imageAlt={`Image ${activeIndex}`}
        imageClassename={`transition-opacity duration-500 ease-in-out opacity-100$`}
      />
    </div>
  );
};

export default ImageFadeShow;

