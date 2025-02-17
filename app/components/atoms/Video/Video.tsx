import React from 'react';

export interface VideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const Video = ({ src, className, style }: VideoProps) => {
  return (
    <video controls className={className} style={style || {}}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;