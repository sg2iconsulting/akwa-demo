import React from "react";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

export interface InputSectionBannerProps {
  placeholder: string;
  buttonLabel: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  inputClassName?: string;
  buttonClassename?: string;
  containerClassName?: string;
}

const InputSectionBanner = ({
  placeholder,
  buttonLabel,
  buttonBackgroundColor,
  buttonTextColor,
  inputClassName,
  buttonClassename,
  containerClassName = "relative w-[250px] sm:w-[350px] md:w-[420px] lg:w-[490px] xl:w-[600px] 2xl:w-[725px] text-black dark:text-white font-medium text-[8px] sm:text-[11px] lg:text-[13px] 2xl:text-[18px] px-5 md:pr-10 lg:pr-20 xl:pr-28",
}: InputSectionBannerProps) => {
  return (
    <div className={containerClassName}>
      <InputField
        type="email"
        placeholder={placeholder}
        className={inputClassName}
      />
      <Button className={buttonClassename}>{buttonLabel}</Button>
    </div>
  );
};

export default InputSectionBanner;
