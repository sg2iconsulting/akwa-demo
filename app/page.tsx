// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// const Home = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const handleMouseEnter = (index: number) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   const links = [
//     {
//       id: 1,
//       href: "http://localhost:3000/akwa",
//       backgroundImage: "url('/speedy/akwa.png')",
//       title: "Akwa",
//     },
//     {
//       id: 2,
//       href: "http://localhost:3000/speedy",
//       backgroundImage: "url('/speedy/navback.jpeg')",
//       title: "Speedy",
//     },
//   ];

//   return (
//     <div className="w-screen h-screen flex">
//       {links.map((link, index) => (
//         <Link
//           key={link.id}
//           href={link.href}
//           className={`relative w-1/2 h-full transition-transform duration-500 ease-in-out ${
//             hoveredIndex === index ? "scale-110 z-10" : "blur-none"
//           } ${
//             hoveredIndex !== null && hoveredIndex !== index ? "blur-sm" : ""
//           }`}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             style={{
//               backgroundImage: link.backgroundImage,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             className="w-full h-full"
//           >
//             <div className="absolute inset-0 bg-black opacity-70"></div>

//             <div className="absolute inset-0 flex items-center justify-center">
//               <h1 className="text-white text-7xl font-bold">{link.title}</h1>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Home;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// const Home = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const handleMouseEnter = (index: number) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   const links = [
//     {
//       id: 1,
//       href: "http://localhost:3000/akwa",
//       backgroundImage: "url('/speedy/akwa.png')",
//       title: "Akwa",
//     },
//     {
//       id: 2,
//       href: "http://localhost:3000/speedy",
//       backgroundImage: "url('/speedy/navback.jpeg')",
//       title: "Speedy",
//     },
//   ];

//   return (
//     <div className="w-screen h-screen flex">
//       {links.map((link, index) => (
//         <Link
//           key={link.id}
//           href={link.href}
//           className="relative w-1/2 h-full overflow-hidden"
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* Background Container */}
//           <div
//             style={{
//               backgroundImage: link.backgroundImage,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             className={`w-full h-full transition-transform duration-500 ease-in-out ${
//               hoveredIndex === index ? "scale-110" : "scale-100"
//             }`}
//           ></div>

//           {/* Black Overlay */}
//           <div className="absolute inset-0 bg-black opacity-70"></div>

//           {/* Title */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-white text-7xl font-bold">{link.title}</h1>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Home;

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
      href: "http://localhost:3000/akwa",
      imageSrc: "/speedy/akwa.png",
      title: "Akwa",
    },
    {
      id: 2,
      href: "http://localhost:3000/speedy",
      imageSrc: "/speedy/navback.jpeg",
      title: "Speedy",
    },
  ];

  return (
    <div className="w-screen h-screen flex">
      {links.map((link, index) => (
        <Link
          key={link.id}
          href={link.href}
          className="relative w-1/2 h-full overflow-hidden"
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
            <h1 className="text-white text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">{link.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
