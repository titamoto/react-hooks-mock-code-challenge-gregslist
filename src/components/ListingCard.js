import React, { useState } from "react";

function ListingCard({ card, onDelete }) {
  const [isFav, setFav] = useState(false);

  function handleFavClick() {
    setFav((isFav) => !isFav);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${card.id}`, {
      method: "DELETE",
    });
    onDelete(card.id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        {isFav ? (
          <button
            onClick={handleFavClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
