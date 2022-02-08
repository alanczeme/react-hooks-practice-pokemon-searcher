import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemonData, setPokemonData }) {

  const [ name, setName ] = useState("");
  const [ hp, setHp ] = useState("");
  const [ frontURL, setFrontURL ] = useState("");
  const [ backURL, setBackURL ] = useState("");

  function handleSubmit(e) {
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
            "name": name,
            "hp": hp,
            "sprites": {
              "front": frontURL,
              "back": backURL,
            },
        }),
    })
    .then(response => response.json())
    .then(data => setPokemonData([...pokemonData, data]))
    .catch((error) => console.error('Error:', error))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => setHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFrontURL(e.target.value)} 
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setBackURL(e.target.value)} 
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
