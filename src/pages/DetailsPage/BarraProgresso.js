import React from 'react';
import styled from 'styled-components';

export const BaseStatus = styled.div`
  font-family: Poppins;
  width: 320px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 18px;
  gap: 20px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    order: 2;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    order: 2;
  }

  @media only screen and (max-width: 480px) {
    width: 280px;
    height: 500px;
    order: 2;
  }
`;

const Statbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;

  p {
    font-size: 14px;
    color: black;
    font-weight: bold;
    width: 50%; /* Tamanho fixo para todos os parágrafos */
  }

  &.total-highlight {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffc107;
    border-radius: 12px;
    height: 10%;
    font-size: 14px;
    color: black;
    font-weight: bold;
  }
`;

const Statfill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 100%;
  width: 50%; 
  background-color: #4caf50;
  text-align: center;
  color: #fff;
`;

const BarraStatus = ({ pokemon }) => {
    return (
        <BaseStatus>
            <h1>Base Stats</h1>
            <Statbar>
                <p>HP:</p>
                <Statfill style={{ width: `${pokemon.stats[0].base_stat}%` }}>
                    {pokemon.stats[0].base_stat}
                </Statfill>
            </Statbar>
            <Statbar>
                <p>Attack:</p>
                <Statfill style={{ width: `${pokemon.stats[1].base_stat}%` }}>
                    {pokemon.stats[1].base_stat}
                </Statfill>
            </Statbar>
            <Statbar>
                <p>Defense:</p>
                <Statfill style={{ width: `${pokemon.stats[2].base_stat}%` }}>
                    {pokemon.stats[2].base_stat}
                </Statfill>
            </Statbar>
            <Statbar>
                <p>Sp.Attack:</p>
                <Statfill style={{ width: `${pokemon.stats[3].base_stat}%` }}>
                    {pokemon.stats[3].base_stat}
                </Statfill>
            </Statbar>
            <Statbar>
                <p>Sp.Defense:</p>
                <Statfill style={{ width: `${pokemon.stats[4].base_stat}%` }}>
                    {pokemon.stats[4].base_stat}
                </Statfill>
            </Statbar>
            <Statbar>
                <p>Speed:</p>
                <Statfill style={{ width: `${pokemon.stats[5].base_stat}%` }}>
                    {pokemon.stats[5].base_stat}
                </Statfill>
            </Statbar>
            <Statbar className="total-highlight">
                <div>
                    Total: {pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0)}
                </div>
            </Statbar>
        </BaseStatus>
    );
};

export default BarraStatus;



/////