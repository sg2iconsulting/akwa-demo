import React from 'react';
import { motion } from 'framer-motion';
import { IoCloseCircle } from 'react-icons/io5';
import Video from '../../atoms/Video/Video';
import Heading from '../../atoms/Heading/Heading';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  videoTitle?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoSrc,
  videoTitle,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#121212] p-2 md:p-4 lg:p-6 rounded-lg shadow-lg w-[90%]">
        <div className="w-full flex justify-between">
          <Heading tag='h2' className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-bold mb-4 px-2 text-white">
            {videoTitle}
          </Heading>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="text-white mb-4 px-2"
          >
            <IoCloseCircle className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px]" />
          </motion.button>
        </div>
        {videoSrc && (
          <Video
            src={videoSrc}
            className="w-full object-cover"
            controls
            autoPlay
          />
        )}
      </div>
    </div>
  );
};

export default VideoModal;