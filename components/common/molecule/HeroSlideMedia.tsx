import React from "react";
import Video from "../atoms/Video";
import Image from "../atoms/Image";

interface HeroSlideMediaProps {
  type: "image" | "video" | "custom";
  src: string;
  posterSrc?: string;
  className?: string;
  alt?: string;
  onVideoClick?: () => void;
  modalEnabled?: boolean;
}

const HeroSlideMedia: React.FC<HeroSlideMediaProps> = ({
  type,
  src,
  posterSrc,
  className,
  alt = "Hero slide",
  onVideoClick,
  modalEnabled = false,
}) => {
  if (type === "image") {
    return <Image src={src} alt={alt} className={className} />;
  } else if (type === "video") {
    const containerProps =
      modalEnabled && onVideoClick
        ? {
            className: "cursor-pointer",
            onClick: onVideoClick,
          }
        : {};

    return (
      <div {...containerProps}>
        <Video
          src={src}
          className={className}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={!modalEnabled}
          poster={posterSrc}
        />
      </div>
    );
  }

  return null;
};

export default HeroSlideMedia;
