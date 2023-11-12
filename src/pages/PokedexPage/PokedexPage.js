import Card from "../../components/Card/Card";
import { PokedexContainer, Title, Cards, ExcluirOverlay } from "./PokedexPage.styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Excluir from "../../img/Excluir.svg"

function PokedexPage() {
  const context = useContext(GlobalContext)
  const { pokedex, removeFromPokedex, excluir } = context;

  return (
    <>
      <Header />
      <PokedexContainer>
        <Title>Meus Pokémons</Title>
        <Cards>
          {pokedex.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemonUrl={`${BASE_URL}/${pokemon.name}`}
              removeFromPokedex={removeFromPokedex}
            />
          ))}
          {excluir && (
            <ExcluirOverlay className="RemoverOverlay">
              <img src={Excluir} alt="Excluir" />
            </ExcluirOverlay>
          )}
        </Cards>
      </PokedexContainer>
    </>
  );
}

export default PokedexPage;
