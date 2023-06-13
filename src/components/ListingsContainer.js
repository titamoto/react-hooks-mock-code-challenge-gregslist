import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ cards, onDelete }) {
  return (
    <main>
      <ul className="cards">
        {cards.map((card) => (
          <ListingCard card={card} key={card.id} onDelete={onDelete} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
