import React, { useState, useEffect } from "react";
import React from 'react'
import PokemonList from "./components/PokemonList";
import MySquad from "./components/MySquad";

function App() {
  return (
    <>
      <MySquad />
      <PokemonList />
    </>
  );
}

export { App };
