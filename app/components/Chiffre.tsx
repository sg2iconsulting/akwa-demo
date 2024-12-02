import React from "react";

const Chiffre = () => {
  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto">
      <div className="w-full h-full flex flex-col gap-8 md:gap-14 xl:gap-20 py-10 md:py-16 xl:py-20 2xl:py-28 px-5 md:px-10 lg:px-20 text-white  bg-[#052337]">
        <h2 className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black">Chiffres Clés</h2>
        <div className="flex flex-wrap justify-center lg:justify-between items-center w-full gap-5 xl:gap-14 text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[28px] xl:mb-8">
          <div className="flex flex-col items-center w-40 xl:w-auto md:h-20 gap-2">
            <p className="font-bold">+20 000</p>
            <hr className="w-10 bg-white"/>
            <p className="text-center font-semibold">Emplois directs et indirects</p>
          </div>
          <div className="flex flex-col items-center w-40 xl:w-auto md:h-20 gap-2">
            <p className="font-bold">+$4 Milliards</p>
            <hr className="w-10 bg-white"/>
            <p className="text-center font-semibold">de chiffres annuel</p>
          </div>
          <div className="flex flex-col items-center w-40 xl:w-auto md:h-20 gap-2">
            <p className="font-bold">2</p>
            <hr className="w-10 bg-white"/>
            <p className="text-center font-semibold">Sociétés cotées en bourse</p>
          </div>
          <div className="flex flex-col items-center w-40 xl:w-auto md:h-20 gap-2">
            <p className="font-bold">70</p>
            <hr className="w-10 bg-white"/>
            <p className="text-center font-semibold">Sociétés</p>
          </div>
          <div className="flex flex-col items-center w-40 xl:w-auto md:h-20 gap-2">
            <p className="font-bold">+40</p>
            <hr className="w-10 bg-white"/>
            <p className="text-center font-semibold">Marques phares</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chiffre;