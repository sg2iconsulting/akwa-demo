import React from "react";
import ItemCard, { ItemCardsProp } from "./ItemCard";

export interface ItemCardListProps {
  items: ItemCardsProp[];
  classename?: string;
  style?: React.CSSProperties;
}

const ItemCardList = ({ items, classename, style }: ItemCardListProps) => {
  return (
    <div className={classename} style={style}>
      {items.map((item, index) => (
        <ItemCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ItemCardList;
