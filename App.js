import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const pokemonApi = " https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    fetch(pokemonApi)
      .then((res) => res.json())
      .then((data) => {
        setAllPokemons(data.results);
      });
  }, []);

  return (
    <div className="mt-4 mx-auto h-75 w-75">
      <h3>All Pokemon</h3>
      {allPokemons.map((pokemon) => (
        <Card>
          <Card.Img src={pokemon.url} />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export { App };
