import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import useInView from "../hook/useView";
import AnimatedCounter from "./animation/AnimatedCounter";

const Chiffre = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full h-full flex flex-col gap-8 md:gap-14 xl:gap-20 py-10 md:py-16 xl:py-20 2xl:py-28 px-5 md:px-10 lg:px-20 text-white  bg-[#052337]">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8 }}
          className={`text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black`}
        >
          Chiffres Clés
        </motion.h2>

        <div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-5 xl:gap-14 text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[28px] xl:mb-8">
          <div className="flex flex-col items-center gap-2 md:h-24 lg:h-36 2xl:h-48">
            <motion.div
              ref={ref}
              initial={{ y: 25 }}
              animate={isInView ? { y: 0 } : { y: 25 }}
              transition={{ duration: 0.8 }}
              className="flex font-bold"
            >
              <span className="lg:text-[28px] 2xl:text-[48px]">+</span>
              <span>
                <AnimatedCounter value={20000} duration={3} />
              </span>
            </motion.div>
            <hr className="w-10 bg-white" />
            <div>
              <p className="text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">Emplois directs et</p>
              <p className="text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]"> indirects</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 md:h-24 lg:h-36 2xl:h-48">
            <motion.div
              ref={ref}
              initial={{ y: 25 }}
              animate={isInView ? { y: 0 } : { y: 25 }}
              transition={{ duration: 0.8 }}
              className="flex gap-1 font-bold"
            >
              <div className="flex">
                <span className="lg:text-[28px] 2xl:text-[48px]">+$</span>
                <span>
                  <AnimatedCounter value={4} duration={3} />
                </span>
              </div>
              <span className="lg:text-[28px] 2xl:text-[48px]">Milliards</span>
            </motion.div>
            <hr className="w-10 bg-white" />
            <p className="text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">de chiffres annuel</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:h-24 lg:h-36 2xl:h-48">
            <motion.div
              ref={ref}
              initial={{ y: 25 }}
              animate={isInView ? { y: 0 } : { y: 25 }}
              transition={{ duration: 0.8 }}
              className="flex font-bold"
            >
              <span>
                <AnimatedCounter value={2} duration={3} />
              </span>
            </motion.div>
            <hr className="w-10 bg-white" />
            <div>
              <p className="text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">Sociétés cotées en</p>
              <p className="text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">bourse</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 md:h-24 lg:h-36 2xl:h-48">
            <motion.div
              ref={ref}
              initial={{ y: 25 }}
              animate={isInView ? { y: 0 } : { y: 25 }}
              transition={{ duration: 0.8 }}
              className="flex font-bold"
            >
              <span>
                <AnimatedCounter value={70} duration={5} />
              </span>
            </motion.div>
            <hr className="w-10 bg-white" />
            <p className="text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">Sociétés</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:h-24 lg:h-36 2xl:h-48">
            <motion.div
              ref={ref}
              initial={{ y: 25 }}
              animate={isInView ? { y: 0 } : { y: 25 }}
              transition={{ duration: 0.8 }}
              className="flex font-bold"
            >
              <span className="lg:text-[28px] 2xl:text-[48px]">+</span>
              <span>
                <AnimatedCounter value={40} duration={5} />
              </span>
            </motion.div>
            <hr className="w-10 bg-white" />
            <p className="text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">Marques phares</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chiffre;

// import React from "react";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const Chiffre = () => {
//   return (
//     <section className="font-poppins w-full max-w-[2000px] mx-auto">
//       <div className="w-full h-full flex flex-col gap-8 md:gap-14 xl:gap-20 py-10 md:py-16 xl:py-20 2xl:py-28 px-5 md:px-10 lg:px-20 text-white  bg-[#052337]">
//         <h2 className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black">
//           Chiffres Clés
//         </h2>
//         <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible" className="flex flex-wrap justify-center lg:justify-between items-center w-full gap-5 xl:gap-14 text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[28px] xl:mb-8">
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col items-center w-40 xl:w-auto md:h-20 gap-2"
//           >
//             <p className="font-bold">+20 000</p>
//             <hr className="w-10 bg-white" />
//             <p className="text-center font-semibold">
//               Emplois directs et indirects
//             </p>
//           </motion.div>
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col items-center w-40 xl:w-auto md:h-20 gap-2"
//           >
//             <p className="font-bold">+$4 Milliards</p>
//             <hr className="w-10 bg-white" />
//             <p className="text-center font-semibold">de chiffres annuel</p>
//           </motion.div>
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col items-center w-40 xl:w-auto md:h-20 gap-2"
//           >
//             <p className="font-bold">2</p>
//             <hr className="w-10 bg-white" />
//             <p className="text-center font-semibold">
//               Sociétés cotées en bourse
//             </p>
//           </motion.div>
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col items-center w-40 xl:w-auto md:h-20 gap-2"
//           >
//             <p className="font-bold">70</p>
//             <hr className="w-10 bg-white" />
//             <p className="text-center font-semibold">Sociétés</p>
//           </motion.div>
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col items-center w-40 xl:w-auto md:h-20 gap-2"
//           >
//             <p className="font-bold">+40</p>
//             <hr className="w-10 bg-white" />
//             <p className="text-center font-semibold">Marques phares</p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Chiffre;
