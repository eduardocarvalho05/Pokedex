import Card from "../../components/Card/Card";
import { PokemonsContainer, Title, Cards } from "./HomePage.styled";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


function HomePage() {
  const context = useContext(GlobalContext)
  const { pokelist, pokedex } = context;

  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );


  return (
    <>
      <Header />
      <PokemonsContainer>
        <Title>Todos Pokémons</Title>
        <Cards>
          {filteredPokelist().map((pokemon) => (
            <Card
              key={pokemon.url}
              pokemonUrl={pokemon.url}
            />
          ))}
        </Cards>
      </PokemonsContainer>
    </>
  );
}

export default HomePage;
