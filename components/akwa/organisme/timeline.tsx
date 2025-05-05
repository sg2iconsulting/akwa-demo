"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";

import TimelineNavigation from "../molecules/timeline-navigation";
import TimelineNode from "../atoms/timeline-node";
import ContentCard from "../molecules/content-card";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  initialActiveIndex?: number;
}

export default function Timeline({
  items,
  initialActiveIndex = 1,
}: TimelineProps) {
  const swiperRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      swiperRef.current?.swiper?.slidePrev();
    }
  };

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      swiperRef.current?.swiper?.slideNext();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="space-y-8 ">
      <div className="relative py-10">
        {/* Timeline line */}

        <Swiper
          ref={swiperRef}
          slidesPerView={5}
          spaceBetween={40}
          centeredSlides
          initialSlide={initialActiveIndex + 1}
          modules={[Navigation]}
          onSlideChange={(swiper) => {
            if (!swiper.isBeginning && !swiper.isEnd) {
              const newIndex = swiper.activeIndex;
              setDirection(newIndex > activeIndex ? 1 : -1);
              setActiveIndex(newIndex - 1);
            } else if (swiper.isBeginning) {
              swiperRef.current?.swiper?.slideNext();
            } else {
              swiperRef.current?.swiper?.slidePrev();
            }
          }}
          breakpoints={{
            319: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            426: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="mt-10"
        >
          <SwiperSlide className="">
            <div className="flex flex-col items-center py-12 relative z-[1]">
              <div
                className={`size-24 flex items-center justify-center text-center  `}
              >
                <div className="bg-[#19A0BF] rounded-full size-12"></div>
              </div>

              <motion.div
                className="absolute top-1/2 left-1/2 h-1 bg-[#19A0BF] transform -translate-y-[300px] w-[400px] z-[-5] rounded-full overflow-visible"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </div>
          </SwiperSlide>

          {items.map((item, index) => (
            <SwiperSlide key={item.year} className="">
              <TimelineNode
                year={item.year}
                isActive={index === activeIndex}
                isEven={index % 2 === 0}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                  swiperRef.current?.swiper?.slideTo(index + 1);
                }}
              />
            </SwiperSlide>
          ))}

          <SwiperSlide className="">
            <div className="flex flex-col items-center py-12 relative z-[-10]">
              <div
                className={`size-24 flex items-center justify-center text-center  `}
              >
                <div className="bg-[#19A0BF] rounded-full size-12"></div>
              </div>

              <motion.div
                className="absolute top-1/2 right-1/2 h-1 bg-[#19A0BF] transform -translate-y-[300px] w-[400px] z-[-100] rounded-full overflow-visible"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </div>
          </SwiperSlide>

          <TimelineNavigation onPrevious={handlePrevious} onNext={handleNext} />
        </Swiper>
      </div>

      {/* Timeline content */}
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-full flex items-center justify-center p-2"
        >
          <ContentCard
            title={items[activeIndex].title}
            description={items[activeIndex].description}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
