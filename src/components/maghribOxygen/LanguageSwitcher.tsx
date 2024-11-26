"use client";

// import { useLocale } from "next-intl";
// import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { IoEarth } from "react-icons/io5";

export default function LanguageSwitcher() {
  //   const [isPending, startTransition] = useTransition();
  //   const router = useRouter();
  //   const pathname = usePathname();
  //   const localActive = useLocale();

  //   const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //     const nextLocale = e.target.value;
  //     startTransition(() => {
  //       const currentPath = pathname.split("/").slice(2).join("/");
  //       router.replace(`/${nextLocale}/${currentPath}`);
  //     });
  //   };

  return (
    <div
      className={`flex gap-2 bg-transparent text-[22px] justify-center items-center`}
    >
      <label
        htmlFor="language-select"
        className="language-select hidden md:block "
      >
        <svg
          className="size-[20px]"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.02852 7.28516L2.35898 7.86172C2.65078 8.37148 3.12891 8.74766 3.69492 8.90938L5.73047 9.48945C6.33516 9.66172 6.75 10.2137 6.75 10.843V12.2457C6.75 12.6324 6.96797 12.984 7.3125 13.1562C7.65703 13.3285 7.875 13.6801 7.875 14.0668V15.4379C7.875 15.9863 8.39883 16.3836 8.92617 16.2324C9.49219 16.0707 9.93164 15.6172 10.0758 15.0441L10.1742 14.6504C10.3219 14.0562 10.7086 13.5465 11.2395 13.2441L11.5242 13.0824C12.0516 12.7836 12.375 12.2211 12.375 11.6164V11.3246C12.375 10.8781 12.1957 10.4492 11.8793 10.1328L11.7422 9.9957C11.4258 9.6793 10.9969 9.5 10.5504 9.5H9.03516C8.64492 9.5 8.2582 9.39805 7.91719 9.20469L6.7043 8.51211C6.55312 8.42422 6.43711 8.28359 6.38086 8.11836C6.26836 7.78086 6.41953 7.41523 6.73945 7.25703L6.94688 7.15156C7.17891 7.03555 7.44961 7.01445 7.6957 7.09883L8.51133 7.36953C8.79961 7.46445 9.11602 7.35547 9.28125 7.10586C9.44648 6.85977 9.42891 6.53281 9.23906 6.3043L8.76094 5.73125C8.40938 5.30938 8.41289 4.69414 8.77148 4.2793L9.32344 3.63594C9.63281 3.27383 9.68203 2.75703 9.44648 2.3457L9.36211 2.19805C9.23906 2.19102 9.11953 2.1875 8.99648 2.1875C5.73398 2.1875 2.96719 4.32852 2.02852 7.28516ZM16.3125 9.5C16.3125 8.20625 15.975 6.98984 15.3844 5.93164L14.4844 6.29375C13.9324 6.51523 13.6477 7.13047 13.834 7.69297L14.4281 9.47539C14.5512 9.84102 14.85 10.1188 15.2227 10.2102L16.2457 10.4668C16.2879 10.1504 16.309 9.82695 16.309 9.5H16.3125ZM0 9.5C0 7.11305 0.948212 4.82387 2.63604 3.13604C4.32387 1.44821 6.61305 0.5 9 0.5C11.3869 0.5 13.6761 1.44821 15.364 3.13604C17.0518 4.82387 18 7.11305 18 9.5C18 11.8869 17.0518 14.1761 15.364 15.864C13.6761 17.5518 11.3869 18.5 9 18.5C6.61305 18.5 4.32387 17.5518 2.63604 15.864C0.948212 14.1761 0 11.8869 0 9.5Z"
            fill="#0085C3"
          />
        </svg>
      </label>
      <select
        // defaultValue={localActive}
        defaultValue="fr"
        className={``}
        // onChange={onSelectChange}
        // disabled={isPending}
      >
        <option value="en" className="text-black">
          En
        </option>
        <option value="fr" className="text-black">
          Fr
        </option>
        <option value="ar" className="text-black">
          Ar
        </option>
      </select>
    </div>
  );
}
