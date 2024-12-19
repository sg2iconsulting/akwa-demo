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
      <div className="flex flex-col w-full h-full flex-wrap xl:px-8 1xl:px-12 2xl:px-24 ">
        <div className="flex justify-between items-center w-full flex-wrap">
          <div className="flex flex-wrap xl:flex-nowrap gap-1">
            <div className="flex xl:flex-col justify-between w-full">
              <label
                htmlFor="largeur"
                className="block mb-2 font-medium text-black dark:text-white text-start text-sm"
              >
                Largeur
              </label>
              <select
                id="largeur"
                value={largeur}
                onChange={(e) => setLargeur(Number(e.target.value))}
                className="px-4 py-2 border  border-gray-300 w-36"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex xl:flex-col justify-between w-full">
              <label
                htmlFor="hauteur"
                className="block mb-2 font-medium text-black dark:text-white text-sm"
              >
                Hauteur
              </label>
              <select
                id="hauteur"
                value={hauteur}
                onChange={(e) => setHauteur(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 w-36"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex xl:flex-col justify-between w-full">
              <label
                htmlFor="radial"
                className="block mb-2 font-medium text-black dark:text-white text-sm"
              >
                Radial
              </label>
              <select
                id="radial"
                value={radial}
                onChange={(e) => setRadial(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 w-36"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex xl:flex-col justify-between w-full">
              <label
                htmlFor="charge"
                className="block mb-2 font-medium text-black dark:text-white text-sm"
              >
                Indice de charge
              </label>
              <select
                id="charge"
                value={indiceDeCharge}
                onChange={(e) => setIndiceDeCharge(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 w-36"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex xl:flex-col items-center justify-between w-full">
              <label
                htmlFor="vitesse"
                className="block mb-2 font-medium text-black dark:text-white text-sm"
              >
                Indice de vitesse
              </label>
              <select
                id="vitesse"
                value={indiceDeVitesse}
                onChange={(e) => setIndiceDeVitesse(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 w-36"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="localite"
              className="block mb-2 font-medium text-black dark:text-white text-sm"
            >
              Votre localité
            </label>
            <input
              id="localite"
              type="text"
              value={localite}
              onChange={(e) => setLocalite(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded xl:w-56 1xl:w-72 "
              placeholder="Ville ou code postal"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex items-center">
            <input
              id="runflat"
              type="checkbox"
              checked={isRunflatChecked}
              onChange={(e) => setIsRunflatChecked(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="runflat" className="text-black dark:text-white text-sm">
              Runflat
            </label>
          </div>
          <button
            className="px-6 py-2 text-white bg-red-600 xl:w-56 1xl:w-72 font-bold"
          >
            rechercher
          </button>
        </div>
      </div>
  );
};

export default SelectOptions;


