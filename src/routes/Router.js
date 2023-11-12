import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PokemonDetails from '../pages/DetailsPage/DetailsPage';
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function Router() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/detalhes/:name" element={<PokemonDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
