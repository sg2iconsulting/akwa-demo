import React from "react";

import { FaCheck } from "react-icons/fa";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

interface SubscriptionPlanProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isRecommended?: boolean;
  containerClassName?: string;
  titleClassName?: string;
  priceClassName?: string;
  periodClassName?: string;
  descriptionClassName?: string;
  featuresContainerClassName?: string;
  featureItemClassName?: string;
  featureIconClassName?: string;
  buttonClassName?: string;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  isRecommended = false,
  containerClassName = "bg-white rounded-lg shadow-md p-6 flex flex-col h-full",
  titleClassName = "text-xl font-bold mb-4",
  priceClassName = "text-3xl font-bold text-[#a5c33c] mb-1",
  periodClassName = "text-gray-500 mb-4",
  descriptionClassName = "text-gray-600 mb-6",
  featuresContainerClassName = "space-y-3 mb-6 flex-grow",
  featureItemClassName = "flex items-start",
  featureIconClassName = "text-[#a5c33c] mt-1 mr-2",
  buttonClassName = "px-6 py-2 bg-[#a5c33c] text-white font-bold rounded-full hover:bg-opacity-90 transition-colors mt-auto",
}) => {
  return (
    <div className={containerClassName}>
      {/* Plan title */}
      <Heading tag="h3" className={titleClassName}>
        {title}
      </Heading>

      {/* Price and period */}
      <div>
        <Paragraph className={priceClassName}>{price}</Paragraph>
        <Paragraph className={periodClassName}>{period}</Paragraph>
      </div>

      {/* Description */}
      <Paragraph className={descriptionClassName}>{description}</Paragraph>

      {/* Features list */}
      <div className={featuresContainerClassName}>
        {features.map((feature, index) => (
          <div key={index} className={featureItemClassName}>
            <FaCheck className={featureIconClassName} />
            <Paragraph>{feature}</Paragraph>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a href={buttonLink} className={buttonClassName}>
        {buttonText}
      </a>
    </div>
  );
};

export default SubscriptionPlan;
