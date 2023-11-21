import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { PokemonCardWrapper, InfoPokemons, InfoID, InfoName, InfoType, PokemonImage, Buttons, CapturarOverlay, Carregando } from "./Card.styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getColors } from "../../Color/Color";
import { getTypes } from "../../Color/ReturnType";
import Capturar from "../../img/Capturar.svg";
import { useRequestData } from "../../hooks/useRequestData";
import loading2 from "../../img/Loading2.webp";

function Card(props) {
  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex, addToDetailsPage, capturar } = context;
  const { pokemonUrl } = props;

  const [data, error, isLoading] = useRequestData(pokemonUrl);
  const [imageLoaded, setImageLoaded] = useState(false); // Novo estado para controlar se a imagem foi carregada

  // hook para saber nosso path atual
  const location = useLocation();
  // hook para redirecionar
  const navigate = useNavigate();

  useEffect(() => {
    // Atualiza o estado quando a imagem é carregada
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    // Verifica se a imagem já foi carregada
    const imageElement = new Image();
    imageElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
    imageElement.onload = handleImageLoad;

    // Limpa o evento ao desmontar o componente
    return () => {
      imageElement.onload = null;
    };
  }, [data.id]); // Dependência para garantir que o efeito é reexecutado quando o ID do Pokémon é alterado

  const renderContent = () => {
    if (isLoading) {
      return (
        <Carregando>
          <img src={loading2} alt="Carregando..." />
          <h3>Carregando...</h3>
        </Carregando>
      );
    }

    if (error) {
      return <h2>Ocorreu um erro. Tente novamente mais tarde.</h2>;
    }

    return (
      <>
        <InfoPokemons>
          <InfoID>#{data.id < 10 ? `0${data.id}` : data.id}</InfoID>
          <InfoName>{data && data.name ? data.name.charAt(0).toUpperCase() + data.name.slice(1) : ""}</InfoName>
          {data.types && (
            <InfoType>
              {data.types.map((type) => (
                <img key={type.type.name} src={getTypes(type.type.name)} alt={type.type.name} />
              ))}
            </InfoType>
          )}
        </InfoPokemons>

        <PokemonImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          alt={data.name}
          style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.5s" }}
        />

        <Buttons>
          <button
            onClick={() => {
              addToDetailsPage(data);
              goToDetailsPage(navigate, data);
            }}
            className="Detalhes"
          >
            Detalhes
          </button>

          {location.pathname === "/" ? (
            <button onClick={() => addToPokedex(data)} className="Capturar">
              Capturar!
            </button>
          ) : (
            <button onClick={() => removeFromPokedex(data)} className="Excluir">
              Excluir
            </button>
          )}
        </Buttons>

        {capturar && (
          <CapturarOverlay className="CapturarOverlay">
            <img src={Capturar} alt="Capturando" />
          </CapturarOverlay>
        )}
      </>
    );
  };

  return <PokemonCardWrapper style={{ backgroundColor: data.types ? getColors(data.types[0].type.name) : "#FFFFFF" }}>{renderContent()}</PokemonCardWrapper>;
}

export default Card;
