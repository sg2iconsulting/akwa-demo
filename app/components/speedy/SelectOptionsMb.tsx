import React, { useState } from "react";

const SelectOptions = () => {
  const [largeur, setLargeur] = useState(200);
  const [hauteur, setHauteur] = useState(200);
  const [radial, setRadial] = useState(200);
  const [indiceDeCharge, setIndiceDeCharge] = useState(200);
  const [indiceDeVitesse, setIndiceDeVitesse] = useState(200);
  const [localite, setLocalite] = useState("");
  const [isRunflatChecked, setIsRunflatChecked] = useState(false);

  const options = [200, 400, 600];

  return (
    <div className="relative xl:hidden block">
      <div className="w-[200px] sm:w-[280px] h-[35%] absolute -top-[73px] sm:-top-[103px] left-1/2 transform -translate-x-1/2">
        <img src="/speedy/demi-pneu.png" />
      </div>
      <div className="flex flex-col gap-5 w-[96%] md:h-[350px] justify-center dark:bg-[#1E1E1E] mx-auto h-full px-4 sm:px-8 mb-6 md:mb-0 py-5 md:py-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <h2 className="px-2 font-bold text-sm">Trouvez vos pneus</h2>
        <div>
          <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row justify-between items-center w-full">
            <div className="flex flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap w-full md:w-full lg:w-full xl:w-2/3 gap-y-4">
              {[
                {
                  id: "largeur",
                  label: "Largeur",
                  value: largeur,
                  setter: setLargeur,
                },
                {
                  id: "hauteur",
                  label: "Hauteur",
                  value: hauteur,
                  setter: setHauteur,
                },
                {
                  id: "radial",
                  label: "Radial",
                  value: radial,
                  setter: setRadial,
                },
                {
                  id: "charge",
                  label: "Indice de charge",
                  value: indiceDeCharge,
                  setter: setIndiceDeCharge,
                },
                {
                  id: "vitesse",
                  label: "Indice de vitesse",
                  value: indiceDeVitesse,
                  setter: setIndiceDeVitesse,
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-start w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 px-2"
                >
                  <label
                    htmlFor={item.id}
                    className="mb-1 text-black dark:text-white text-xs sm:text-sm font-medium"
                  >
                    {item.label}
                  </label>
                  <select
                    id={item.id}
                    value={item.value}
                    onChange={(e) => item.setter(Number(e.target.value))}
                    className="w-full px-2 py-1 border border-gray-300 text-xs sm:text-sm lg:text-base"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <div className="w-full md:w-full lg:w-full xl:w-1/3 px-2 mt-4">
              <label
                htmlFor="localite"
                className="block mb-1 text-black dark:text-white text-xs sm:text-sm font-medium"
              >
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
              <label
                htmlFor="runflat"
                className="text-black dark:text-white text-xs sm:text-sm lg:text-base"
              >
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
