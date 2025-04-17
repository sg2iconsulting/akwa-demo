"use client"
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Heading from "../../atoms/Heading/Heading";
import L from "leaflet"

// Fix for default icons
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapMarker {
  position: [number, number]; // [latitude, longitude]
  title?: string;
  info?: string;
}

interface MapComponentProps {
  center: [number, number]; // [latitude, longitude]
  markers?: MapMarker[];
  zoom?: number;
  title?: string;
  titleClassName?: string;
  containerClassName?: string;
  mapClassName?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  height?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  center,
  markers = [],
  zoom = 13,
  title,
  titleClassName = "text-[32px] md:text-[40px] xl:text-[48px] font-bold mb-8 md:mb-12 xl:mb-16",
  containerClassName = "w-full py-8 md:py-12 xl:py-16 px-5 md:px-10 lg:px-20",
  mapClassName = "rounded-lg shadow-md overflow-hidden",
  headingTag = "h2",
  height = "500px",
}) => {
  return (
    <div className={containerClassName}>
      {title && (
        <Heading tag={headingTag} className={titleClassName}>
          {title}
        </Heading>
      )}
      <div className={mapClassName} style={{ height }}>
        <MapContainer 
          center={center} 
          zoom={zoom} 
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              {marker.title || marker.info ? (
                <Popup>
                  {marker.title && <h3 className="font-bold">{marker.title}</h3>}
                  {marker.info && <div dangerouslySetInnerHTML={{ __html: marker.info }} />}
                </Popup>
              ) : null}
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;