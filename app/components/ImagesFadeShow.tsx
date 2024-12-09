'use client'
import React, { useState, useEffect } from "react";

export interface ImageLinksProp {
  imgLinks: string[];
  duration: number;
}

const ImagesFadeShow = ({ imgLinks, duration }: ImageLinksProp) => {
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
      <img
        src={imgLinks[activeIndex]}
        alt={`Image ${activeIndex}`}
        className={`transition-opacity duration-500 ease-in-out opacity-100$`}
      />
    </div>
  );
};

export default ImagesFadeShow;

