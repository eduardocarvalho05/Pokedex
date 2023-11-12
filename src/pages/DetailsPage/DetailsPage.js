import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../components/Header/Header";
import { getTypes } from "../../Color/ReturnType";
import { getColors } from "../../Color/Color";
import {
  Container,
  Title,
  CardContainer,
  DivPixel,
  ImgPixel,
  BaseStatus, // Importe o componente BaseStatus
  InfoPoke,
  Moves,
  ImgLateral,
} from "../DetailsPage/DetailsPageStyled";
import BarraStatus from "./BarraProgresso";


function PokemonDetails() {
  const { pokedetails } = useContext(GlobalContext);
  const [listMoves, setListMoves] = useState([]);

  useEffect(() => {
    if (pokedetails && pokedetails.moves) {
      const arrayMoves = pokedetails.moves.map((elemento) => elemento.move.name);
      setListMoves(arrayMoves);
    }
  }, [pokedetails]);

  return (
    <>
      <Header />
      <Container>
        <Title>Pokémon detalhes</Title>

        <div>
          {pokedetails.map((pokemon) => {
            
            const backgroundColor = pokemon.types && pokemon.types.length > 0 && pokemon.types[0].type
              ? getColors(pokemon.types[0].type.name)
              : "";

            const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

            return (
              <CardContainer key={pokemon.name} style={{ backgroundColor }}>
                <DivPixel>
                  <ImgPixel>
                    <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
                  </ImgPixel>
                  <ImgPixel>
                    <img src={pokemon.sprites?.back_default} alt={pokemon.name} />
                  </ImgPixel>
                </DivPixel>

                <BarraStatus pokemon={pokemon} color={backgroundColor}/> 

                <div>
                  <InfoPoke>
                    <p className="infoId">#{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}</p>
                    <p className="infoName">{pokemon && pokemon.name ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : ""}</p>
                    {pokemon.types && (
                      <div className="infoType">
                        {pokemon.types.map((type) => (
                          <img
                            key={type.type.name}
                            src={getTypes(type.type.name)}
                            alt={type.type.name}
                          />
                        ))}
                      </div>
                    )}
                  </InfoPoke>
                  <Moves>
                    <h2>Moves:</h2>
                    <div className="div-list">
                      {pokemon.moves.slice(0, 50).map((move, index) => (
                        <p key={index} className="move-list">
                          {move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1).toLowerCase()}
                        </p>
                      ))}
                    </div>
                  </Moves>
                </div>
                <ImgLateral
                  src={imgPokemon}
                  alt={pokemon.name}
                />
              </CardContainer>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default PokemonDetails;
