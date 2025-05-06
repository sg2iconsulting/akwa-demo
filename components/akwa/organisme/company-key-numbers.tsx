import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import useInView from "@/hook/useView";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

type StatItem = {
  value: number;
  duration?: number;
  hasPlus?: boolean;
  lines: string[];
};

type ChiffreProps = {
  title?: string;
  stats: StatItem[];
};

const CompanyKeyNumbers: React.FC<ChiffreProps> = ({
  title = "Chiffres Clés",
  stats,
}) => {
  const { ref, isInView } = useInView();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const initial = isInView
    ? isMobile
      ? { opacity: 0, y: 25 }
      : { opacity: 0, x: 40 }
    : {};

  const animate = isInView
    ? isMobile
      ? { opacity: 1, y: 0 }
      : { opacity: 1, x: 0 }
    : isMobile
    ? { opacity: 0, y: 0 }
    : { opacity: 0, x: 40 };

  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full h-full flex flex-col gap-8 md:gap-14 xl:gap-20 py-10 md:py-16 xl:py-20 2xl:py-28 px-5 md:px-10 lg:px-20 text-white bg-[#052337]">
        <motion.h2
          ref={ref}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8 }}
          className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black"
        >
          {title}
        </motion.h2>

        <div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-5 xl:gap-14 text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[28px] xl:mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48"
            >
              <motion.div
                ref={ref}
                initial={{ y: 25 }}
                animate={isInView ? { y: 0 } : { y: 25 }}
                transition={{ duration: 0.8 }}
                className="flex font-bold"
              >
                {stat.hasPlus && (
                  <span className="lg:text-[28px] 2xl:text-[48px]">+</span>
                )}
                <span>
                  <AnimatedCounter
                    value={stat.value}
                    duration={stat.duration || 3}
                  />
                </span>
              </motion.div>
              <hr className="w-10 bg-white" />
              <div className="text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">
                {stat.lines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyKeyNumbers;
