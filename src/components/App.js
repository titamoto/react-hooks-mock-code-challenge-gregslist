import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((cards) => setCards(cards));
  }, []);

  function onDelete(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  function onSubmit(input) {
    if (input === "") {
      fetch("http://localhost:6001/listings")
        .then((r) => r.json())
        .then((cards) => setCards(cards));
    } else {
      setCards(
        cards.filter((card) =>
          card.description.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  }

  return (
    <div className="app">
      <Header onSubmit={onSubmit} />
      <ListingsContainer cards={cards} onDelete={onDelete} />
    </div>
  );
}

export default App;
