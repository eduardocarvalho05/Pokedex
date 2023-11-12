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
  padding: 20px;
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
`

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
  }
  
  &.total-highlight { /* Estilo para destacar o total */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc107; /* Cor de destaque */
  border-radius: 12px;
  }
`;

const Statfill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  background-color: #4caf50;
  text-align: center;
  color: #fff;
`;

const BarraStatus = ({ pokemon }) => {
    return (
        <BaseStatus>
            <h1>Base Stats</h1>
            <Statbar>
                <div>
                    <p>HP:</p>
                </div>
                <Statfill style={{ width: `${pokemon.stats[0].base_stat}%` }}>
                    {pokemon.stats[0].base_stat}
                </Statfill>
            </Statbar>
            <Statbar>
                <p>Attack</p>
                <Statfill style={{ width: `${pokemon.stats[1].base_stat}%` }}>
                    {pokemon.stats[1].base_stat}
                </Statfill>
            </Statbar>
            <Statbar>
                <div>
                    <p>Defense:</p>
                </div>
                <Statfill style={{ width: `${pokemon.stats[2].base_stat}%` }}>
                    {pokemon.stats[2].base_stat}
                </Statfill>
            </Statbar>
            <Statbar>
                <div>
                    <p>Sp.Attack:</p>
                </div>
                <Statfill style={{ width: `${pokemon.stats[3].base_stat}%` }}>
                    {pokemon.stats[3].base_stat}
                </Statfill>
            </Statbar>
            <Statbar>
                <div>
                    <p>Sp.Defense:</p>
                </div>
                <Statfill style={{ width: `${pokemon.stats[4].base_stat}%` }}>
                    {pokemon.stats[4].base_stat}
                </Statfill>
            </Statbar>
            <Statbar>
                <div>
                    <p>Speed:</p>
                </div>
                <Statfill style={{ width: `${pokemon.stats[5].base_stat}%` }}>
                    {pokemon.stats[5].base_stat}
                </Statfill>
            </Statbar>
            <Statbar className="total-highlight"> {/* Adicione a classe "total-highlight" para destacar o total */}
                <p>
                    Total: {pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0)}
                </p>
            </Statbar>
        </BaseStatus>
    );
};

export default BarraStatus;
