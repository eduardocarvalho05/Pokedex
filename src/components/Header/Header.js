import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container, CapturarOverlay } from "./Header.styled";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import imgTitle from "../../img/Titulo.png";
import Capturar from "../../img/Capturar.svg"
import Excluir from "../../img/Excluir.svg"

function Header() {
  // hook para saber nosso path atual
  const location = useLocation();
  // hook para redirecionar
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { pokedetails, addToPokedex, removeFromPokedex, capturar, setCapturar, excluir, setExcluir, pokedex } = context

  const handleAddToPokedexClick = () => {
    addToPokedex(pokedetails[0]); // Adicionando o primeiro Pokémon da lista (ou ajuste conforme necessário)

    setCapturar(true);
    setTimeout(() => {
      setCapturar(false);
    }, 1000); // 1 segundo
  };

  const handleRemoveFromPokedexClick = () => {
    removeFromPokedex(pokedetails[0]);

    setExcluir(true);
    setTimeout(() => {
      setExcluir(false);
    }, 1000) // 1 segundo
  };

  const estaNaPokedex = () => {
    return pokedetails.length > 0 && pokedex.some((pokemon) => pokemon.name === pokedetails[0].name);
  };


  let headerContent;

  if (location.pathname === "/") {
    headerContent = (
      <>
        <button onClick={() => goToPokedexPage(navigate)} className="buttonDireita">
          <p>Pokédex</p>
        </button>
        <img className="logo" src={imgTitle} alt="" />
      </>
    );
  } else if (location.pathname === "/pokedex") {
    headerContent = (
      <>
        <button onClick={() => goToHomePage(navigate)} className="buttonEsquerda">
          <p>Todos Pokémons</p>
        </button>
        <img className="logo" src={imgTitle} alt="" />
      </>
    );
  }

  else if (location.pathname.startsWith("/detalhes/")) {
    const pokemonEstaNaPokedex = estaNaPokedex();

    headerContent = (
      <>
        <button onClick={() => goToHomePage(navigate)} className="buttonEsquerda">
          <p>Todos Pokémons</p>
        </button>

        {pokemonEstaNaPokedex ? (
          <button onClick={handleRemoveFromPokedexClick} className="excluir">
            <p>Excluir</p>
          </button>
        ) : (
          <button onClick={handleAddToPokedexClick} className="adicionar">
            <p>Adicionar</p>
          </button>
        )}

        <img className="logo" src={imgTitle} alt="" />
      </>
    );
  }

  else {
    headerContent = (
      <>
        <button onClick={() => goToHomePage(navigate)} className="inexistente">
          <p>Voltar para a página inicial</p>
        </button>
        <p>Página inexistente</p>
      </>
    );

  }

  return (
    <Container>
      {headerContent}
      {capturar && (
        <CapturarOverlay className="CapturarOverlay">
          <img src={Capturar} alt="Capturando" />
        </CapturarOverlay>
      )}
      {excluir && (
        <CapturarOverlay className="RemoverOverlay">
          <img src={Excluir} alt="Excluir" />
        </CapturarOverlay>
      )}
    </Container>
  );
}

export default Header;
