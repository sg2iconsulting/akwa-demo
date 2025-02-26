import React from "react";
import InputField from "../../atoms/InputField/InputField";
import ButtonText from "../../atoms/ButtonText/ButtonText";

export interface InputSectionBannerProps {
  placeholder: string;
  buttonLabel: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  inputClassName?: string;
  buttonClassName?: string;
  containerClassName?: string;
}

const InputSectionBanner = ({
  placeholder,
  buttonLabel,
  buttonBackgroundColor,
  buttonTextColor,
  inputClassName = "w-full px-2 py-2 pr-20 lg:pr-[105px] xl:pr-[120px] lg:py-[10px] xl:py-[16px] 2xl:px-4 2xl:pr-44 2xl:py-5 border rounded-full focus:outline-none",
  buttonClassName = "absolute inset-y-1 right-1 px-3 2xl:px-6 py-[1px] lg:px-4 xl:px-6 xl:py-1 rounded-full font-bold 2xl:w-40 mr-5 md:mr-10 lg:mr-20 xl:mr-28",
  containerClassName = "relative w-[250px] sm:w-[350px] lg:w-[490px] xl:w-[600px] 2xl:w-[725px] text-black dark:text-white font-medium text-[8px] sm:text-[11px] lg:text-[13px] 2xl:text-[18px] px-5 md:pr-10 lg:pr-20 xl:pr-28",
}: InputSectionBannerProps) => {
  return (
    <div className={containerClassName}>
      <InputField type="text" placeholder={placeholder} className={inputClassName} />
      <ButtonText
        buttonTextLabel={buttonLabel}
        buttonTextStyle={{
          backgroundColor: buttonBackgroundColor,
          color: buttonTextColor,
        }}
        buttonTextClassename={buttonClassName}
      />
    </div>
  );
};

export default InputSectionBanner;