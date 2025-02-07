import React from "react";
import { motion } from "framer-motion";

export interface PromoCardProps {
  productName: string;
  productImageSrc: string;
  serie: string;
  reference: string;
  priceValue: string;
  priceLabelTextColor: string;
  oldPrice: string;
  promoContainerBackground: string;
  productNameTextColor: string;
  serieTextColor: string;
  referenceTextColor: string;
  priceTextColor: string;
  oldPriceTextColor: string;
  oldPriceBackgroundColor: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
}

const PromoCard = ({
  productImageSrc,
  productName,
  productNameTextColor,
  promoContainerBackground,
  serie,
  serieTextColor,
  reference,
  referenceTextColor,
  priceValue,
  priceTextColor,
  priceLabelTextColor,
  oldPrice,
  oldPriceBackgroundColor,
  oldPriceTextColor,
  buttonBackgroundColor,
  buttonTextColor,
}: PromoCardProps) => {
  return (
    <div 
    style={{
        backgroundColor: promoContainerBackground || "white"
    }}
    className="w-full md:w-[678px] h-[369px] flex justify-center items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-9">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center py-5 gap-y-4">
        <div className="dark:text-black w-full  h-1/2 sm:h-full  sm:w-1/2 flex flex-col items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-10">
          <div className="w-full flex flex-col text-center sm:text-start">
            <p
              style={{
                color: productNameTextColor || "black",
              }}
              className="text-[12px] sm:text-lg "
            >
              {productName}
            </p>
            <p
              style={{
                color: serieTextColor || "black",
              }}
              className="text-[18px] sm:text-4xl font-bold"
            >
              {serie}
            </p>
            <p
              style={{
                color: referenceTextColor || "black",
              }}
              className="text-[12px] sm:text-xl"
            >
              {reference}
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 text-center items-center sm:text-start sm:items-start">
            <div>
              <p 
              style={{
                color: priceLabelTextColor || "black",
              }}
              className="text-[12px] sm:text-lg ">
                Prix unitaire web
              </p>
              <div className="flex gap-2 ">
                <p 
                style={{
                    color: priceTextColor || "black",
                  }}
                className="text-[16px] sm:text-xl font-bold">{priceValue} DH</p>
                <p 
                style={{
                    color: oldPriceTextColor || "black",
                    backgroundColor: oldPriceBackgroundColor || "white"
                  }}
                className="text-[11px] sm:text-[15px] justify-center font-bold  line-through flex items-center sm:px-1">
                  {oldPrice} DH
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-[170px] sm:w-[215px] h-[36px] md:h-[50px] text-[16px] font-bold sm:text-xl "
              style={{
                color: buttonTextColor || "white",
                backgroundColor: buttonBackgroundColor || "bg-[#D52435]"
              }}
            >
              Acheter
            </motion.button>
          </div>
        </div>
        <div className="w-full h-1/2 sm:h-full sm:w-1/2  flex justify-center sm:justify-end ">
          <img src={productImageSrc} className="w-28 sm:w-60 " />
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
