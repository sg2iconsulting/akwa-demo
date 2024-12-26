import React, { useState } from "react";

const SelectOptions = () => {
  const [largeur, setLargeur] = useState(200);
  const [hauteur, setHauteur] = useState(200);
  const [radial, setRadial] = useState(200);
  const [indiceDeCharge, setIndiceDeCharge] = useState(200);
  const [indiceDeVitesse, setIndiceDeVitesse] = useState("V");
  const [localite, setLocalite] = useState("");
  const [isRunflatChecked, setIsRunflatChecked] = useState(false);

  const largeurOpt = [
    0, 7, 28, 30, 31, 32, 33, 35, 60, 70, 80, 90, 100, 110, 115, 120, 125, 130,
    135, 140, 145, 150, 152, 155, 160, 165, 170, 175, 178, 180, 185, 190, 195,
    200, 205, 210, 215, 225, 235, 240, 245, 255, 265, 275, 285, 295, 305, 315,
    325, 345, 355,
  ];
  const hauteurOpt = [40, 45, 50, 55, 60, 65, 70, 75, 80, 205];
  const radialOpt = [15, 16, 17, 18, 19];
  const chargeOpt = [91, 94];
  const vitesseOpt = ["Q", "T", "H", "V", "W", "Y"];

  return (
    <div className="relative xl:hidden block">
      <div className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-[35%] absolute -top-[73px] sm:-top-[103px] md:-top-[118px] lg:-top-[140px] left-1/2 transform -translate-x-1/2">
        <img src="/speedy/demi-pneu.png" />
      </div>
      <div className="flex flex-col gap-5 w-[96%] md:h-[350px] justify-center dark:bg-[#1E1E1E] mx-auto h-full px-4 sm:px-8 mb-6 md:mb-0 py-5 md:py-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <h2 className="px-2 font-bold text-sm">Trouvez vos pneus</h2>
        <div>
          <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row justify-between items-center w-full">
            <div className="flex flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap w-full md:w-full lg:w-full xl:w-2/3 gap-y-4">
              <div className="flex flex-col items-start w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 px-2">
                <label htmlFor="largeur" className="mb-1 text-black dark:text-white text-xs sm:text-sm font-medium">
                  Largeur
                </label>
                <select
                  id="largeur"
                  value={largeur}
                  onChange={(e) => setLargeur(Number(e.target.value))}
                  className="w-full px-2 py-1 border border-gray-300 text-xs sm:text-sm lg:text-base  outline-none"
                >
                  {largeurOpt.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col items-start w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 px-2">
                <label htmlFor="hauteur" className="mb-1 text-black dark:text-white text-xs sm:text-sm font-medium">
                  Hauteur
                </label>
                <select
                  id="hauteur"
                  value={hauteur}
                  onChange={(e) => setHauteur(Number(e.target.value))}
                  className="w-full px-2 py-1 border border-gray-300 text-xs sm:text-sm lg:text-base  outline-none"
                >
                  {hauteurOpt.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col items-start w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 px-2">
                <label htmlFor="radial" className="mb-1 text-black dark:text-white text-xs sm:text-sm font-medium">
                  Radial
                </label>
                <select
                  id="radial"
                  value={radial}
                  onChange={(e) => setRadial(Number(e.target.value))}
                  className="w-full px-2 py-1 border border-gray-300 text-xs sm:text-sm lg:text-base  outline-none"
                >
                  {radialOpt.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col items-start w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 px-2">
                <label htmlFor="charge" className="mb-1 text-black dark:text-white text-xs sm:text-sm font-medium">
                  Indice de charge
                </label>
                <select
                  id="charge"
                  value={indiceDeCharge}
                  onChange={(e) => setIndiceDeCharge(Number(e.target.value))}
                  className="w-full px-2 py-1 border border-gray-300 text-xs sm:text-sm lg:text-base  outline-none"
                >
                  {chargeOpt.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col items-start w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 px-2">
                <label htmlFor="vitesse" className="mb-1 text-black dark:text-white text-xs sm:text-sm font-medium">
                  Indice de vitesse
                </label>
                <select
                  id="vitesse"
                  value={indiceDeVitesse}
                  onChange={(e) => setIndiceDeVitesse(e.target.value)}
                  className="w-full px-2 py-1 border border-gray-300 text-xs sm:text-sm lg:text-base  outline-none"
                >
                  {vitesseOpt.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-full md:w-full lg:w-full xl:w-1/3 px-2 mt-4">
              <label htmlFor="localite" className="block mb-1 text-black dark:text-white text-xs sm:text-sm font-medium">
                Votre localité
              </label>
              <input
                id="localite"
                type="text"
                value={localite}
                onChange={(e) => setLocalite(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-xs sm:text-sm lg:text-base"
                placeholder="Ville ou code postal"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center w-full mt-4 gap-4 px-2">
            <div className="flex items-center">
              <input
                id="runflat"
                type="checkbox"
                checked={isRunflatChecked}
                onChange={(e) => setIsRunflatChecked(e.target.checked)}
                className="mr-2 h-4 w-4 md:h-5 md:w-5 lg:h-5 lg:w-5"
              />
              <label htmlFor="runflat" className="text-black dark:text-white text-xs sm:text-sm lg:text-base">
                Runflat
              </label>
            </div>
            <button className="w-full md:w-72 lg:w-72 px-4 py-2 text-white bg-red-600 font-bold text-xs sm:text-sm lg:text-base">
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectOptions;