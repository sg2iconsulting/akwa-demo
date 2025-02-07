import { motion } from "framer-motion";

interface IconComponentProps {
  socialMediaItems: React.ReactNode[];
}

const IconComponent: React.FC<IconComponentProps> = ({ socialMediaItems }) => {
  return (
    <div className="flex space-x-4">
      {socialMediaItems.map((icon, index) => (
        <div key={index}>{icon}</div>
      ))}
    </div>
  );
};

export default IconComponent;