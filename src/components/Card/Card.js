import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { PokemonCardWrapper, InfoPokemons, InfoID, InfoName, InfoType, PokemonImage, Buttons, CapturarOverlay } from "./Card.styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getColors } from "../../Color/Color"
import { getTypes } from "../../Color/ReturnType"
import Capturar from "../../img/Capturar.svg"


function Card(props) {
  const context = useContext(GlobalContext)
  const { addToPokedex, removeFromPokedex, addToDetailsPage, capturar } = context
  const { pokemonUrl } = props;

  // hook para saber nosso path atual
  const location = useLocation();
  // hook para redirecionar
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  const backgroundColor = pokemon.types && pokemon.types.length > 0 && pokemon.types[0].type
    ? getColors(pokemon.types[0].type.name)
    : "#FFFFFF"; // Ou outra cor padrão se não houver tipos definidos

  const imagemPokemons = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`


  // const imagemPokemons = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`


  return (
    <>


      <PokemonCardWrapper style={{ backgroundColor }}>

        <InfoPokemons>
          <InfoID>#{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}</InfoID>

          <InfoName>{pokemon && pokemon.name ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : ""}
          </InfoName>

          {pokemon.types && (
            <InfoType>
              {pokemon.types.map((type) => (
                <img
                  key={type.type.name}
                  src={getTypes(type.type.name)}
                  alt={type.type.name}
                />
              ))}
            </InfoType>
          )}
        </InfoPokemons>

        <PokemonImage src={imagemPokemons} alt={pokemon.name} />

        {/* <PokemonImage
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        /> */}

        <Buttons>

          <button onClick={() => {
            addToDetailsPage(pokemon);
            goToDetailsPage(navigate, pokemon);
          }} className="Detalhes">
            Detalhes
          </button>

          {location.pathname === "/" ? (
            <button onClick={() => addToPokedex(pokemon)} className="Capturar">
              Capturar!
            </button>
          ) : (
            <button onClick={() => removeFromPokedex(pokemon)} className="Excluir">
              Excluir
            </button>
          )}
        </Buttons>

        {capturar && (
          <CapturarOverlay className="CapturarOverlay">
            <img src={Capturar} alt="Capturando" />
          </CapturarOverlay>
        )}

      </PokemonCardWrapper >

    </>
  );
}

export default Card;









