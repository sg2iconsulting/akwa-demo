import React from 'react'

export interface ImageProps {
    imageSource: string;
    imageAlt?: string;
    imageWidth?: number;
    imagehight?: number;
    imageClassename?: string;
    imageStyle?: React.CSSProperties;
    containerClassname?: string;
    containerStyle?: React.CSSProperties;
}

const Image = ({imageSource, imageAlt, imageWidth, imagehight, imageClassename, imageStyle, containerClassname, containerStyle}: ImageProps) => {
  return (
    <div className={containerClassname || ""} style={containerStyle || {}}>
        <img src={imageSource || ""} alt={imageAlt || ""} style={imageStyle || {}} className={imageClassename || ""}/>
    </div>
  )
}

export default Image