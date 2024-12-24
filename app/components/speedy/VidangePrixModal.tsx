import React from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  imgSrc: string;
}

const VidangePrixModal = ({ isVisible, onClose, imgSrc }: ModalProps) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative mx-5 md:mx-10 xl:mx-24"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imgSrc}
          alt="Prix vidange"
          className="max-w-full max-h-full"
        />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-black text-[10px] md:text-lg lg:text-3xl lg:m-1 md:mx-2 mx-1 xl:text-4xl xl:my-2 xl:mx-4 2xl:text-6xl 2xl:my-3 2xl:mx-6"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default VidangePrixModal;
