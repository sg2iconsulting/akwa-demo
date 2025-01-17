import React from "react";
import Application from "../maghreb/Application";

const Cards = () => {
  return (
    <section className="w-full h-full max-w-[2000px] mx-auto">
      <div className="w-full flex flex-col gap-6 md:gap-10 px-5 md:px-10 lg:px-20 h-full">
        <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
          <Application
            imgSrc="/afriquiaGaz/cards/card-1.png"
            title="Propane 34 Kg pour particuliers"
            descrip=""
            color="bg-[#387CCC]"
            app={true}
          />
          <Application
            imgSrc="/afriquiaGaz/cards/card-2.png"
            title="Gamme de nos bouteilles"
            descrip=""
            color="bg-[#387CCC]"
            app={true}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
          <Application
            imgSrc="/afriquiaGaz/cards/card-3.png"
            title="Citernes pour particuliers"
            descrip=""
            color="bg-[#387CCC]"
            app={true}
          />
          <Application
            imgSrc="/afriquiaGaz/cards/card-4.png"
            title="Service de livraison Allo Gaz"
            descrip=""
            color="bg-[#387CCC]"
            app={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;
