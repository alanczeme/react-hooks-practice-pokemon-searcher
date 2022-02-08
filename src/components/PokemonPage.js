import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [ pokemonData, setPokemonData ] = useState([]);
  const [ searchText, setSearchText ] = useState("");


  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => setPokemonData(data))
    }, []);

  const pokemonFiltered = pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search setSearchText={setSearchText} />
      <br />
      <PokemonCollection pokemonData={pokemonFiltered} />
    </Container>
  );
}

export default PokemonPage;
