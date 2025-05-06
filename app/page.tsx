"use client";
import React, { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const links = [
    {
      id: 1,
      href: "/akwa",
      imageSrc: "/speedy/akwa.png",
      title: "Akwa",
    },
    {
      id: 2,
      href: "/speedy",
      imageSrc: "/speedy/navback.jpeg",
      title: "Speedy",
    },
    {
      id: 3,
      href: "/fastVoltV2",
      imageSrc: "/fastVolt/navBackFv.png",
      title: "FastVolt",
    },
    {
      id: 4,
      href: "/maghrebOxygen",
      imageSrc: "/maghreb/maghrebNavBack.png",
      title: "Maghreb Oxygen",
    },
    {
      id: 5,
      href: "/afriquia_gaz",
      imageSrc: "/afriquiaGaz/backgroundMenu.png",
      title: "Afriquia Gaz",
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col">
      {links.map((link, index) => (
        <Link
          key={link.id}
          href={link.href}
          className="relative w-full h-full overflow-hidden"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={link.imageSrc}
            alt={link.title}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              hoveredIndex === index ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">
              {link.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
