import React from "react";
import { cardinfo } from "../data";
import Cardsitem from "./Cardsitem";
import "./card.css";

const Cards = () => {
  const card = cardinfo.map((card) => <Cardsitem card={card} />);
  return <div className="cards-wrapper">{card}</div>;
};

export default Cards;
