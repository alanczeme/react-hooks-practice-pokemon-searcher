import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const [showFront, setShowFront] = useState(true);

  function handleCardClick () {
    setShowFront((showFront) => !showFront);
  }

  return (
    <Card>
      <div onClick={handleCardClick}>
        <div className="image">
          <img alt="oh no!" src={showFront ? pokemon.sprites.front : pokemon.sprites.back} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
