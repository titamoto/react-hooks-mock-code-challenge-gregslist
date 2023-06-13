import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((cards) => setCards(cards));
  }, []);

  function onDelete(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

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
