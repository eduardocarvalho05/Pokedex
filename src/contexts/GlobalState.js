import Router from "../routes/Router";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/url";

const GlobalState = ({ children }) => {
    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [pokedetails, setPokedetails] = useState([]);
    const [capturar, setCapturar] = useState(false);
    const [excluir, setExcluir] = useState(false);

    // Carregar dados da Pokedex do localStorage durante a inicialização
    useEffect(() => {
        const savedPokedex = localStorage.getItem('pokedex');
        if (savedPokedex) {
            setPokedex(JSON.parse(savedPokedex));
        }
    }, []);

    useEffect(() => {
        fetchPokelist();
    }, []);

    const fetchPokelist = async () => {
        try {
            const response = await axios.get(`${BASE_URL}?limit=30&offset=0`);
            setPokelist(response.data.results);
        } catch (error) {
            console.log("Erro ao buscar lista de pokémons");
            console.log(error.response);
        }
    };

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );

        if (!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd];
            setPokedex(newPokedex);

            setCapturar(true);
            setTimeout(() => {
                setCapturar(false);
            }, 1000); // 1 segundo

            // Salvar Pokedex no localStorage após adicionar um Pokémon
            localStorage.setItem('pokedex', JSON.stringify(newPokedex));
        }
    };

    const addToDetailsPage = (pokemonToDetails) => {
        setPokedetails([pokemonToDetails]);
    };

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        );
        setPokedex(newPokedex);
        setExcluir(true);
        setTimeout(() => {
            setExcluir(false);
        }, 1000); // 1 segundo

        // Salvar Pokedex no localStorage após remover um Pokémon
        localStorage.setItem('pokedex', JSON.stringify(newPokedex));
    };

    const context = {
        pokelist,
        pokedex,
        setPokedex,
        pokedetails,
        capturar,
        setCapturar,
        excluir,
        setExcluir,
        addToPokedex,
        removeFromPokedex,
        addToDetailsPage
    };

    return (
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;