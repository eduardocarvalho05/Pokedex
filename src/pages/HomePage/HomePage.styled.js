import styled from "styled-components";


export const PokemonsContainer = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Pelo menos 100% da altura da viewport */
    width: 100%;
    background-color: rgba(94, 94, 94, 1);
    padding: 80px;


  @media only screen and (min-width: 480px) and (max-width: 768px){
     
  }

  @media only screen and (max-width: 480px){
  
  }
`;

export const Title = styled.h1`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 48px;
  display: flex;
  justify-content: flex-start;

  @media only screen and (min-width: 480px) and (max-width: 768px){
  display: flex;
  justify-content: flex-start;
  font-size: 38px;
  }

  @media only screen and (max-width: 480px){
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  }
`
export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
`