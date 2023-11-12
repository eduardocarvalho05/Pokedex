import styled from "styled-components";

export const PokedexContainer = styled.main`
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

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
`

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

export const ExcluirOverlay = styled.div` 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1); /* Ajuste a transparência desejada */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Certifique-se de que está na frente de outros elementos */
`