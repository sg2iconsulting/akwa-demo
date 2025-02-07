import React from 'react'
import SelectOptions from '../speedy/SelectOptions'
import { motion } from 'framer-motion'

const SpeedyNavback = () => {
  return (
    <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[850px] relative">
        <img
          src="/speedy/navback.jpeg"
          className="w-full h-[400px] sm:h-[450px] md:h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center sm:justify-normal xl:justify-center text-center text-white bg-black bg-opacity-40 ">
          <div className="flex w-full h-full flex-col justify-center items-center gap-3 md:gap-5 lg:gap-8 xl:gap-10">
            <div className="flex flex-col w-full h-full justify-end ">
              <h2 className="text-[18px] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-full ">
                Chez SPEEDY, Profitez d’un bilan
              </h2>
              <h2 className="text-[18px] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-full ">
                technique gratuit !
              </h2>
            </div>
            <div className="flex w-full h-full justify-center items-start">
              <div className="flex flex-col sm:flex-row gap-2 xl:gap-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-3 items-center justify-center px-6 py-2 xl:py-3 bg-[#3B7AB7] font-bold cursor-pointer text-white"
                >
                  <img
                    src="/speedy/icons/Icon-1.png"
                    className="w-4 l md:w-7 lg:w-10"
                  />
                  <p className="text-[8px] md:text-[11px] lg:text-[14px] xl:text-[18px] 2xl:text-[22px]">
                    ACHETEZ VOS PNEUS
                  </p>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-3 items-center justify-center px-6 py-2 xl:py-3 bg-[#043882] font-bold cursor-pointer text-white"
                >
                  <img
                    src="/speedy/icons/Icon-7.png"
                    className="w-4 l md:w-7 lg:w-10"
                  />
                  <p className="text-[8px] md:text-[11px] lg:text-[14px] xl:text-[18px] 2xl:text-[22px]">
                    DEMANDE DE DEVIS
                  </p>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-3 items-center justify-center px-6 py-2 xl:py-4 2xl:py-5 bg-[#01A8FF] font-bold cursor-pointer text-white"
                >
                  <img
                    src="/speedy/icons/Location.png"
                    className="w-4 md:w-7 lg:w-10"
                  />
                  <p className="text-[8px] md:text-[11px] lg:text-[14px] xl:text-[18px] 2xl:text-[22px]">
                    TROUVEZ UN CENTRE
                  </p>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:block xl:absolute xl:bottom-0 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:translate-y-1/2 w-full xl:w-[80%] xl:h-[500px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className="w-full h-full flex flex-col items-center">
            <div className="w-[480px] h-[35%] ">
              <img src="/speedy/demi-pneu.png" />
            </div>
            <div className="w-full h-[65%] dark:bg-[#1E1E1E] bg-white flex flex-col items-center justify-center">
              <div className="w-full flex flex-col gap-10">
                <h2 className="w-full text-lg font-bold xl:px-8 1xl:px-12 2xl:px-24">
                  Trouvez vos pneus
                </h2>
                <div className="w-full">
                  <SelectOptions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SpeedyNavback