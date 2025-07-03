"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { GrMenu } from "react-icons/gr";
import { IoCloseCircle } from "react-icons/io5";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/styles/swiperBullets.css";
import useInView from "../hook/useView";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = ({ link = "" }: { link?: string }) => {
  const menuItems = [
    {
      label: "Notre Groupe",
      subItems: [
        { label: "Histoire", href: "#" },
        { label: "Vision & Mission", href: "#" },
        { label: "Gouvernance", href: "#" },
      ],
    },
    {
      label: "Nos Métiers",
      subItems: [
        {
          label: "Énergie",
          subItems: [
            { label: "Pour la Mobilité", href: "#" },
            { label: "Pour l’Industrie", href: "#" },
            { label: "Pour le Résidentiel & l’Hôtellerie", href: "#" },
          ],
        },
        {
          label: "Solutions durables",
          subItems: [
            { label: "Dessalement", href: "#" },
            { label: "Énergies Vertes & Durabilité", href: "#" },
          ],
        },
        {
          label: "Gaz Industriels & Médicaux",
          subItems: [
            { label: "Production & Distribution", href: "#" },
            { label: "Expertise sectorielle", href: "#" },
          ],
        },
        {
          label: "Hôtellerie",
          subItems: [
            { label: "Taghazout Bay", href: "#" },
            { label: "Marina Agadir", href: "#" },
            { label: "Kasbahs", href: "#" },
          ],
        },
        {
          label: "Immobilier",
          subItems: [
            { label: "Gestion Immobilière", href: "#" },
            { label: "Projets Immobiliers", href: "#" },
          ],
        },
        {
          label: "VC & Tech",
          subItems: [
            { label: "VC", href: "#" },
            { label: "Startup studio", href: "#" },
            { label: "Loyalty & Payment", href: "#" },
          ],
        },
        {
          label: "Médias",
          subItems: [
            { label: "Presse économique", href: "#" },
            { label: "Presse féminine", href: "#" },
          ],
        },
      ],
    },
    {
      label: "Nos Engagements",
      subItems: [
        { label: "Développement Durable & RSE", href: "#" },
        { label: "Impact Social & Communautaire", href: "#" },
        { label: "Sponsoring & Mécénat", href: "#" },
      ],
    },
    {
      label: "Nous Rejoindre",
      subItems: [
        { label: "Pourquoi Nous Rejoindre", href: "#" },
        { label: "Offres d'Emploi", href: "#" },
        { label: "La Vie au sein d'Akwa", href: "#" },
      ],
    },
    {
      label: "Nos Actualités",
      subItems: [
        { label: "Communiqués de Presse", href: "#" },
        { label: "Akwa Group dans les Médias", href: "#" },
        { label: "Galerie", href: "#" },
      ],
    },
    {
      label: "Contact",
      subItems: [
        { label: "Formulaire de Contact", href: "#" },
        { label: "Nos Bureaux", href: "#" },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref, isInView } = useInView();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenModal = (src: string) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "light" : "dark";
    setTheme(newTheme);
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

  if (!mounted) return null;

  return (
    <div className="font-poppins w-full max-w-[2000px] mx-auto relative dark:bg-[#121212] z-40">
      {/* Navbar */}
      <div className="w-full h-[80px] md:h-[96px] 2xl:h-[123px] absolute top-0 left-0 z-50 bg-transparent flex p-5 md:px-10 2xl:px-20 justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <img
            src="/logo/akwaLogo.png"
            alt="Afriquia Gaz Logo"
            className="w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]"
          />
        </motion.div>

        {/* Menu Button for Mobile */}
        <div className="xl:hidden flex gap-3">
          <div className="xl:flex gap-5 text-[12px] md:text-[14px]">
            <div className="flex items-center gap-1 mt-1 justify-around">
              {resolvedTheme === "dark" ? (
                <HiSun className="text-white text-[20px] mb-1 dark:text-white" />
              ) : (
                <FaMoon className="text-white text-[10px] md:text-[15px] mb-1" />
              )}
              <form>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={resolvedTheme === "light"}
                    onChange={handleToggle}
                    name=""
                  />
                  <div
                    className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 
                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                  after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border 
                  after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600
                  focus:outline-none focus:ring-0
                  sm:w-11 sm:h-6 sm:after:h-5 sm:after:w-5"
                  ></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>
              </form>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-[20px] md:text-[24px]"
          >
            <GrMenu />
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex gap-5">
          <ul className="flex justify-evenly gap-2 2xl:gap-4  text-[14px]   font-bold text-white w-full ">
            {menuItems.map((item, idx) => (
              <li
                key={item.label}
                className=""
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
                tabIndex={0}
                onFocus={() => setOpenDropdown(idx)}
                onBlur={() => setOpenDropdown(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-1 "
                >
                  {item.href ? (
                    <Link className="w-fit cursor-pointer" href={item.href}>
                      {item.label}
                    </Link>
                  ) : (
                    <span className="w-fit cursor-pointer">{item.label}</span>
                  )}
                  {item.subItems && (
                    <svg
                      className="ml-1 w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </motion.div>
                {/* Dropdown */}
                <AnimatePresence>
                  {item.subItems && openDropdown === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20, transition: { delay: 0.25 } }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="absolute left-0 right-0 mx-auto top-full min-h-[300px]  mt-2 w-full bg-white rounded-lg shadow-lg z-50 px-10 py-6 max-w-[90%] text-lg"
                      style={{
                        color: "#052337",
                      }}
                    >
                      {" "}
                      <h3 className="font-bold text-[#052337] text-xl mb-4">
                        {item.label}
                      </h3>
                      <DropdownList items={item.subItems} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:flex 2xl:gap-4 hidden">
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
          <div className="flex items-center gap-2 mt-1 justify-around w-[90px] mr-3">
            {resolvedTheme === "dark" ? (
              <HiSun className="text-white text-[13px] md:text-[28px] mb-1" />
            ) : (
              <FaMoon className="text-white text-[10px] md:text-[15px] mb-1" />
            )}
            <form>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={resolvedTheme === "light"}
                  onChange={handleToggle}
                  name=""
                />
                <div
                  className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 
                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                  after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border 
                  after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600
                  focus:outline-none focus:ring-0
                  sm:w-11 sm:h-6 sm:after:h-5 sm:after:w-5"
                ></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label>
            </form>
          </div>
          {/* Desktop Buttons */}
          <div className="hidden xl:block">
            <motion.button
              className={`xl:w-[200px] 2xl:w-[220px] w-[18px] h-[40px] md:h-[50px] xl:h-[50px]  2xl:h-[67px] text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] rounded-full text-white font-bold bg-[#19A0BF]`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link || "#"}>Espace Media</Link>
            </motion.button>
          </div>
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
              className={`lg:w-[220px]  w-[140px] md:w-[180px] h-[40px] md:h-[50px] rounded-full font-bold bg-[#19A0BF]`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link || "#"}>Espace Media</Link>
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
      <div className="w-full h-full relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
          className="w-full relative h-full z-40"
        >
          <SwiperSlide>
            <video
              src={
                "https://sg2i.com/wp-content/uploads/2024/12/Groupeenergetique.mp4"
              }
              className="w-full h-full object-cover relative"
              loop
              autoPlay
              muted
            />
            <div className="w-full h-full bg-black inset-0 absolute opacity-45"></div>
            <motion.div className="w-full h-full absolute inset-0 z-40 mt-4 sm:mt-0 ml-0 flex flex-col justify-center text-white">
              <p className="text-[12px] sm:text-[24px] md:text-[36px] xl:text-[70px] w-[60%] font-black ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                Groupe énergétique par excellence
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  handleOpenModal(
                    "https://sg2i.com/wp-content/uploads/2024/12/Groupeenergetique.mp4"
                  );
                  setVideoTitle("Groupe énergétique par excellence");
                }}
                className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] 2xl:w-[290px] 2xl:h-[67px] rounded-full bg-white cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold text-black mt-3 sm:mt-5 md:mt-8 lg:mt-12 ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20 xl:mt-16"
              >
                Voir la video
              </motion.button>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <video
              src={
                "https://sg2i.com/wp-content/uploads/2024/12/transitionenergetique.mp4"
              }
              className="w-full h-full object-cover relative"
              loop
              autoPlay
              muted
            />
            <div className="w-full h-full bg-black inset-0 absolute opacity-45"></div>
            <motion.div className="w-full h-full absolute inset-0 z-50 mt-4 sm:mt-0 ml-0 flex flex-col justify-center text-white">
              <p className="text-[12px] sm:text-[24px] md:text-[36px] xl:text-[70px] w-[70%] font-black ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                Transition Énergétique,
              </p>
              <p className="text-[6px] sm:text-[10px] md:text-[15px] xl:text-[40px] font-bold ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                la voie de l’avenir
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  handleOpenModal(
                    "https://sg2i.com/wp-content/uploads/2024/12/transitionenergetique.mp4"
                  );
                  setVideoTitle("Transition Énergétique");
                }}
                className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] 2xl:w-[290px] 2xl:h-[67px] rounded-full bg-white cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold text-black mt-3 sm:mt-5 md:mt-8 lg:mt-12 ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20 xl:mt-16"
              >
                En savoir plus
              </motion.button>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <video
              src={"https://sg2i.com/wp-content/uploads/2024/12/AkwaAfrica.mp4"}
              className="w-full h-full object-cover relative"
              loop
              autoPlay
              muted
            />
            <div className="w-full h-full bg-black inset-0 absolute opacity-45"></div>
            <motion.div className="w-full h-full absolute inset-0 z-50 mt-4 sm:mt-0 ml-0 flex flex-col justify-center text-white">
              <p className="text-[12px] sm:text-[24px] md:text-[36px] xl:text-[70px] w-[60%] font-black ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                AKWA AFRICA,
              </p>
              <p className="text-[6px] sm:text-[10px] md:text-[15px] xl:text-[40px] font-bold ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                de nouvelles perspectives d’avenir
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  handleOpenModal(
                    "https://sg2i.com/wp-content/uploads/2024/12/AkwaAfrica.mp4"
                  );
                  setVideoTitle("AKWA AFRICA");
                }}
                className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] 2xl:w-[290px] 2xl:h-[67px] rounded-full bg-white cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold text-black mt-3 sm:mt-5 md:mt-8 lg:mt-12 ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20 xl:mt-16"
              >
                En savoir plus
              </motion.button>
            </motion.div>
          </SwiperSlide>
        </Swiper>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#121212] p-2 md:p-4 lg:p-6 rounded-lg shadow-lg w-[90%]">
              <div className="w-full flex justify-between">
                <h2 className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-bold mb-4 px-2 text-white">
                  {videoTitle}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleCloseModal}
                  className="text-white mb-4 px-2"
                >
                  <IoCloseCircle className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px]" />
                </motion.button>
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

const DropdownList = ({ items }: { items: any[] }) => (
  <ul className="grid grid-flow-col grid-rows-3 gap-4">
    {items.map((item, idx) => (
      <li key={idx} className="mb-1 font-normal ">
        {item.href ? (
          <Link href={item.href}>{item.label}</Link>
        ) : (
          <span className="font-semibold">{item.label}</span>
        )}
        {item.subItems && (
          <ul className="flex flex-col">
            {item.subItems.map((item, idx) => (
              <li key={idx} className="mb-1 font-normal hover:underline">
                {item.href ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <span className="font-normal hover:underline">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);
