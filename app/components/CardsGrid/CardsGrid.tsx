import React from "react";

export interface CardProps {
  imageSrc: string;
  imageClassename?: string;
  title: string;
  titleTextColor: string;
  description: string;
  descriptionTextColor?: string;
  applicationBackgroundColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  buttonLabel?: string;
  roundedButton?: string;
}

export interface CardsProps {
  cards: CardProps[]; 
  Component: React.ComponentType<CardProps>;
}

const Cards = ({ cards, Component }: CardsProps) => {
  return (
    <section className="w-full h-full max-w-[2000px] mx-auto">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 px-5 md:px-10 lg:px-20 h-full">
        {cards.map((card, index) => (
          <Component
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            titleTextColor={card.titleTextColor || ""}
            description={card.description || ""}
            descriptionTextColor={card.descriptionTextColor || ""}
            applicationBackgroundColor={card.applicationBackgroundColor || ""}
            buttonBackgroundColor={card.buttonBackgroundColor || ""}
            buttonTextColor={card.buttonTextColor || ""}
            buttonLabel={card.buttonLabel || ""}
            roundedButton={card.roundedButton || ""}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
