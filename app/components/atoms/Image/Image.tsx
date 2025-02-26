import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageClassename?: string;
  imageStyle?: React.CSSProperties;
}

const Image = ({
  imageClassename,
  imageStyle,
  ...props
}: ImageProps) => {
  return (
      <img
        style={imageStyle || {}}
        className={`${imageClassename || ""}`}
        {...props}
      />
  );
};

export default Image;