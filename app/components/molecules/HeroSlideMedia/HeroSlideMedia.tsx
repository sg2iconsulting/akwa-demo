// import React from 'react';
// import Video from '../../atoms/Video/Video';
// import Image from '../../atoms/Image/Image';

// interface HeroSlideMediaProps {
//   type: 'image' | 'video' | 'custom';
//   src: string;
//   posterSrc?: string;
//   className?: string;
//   alt?: string;
// }

// const HeroSlideMedia: React.FC<HeroSlideMediaProps> = ({
//   type,
//   src,
//   posterSrc,
//   className,
//   alt = "Hero slide"
// }) => {
//   if (type === 'image') {
//     return <Image src={src} alt={alt} className={className} />;
//   } else if (type === 'video') {
//     return (
//       <Video 
//         src={src} 
//         className={className}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//         controls={false}
//         poster={posterSrc}
//       />
//     );
//   }
  
//   return null;
// };

// export default HeroSlideMedia;

import React from 'react';
import Video from '../../atoms/Video/Video';
import Image from '../../atoms/Image/Image';

interface HeroSlideMediaProps {
  type: 'image' | 'video' | 'custom';
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
  modalEnabled = false 
}) => {
  if (type === 'image') {
    return <Image src={src} alt={alt} className={className} />;
  } else if (type === 'video') {

    const containerProps = modalEnabled && onVideoClick ? {
      className: "cursor-pointer",
      onClick: onVideoClick
    } : {};
    
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