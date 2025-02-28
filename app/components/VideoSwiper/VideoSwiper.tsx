import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";

const VideoSwiper: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  const slides = [
    {
      videoUrl:
        "https://sg2i.com/wp-content/uploads/2024/12/Groupeenergetique.mp4",
      title: "Groupe énergétique par excellence",
      buttonText: "Voir la video",
    },
    {
      videoUrl:
        "https://sg2i.com/wp-content/uploads/2024/12/transitionenergetique.mp4",
      title: "Transition Énergétique,",
      subtitle: "la voie de l’avenir",
      buttonText: "En savoir plus",
    },
    {
      videoUrl: "https://sg2i.com/wp-content/uploads/2024/12/AkwaAfrica.mp4",
      title: "AKWA AFRICA,",
      subtitle: "de nouvelles perspectives d’avenir",
      buttonText: "En savoir plus",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop
        className="w-full relative h-full z-40"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <video
              src={slide.videoUrl}
              className="w-full h-full object-cover relative"
              loop
              autoPlay
              muted
            />
            <div className="w-full h-full bg-black inset-0 absolute opacity-45"></div>
            <motion.div className="w-full h-full absolute inset-0 z-50 mt-4 sm:mt-0 ml-0 flex flex-col justify-center text-white">
              <p className="text-[12px] sm:text-[24px] md:text-[36px] xl:text-[70px] w-[60%] font-black ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                {slide.title}
              </p>
              {slide.subtitle && (
                <p className="text-[6px] sm:text-[10px] md:text-[15px] xl:text-[40px] font-bold ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20">
                  {slide.subtitle}
                </p>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setIsModalOpen(true);
                  setVideoSrc(slide.videoUrl);
                  setVideoTitle(slide.title);
                }}
                className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] 2xl:w-[290px] 2xl:h-[67px] rounded-full bg-white cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold text-black mt-3 sm:mt-5 md:mt-8 lg:mt-12 ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20 xl:mt-16"
              >
                {slide.buttonText}
              </motion.button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
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
    </>
  );
};

export default VideoSwiper;
