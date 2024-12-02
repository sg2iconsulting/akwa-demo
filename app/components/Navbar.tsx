"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GrMenu } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoCloseCircle } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

import "@/app/styles/swiperBullets.css";

const Navbar = ({ btnColor, space, link }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleOpenModal = (src: string) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && isOpen) {
        setIsOpen(false);
      }
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="font-poppins w-full max-w-[2000px] mx-auto relative">
      {/* Navbar */}
      <div className="w-full h-[80px] md:h-[96px] absolute top-0 left-0 z-50 bg-transparent flex px-5 md:px-10 justify-between items-center">
        <div>
          <img
            src="/logo/akwaLogo.png"
            alt="Afriquia Gaz Logo"
            className="w-[60px] md:w-[80px] lg:w-[100px]"
          />
        </div>

        {/* Menu Button for Mobile */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-[20px] md:text-[24px]"
          >
            <GrMenu />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex gap-5">
          <ul className="flex gap-24 text-[10px] md:text-[12px] xl:text-[16px] font-bold text-white">
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Le Groupe
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Pôles d’activités
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Finance
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Engagements
            </motion.li>
          </ul>
        </div>
        {/* Desktop Buttons */}
        <div className="hidden xl:block">
          <motion.button
            className={`lg:w-[220px] xl:w-[250px] w-[200px] h-[40px] md:h-[50px] rounded-full text-white font-bold bg-[#19A0BF]`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="{link}">Espace Media</Link>
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`xl:hidden w-full bg-[#052337] shadow-md overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col font-bold items-center gap-4 p-6 text-[10px] md:text-[12px] mt-11 text-white">
          <li className="">
            <motion.button
              className={`lg:w-[220px] xl:w-[250px] w-[200px] h-[40px] md:h-[50px] rounded-full font-bold bg-[#19A0BF]`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="{link}">Espace Media</Link>
            </motion.button>
          </li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Le Groupe
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Pôles d’activités
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Finance
          </motion.li>
          <motion.li
            className=" cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Engagements
          </motion.li>
        </ul>
      </div>

      {/* Swiper Section */}
      <div className="w-full relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full relative h-full"
        >
          <SwiperSlide>
            <video
              src={"/slides/Alpha.mp4"}
              className="w-full object-cover"
              loop
              autoPlay
              muted
            />
            <div className="w-full h-full absolute inset-0 z-50 mt-4 sm:mt-0 ml-4 xl:ml-20 flex flex-col justify-center text-white">
              <p className="text-[12px] sm:text-[24px] md:text-[36px] xl:text-[70px] w-[60%] font-black ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                Groupe énergétique par excellence
              </p>
              <button
                onClick={() => handleOpenModal("/slides/Alpha.mp4")}
                className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] rounded-full bg-white cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] font-bold text-black mt-3 sm:mt-5 md:mt-8 lg:mt-12 ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20 xl:mt-16"
              >
                Voir la video
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <video
              src={"/slides/transitionenergetique.mp4"}
              className="w-full object-cover"
              loop
              autoPlay
              muted
            />
            <div className="w-full h-full absolute inset-0 z-50 mt-4 sm:mt-0 ml-4 xl:ml-20 flex flex-col justify-center text-white">
              <p className="text-[12px] sm:text-[24px] md:text-[36px] xl:text-[70px] w-[70%] font-black ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                Transition Énergétique,
              </p>
              <p className="text-[6px] sm:text-[10px] md:text-[15px] xl:text-[40px] font-bold ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                la voie de l’avenir
              </p>
              <button
                onClick={() => handleOpenModal("/slides/transitionenergetique.mp4")}
                className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] rounded-full bg-white cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] font-bold text-black mt-3 sm:mt-5 md:mt-8 lg:mt-12 ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20 xl:mt-16"
              >
                Voir la video
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <video
              src={"/slides/Corvette.mp4"}
              className="w-full object-cover"
              loop
              autoPlay
              muted
            />
            <div className="w-full h-full absolute inset-0 z-50 mt-4 sm:mt-0 ml-4 xl:ml-20 flex flex-col justify-center text-white">
              <p className="text-[12px] sm:text-[24px] md:text-[36px] xl:text-[70px] w-[60%] font-black ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                AKWA AFRICA,
              </p>
              <p className="text-[6px] sm:text-[10px] md:text-[15px] xl:text-[40px] font-bold ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                de nouvelles perspectives d’avenir
              </p>
              <button
                onClick={() => handleOpenModal("/slides/Corvette.mp4")}
                className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] rounded-full bg-white cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] font-bold text-black mt-3 sm:mt-5 md:mt-8 lg:mt-12 ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20 xl:mt-16"
              >
                Voir la video
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#121212] p-2 md:p-4 lg:p-6 rounded-lg shadow-lg w-[90%]">
              <div className="w-full flex justify-between">
                <h2 className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-bold mb-4 px-2 text-white">Video</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-white mb-4 px-2"
                >
                  <IoCloseCircle className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px]" />
                </button>
              </div>
              {/* Video player */}
              {videoSrc && (
                <video
                  src={videoSrc}
                  className="w-full object-cover"
                  controls
                  autoPlay
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
