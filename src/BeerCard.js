// src/BeerCard.js
import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.description}</p>
    </div>
  );
};

export default BeerCard;
