import React from 'react';

interface DarkOverlayProps {
  enabled?: boolean;
  opacity?: number;
}

const DarkOverlay: React.FC<DarkOverlayProps> = ({
  enabled = true,
  opacity = 40
}) => {
  if (!enabled) return null;
  
  return (
    <div 
      className="absolute inset-0 bg-black" 
      style={{ opacity: opacity / 100 }}
    />
  );
};

export default DarkOverlay;