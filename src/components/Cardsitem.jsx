import React from "react";

const Cardsitem = ({ card }) => {
  return (
    <div className="card--item" id={`image${card.id}`}>
      {card.image && <img src={card.image} alt="card-item-image" />}
      <div className="card-info">
        <h2>{card.title}</h2>
        <p>{card.parg}</p>
        {card.learn_more && (
          <button className={`btn btn${card.id}`}>learn more</button>
        )}
      </div>
    </div>
  );
};

export default Cardsitem;
