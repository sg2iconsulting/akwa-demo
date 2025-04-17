import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import FeatureItem from "../../molecules/FeatureItem/FeatureItem";
import { IconType } from "react-icons";

interface FeatureItemData {
  icon: IconType;
  text: string;
}

interface SubscriptionPlan {
  title: string;
  description: string;
  features: FeatureItemData[];
}

interface SubscriptionPlansProps {
  title?: {
    firstPart: string;
    highlightedPart: string;
    lastPart: string;
  };
  highlightedPartClassName?: string;
  plans: SubscriptionPlan[];
  footerText?: string;
  containerClassName?: string;
  titleClassName?: string;
  cardsContainerClassName?: string;
  cardClassName?: string;
  cardTitleClassName?: string;
  cardDescriptionClassName?: string;
  featuresContainerClassName?: string;
  footerClassName?: string;
  iconColor?: string;
  iconClassename?: string;
  headingClassName?: string;
}

const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({
  title = {
    firstPart: "Des forfaits ",
    highlightedPart: "d'abonnement",
    lastPart: " adaptés à votre besoin",
  },
  plans = [],
  footerText = "La recharge semi-rapide (AC) est illimitée avec nos forfaits Pulse et Privilège.",
  containerClassName = "w-full max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8",
  titleClassName = "text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-12 md:mb-16 lg:mb-20",
  cardsContainerClassName = "flex flex-col md:flex-row md:flex-wrap gap-8 justify-center mb-12 md:mb-16",
  cardClassName = "bg-white rounded-lg shadow-lg p-8 md:p-10 w-full md:w-[calc(50%-1rem)] max-w-xl",
  cardTitleClassName = "text-[#a5c33c] text-2xl md:text-3xl font-bold mb-4",
  cardDescriptionClassName = "text-gray-700 mb-8",
  featuresContainerClassName = "space-y-4",
  footerClassName = "text-center text-[#a5c33c] text-base md:text-lg lg:text-xl font-medium",
  iconColor = "#a5c33c",
  iconClassename = "w-5 h-5 md:w-6 md:h-6",
  headingClassName = "text-sm md:text-base font-bold",
  highlightedPartClassName = "text-[#a5c33c]"
}) => {
  return (
    <div className={containerClassName}>
      <Heading tag="h2" className={titleClassName}>
        <span>{title.firstPart}</span>
        <span className={highlightedPartClassName}>{title.highlightedPart}</span>
        <span>{title.lastPart}</span>
      </Heading>

      <div className={cardsContainerClassName}>
        {plans.map((plan, index) => (
          <div key={index} className={cardClassName}>
            <Heading tag="h3" className={cardTitleClassName}>
              {plan.title}
            </Heading>
            
            <Paragraph className={cardDescriptionClassName}>
              {plan.description}
            </Paragraph>
            
            <div className={featuresContainerClassName}>
              {plan.features.map((feature, featureIndex) => (
                <FeatureItem
                  key={featureIndex}
                  icon={feature.icon}
                  text={feature.text}
                  iconColor={iconColor}
                  iconClassename={iconClassename}
                  headingClassName={headingClassName}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {footerText && (
        <Paragraph className={footerClassName}>{footerText}</Paragraph>
      )}
    </div>
  );
};

export default SubscriptionPlans;