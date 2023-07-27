import React, { useState } from "react";
import { Card } from "react-bootstrap";

const MySquad = () => {
  const [MySquad, setMySquad] = useState([]);

  return (
    <div className="mt-4 mx-auto h-75 w-75">
      <h3>My Squad</h3>
      {MySquad.map((pokemon) => (
        <Card>
          <Card.Img src={pokemon.url} />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MySquad;
