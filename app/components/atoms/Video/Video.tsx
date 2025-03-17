import React from 'react';

export interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const Video = ({ src, className, style, ...props }: VideoProps) => {
  return (
    <video controls className={className} style={style || {}} {...props} >
      <source src={src} type="video/mp4" />
      video component 
    </video>
  );
};

export default Video;