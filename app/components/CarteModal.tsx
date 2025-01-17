// import React from "react";
// import { motion } from "framer-motion";
// import AnimatedCounter from "./animation/AnimatedCounter";

// interface ModalProps {
//   isVisible: boolean;
//   onClose: () => void;
//   imgSrc: string;
// }

// const CarteModal = ({ isVisible, onClose, imgSrc }: ModalProps) => {
//   if (!isVisible) return null;

//   return (
//     <div
//       className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="relative mx-5 md:mx-10 xl:mx-24"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className=" h-full  w-full">
//           <div className="xl:h-[700px] xl:w-[1070px] flex flex-col xl:flex-row ">
//             <div className="">
//               <div className="w-full xl:w-[400px] h-full flex flex-col gap-8 md:gap-14 py-20 px-5 md:px-10 lg:px-20 text-white  bg-[#052337]">
//                 <motion.h2
//                   className={`text-[20px] md:text-[24px] lg:text-[32px] font-black`}
//                 >
//                   Chiffres Clés
//                 </motion.h2>

//                 <div className="flex xl:flex-col justify-center md:justify-between items-center w-full gap-5 text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[28px]">
//                   <div className="flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 ">
//                     <motion.div className="flex font-bold">
//                       <span className="lg:text-[28px] ">+</span>
//                       <span>
//                         <AnimatedCounter
//                           modal={true}
//                           value={20000}
//                           duration={3}
//                         />
//                       </span>
//                     </motion.div>
//                     <hr className="w-10 bg-white" />
//                     <div>
//                       <p className="text-center font-semibold md:text-[10px] lg:text-[16px]">
//                         Emplois directs et
//                       </p>
//                       <p className="text-center font-semibold md:text-[10px] lg:text-[16px]">
//                         {" "}
//                         indirects
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 ">
//                     <motion.div className="flex font-bold">
//                       <span>
//                         <AnimatedCounter modal={true} value={2} duration={3} />
//                       </span>
//                     </motion.div>
//                     <hr className="w-10 bg-white" />
//                     <div>
//                       <p className="text-center font-semibold md:text-[10px] lg:text-[16px]">
//                         Sociétés cotées en
//                       </p>
//                       <p className="text-center font-semibold md:text-[10px] lg:text-[16px]">
//                         bourse
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 ">
//                     <motion.div className="flex font-bold">
//                       <span>
//                         <AnimatedCounter modal={true} value={70} duration={5} />
//                       </span>
//                     </motion.div>
//                     <hr className="w-10 bg-white" />
//                     <p className="text-center font-semibold md:text-[10px] lg:text-[16px]">
//                       Sociétés
//                     </p>
//                   </div>
//                   <div className="flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 ">
//                     <motion.div className="flex font-bold">
//                       <span className="lg:text-[28px] ">+</span>
//                       <span>
//                         <AnimatedCounter modal={true} value={40} duration={5} />
//                       </span>
//                     </motion.div>
//                     <hr className="w-10 bg-white" />
//                     <p className="text-center font-semibold md:text-[10px] lg:text-[16px]">
//                       Marques phares
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="xl:w-[670px] xl:h-[700px]">
//               <img
//                 src="/akwagroup/images/akwaCarte.png"
//                 className="h-[200px] xl:h-[600px] xl:w-[670px] object-cover"
//               />
//               <div className="xl:h-[102px] w-full bg-white flex justify-center items-center">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                   className="w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]"
//                 >
//                   voir la video
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button
//           onClick={onClose}
//           className="absolute top-0 right-0 text-black text-[10px] md:text-lg lg:text-3xl lg:m-1 md:mx-2 mx-1 xl:text-4xl xl:my-2 xl:mx-4 2xl:text-6xl 2xl:my-3 2xl:mx-6"
//         >
//           ×
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarteModal;

// import React from "react";
// import { motion } from "framer-motion";
// import AnimatedCounter from "./animation/AnimatedCounter";

// interface ModalProps {
//   isVisible: boolean;
//   onClose: () => void;
//   imgSrc: string;
// }

// const CarteModal = ({ isVisible, onClose, imgSrc }: ModalProps) => {
//   if (!isVisible) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="relative mx-5 md:mx-10 xl:mx-24 bg-white rounded-lg overflow-hidden"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex flex-col xl:flex-row h-full w-full">
//           {/* Left Section: Content */}
//           <div className="w-full xl:w-[400px] bg-[#052337] text-white py-10 px-6 md:px-10 lg:px-16 flex flex-col gap-10 justify-evenly items-center">
//             <motion.h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-bold">
//               Chiffres Clés
//             </motion.h2>
//             <div className="flex flex-col gap-6 md:gap-10">
//               {[
//                 { value: 20000, label1: "Emplois directs et", label2: "indirects" },
//                 { value: 2, label1: "Sociétés cotées en", label2: "bourse" },
//                 { value: 70, label1: "Sociétés", label2: "" },
//                 { value: 40, label1: "Marques phares", label2: "" },
//               ].map(({ value, label1, label2 }, index) => (
//                 <div key={index} className="flex flex-col items-center gap-2">
//                   <motion.div className="text-lg font-bold flex items-baseline">
//                     {value > 10 && <span className="text-xl">+</span>}
//                     <AnimatedCounter modal={true} value={value} duration={3} />
//                   </motion.div>
//                   <hr className="w-10 bg-white" />
//                   <p className="text-center text-sm md:text-base font-semibold">
//                     {label1} <br />
//                     {label2}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Section: Image and Button */}
//           <div className="relative flex flex-col w-full xl:w-[670px]">
//             <div className="relative h-[200px] xl:h-[600px]">
//               <img
//                 src={"/akwagroup/images/akwaCarte.png"}
//                 alt="Carte Modal"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <div className="bg-white flex justify-center items-center h-[60px] xl:h-[102px]">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 className="px-6 py-2 xl:px-10 xl:py-4 bg-[#19A0BF] text-white font-bold rounded-full text-sm xl:text-lg"
//               >
//                 Voir la vidéo
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-black text-lg lg:text-3xl"
//         >
//           ×
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarteModal;

import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./animation/AnimatedCounter";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  imgSrc: string;
}

const CarteModal = ({ isVisible, onClose, imgSrc }: ModalProps) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-[250px] sm:w-[400px] md:w-[600px] lg:w-[750px] xl:w-auto 2xl:w-[1070px] mx-4 sm:mx-8 lg:mx-16 xl:mx-24 rounded-lg xl:rounded-[20px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row-reverse xl:h-auto h-full w-full ">
          {/* Right Section: Image and Button */}
          <div className="relative flex flex-col w-full xl:w-[670px] 2xl:w-[850px] bg-white">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[450px] xl:h-[600px] 2xl:h-[780px] ">
              <img
                src={imgSrc || "/akwagroup/images/akwaCarte.png"}
                alt="Carte Modal"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="bg-white flex justify-center items-center h-[60px] xl:h-[102px]  2xl:pb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-28 h-7 md:w-36 md:h-10 xl:w-52 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]"
              >
                Voir la vidéo
              </motion.button>
            </div>
          </div>

          {/* Left Section: Content */}
          <div className="w-full md:w-[250px] lg:w-[400px] bg-[#052337] text-white py-6 sm:py-8 md:py-6 xl:py-10 px-4 sm:px-6 md:px-8 flex flex-col gap-3 lg:gap-5 xl:gap-10 justify-evenly md:items-center">
            <motion.h2 className="text-[14px] sm:text-[16px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] font-black">
              Chiffres Clés
            </motion.h2>
            <div className="flex justify-between md:items-baseline md:flex-col gap-6 xl:gap-10">
              {[
                { value: 20000, label1: "Emplois directs et", label2: "indirects" },
                { value: 2, label1: "Sociétés cotées en", label2: "bourse" },
                { value: 70, label1: "Sociétés", label2: "" },
                { value: 40, label1: "Marques phares", label2: "" },
              ].map(({ value, label1, label2 }, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-1 xl:gap-3 md:w-20 lg:w-32 xl:w-40 2xl:w-48">
                  <motion.div className="text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px] font-bold flex items-baseline">
                    {value > 10 && <span className="text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px]">+</span>}
                    <AnimatedCounter modal={true} value={value} duration={3} />
                  </motion.div>
                  <hr className="w-4 xl:w-16 2xl:w-20 bg-white" />
                  <p className="text-center text-[4px] sm:text-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[20px] font-semibold">
                    {label1} <br />
                    {label2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-lg lg:text-3xl xl:text-4xl 2xl:text-6xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CarteModal;
