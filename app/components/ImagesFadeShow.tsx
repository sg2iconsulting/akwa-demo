"use client";
import React, { useState, useEffect } from "react";

export interface FadeShowProps {
  imgLinks: string[];
  duration: number;
  isActive: boolean;
  onCycleComplete: () => void;
}

const ImagesFadeShow = ({
  imgLinks,
  duration,
  isActive,
  onCycleComplete,
}: FadeShowProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const nextIndex = (activeIndex + 1) % imgLinks.length;
        setActiveIndex(nextIndex);
        setFade(true);

        if (nextIndex === 0) onCycleComplete();
      }, 1000);
    }, duration);

    return () => clearInterval(intervalId);
  }, [isActive, activeIndex, imgLinks, duration, onCycleComplete]);

  return (
    <div>
      <img
        src={imgLinks[activeIndex]}
        alt={`Image ${activeIndex}`}
        className={`transition-opacity duration-500 ease-in-out opacity-100${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ImagesFadeShow;
