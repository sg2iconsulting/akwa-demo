"use client";
import Link from "next/link";
import React from "react";

const home = () => {

  return (
    <section className="w-full h-screen min-h-[300px] flex items-center justify-center">
      <div className="w-full h-full flex flex-col gap-7 justify-center items-center">
      <img
            src="/afriquiaGaz/logo/navbarLogo.png"
            alt="Afriquia Gaz Logo"
            className="w-[80px] md:w-[120px] lg:w-[140px] 2xl:w-[160px] 3xl:w-[170px] "
          />
          <button
              className={`w-[220px] 3xl:w-[250px] h-[50px]  2xl:h-[67px] md:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] rounded-full text-white font-bold bg-[#387CCC]`}
             
            >
              <Link href={"/afriquia_gaz/espace_particulier"}>Espace Particulier</Link>
            </button>
            <button
              className={`w-[220px] 3xl:w-[250px] h-[50px]  2xl:h-[67px] md:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] rounded-full text-white font-bold bg-[#3FABDF]`}
             
            >
              <Link href={"/afriquia_gaz/espace_professionnel"}>Espace Professionnel</Link>
            </button>

      </div>
    </section>
  );
};

export default home;
