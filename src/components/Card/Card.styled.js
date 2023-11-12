import styled from "styled-components";
import backgroundImage from "../../img/backgroundImage.svg"


export const PokemonCardWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  /* justify-content: center;
  padding: 2px; */
  width: 440px;
  height: 210px;
  border-radius: 12px;
  background-color: white;
  margin-top: 60px;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  /* Ajuste a posição do background */
  background-position: right -40px top -60px; /* Posição à direita e no topo */


  @media only screen and (min-width: 480px) and (max-width: 768px){
    width: 440px;
    height: 210px;    
  }

  @media only screen and (max-width: 480px){
    width: 310px;
    height: 210px;
  }
`;


export const InfoPokemons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  gap: 2px;
`;

export const InfoID = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`
export const InfoName = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`
export const InfoType = styled.div`
  display: flex; // Usar flexbox para alinhar as imagens
  gap: 4px; // Espaçamento entre as imagens
  padding: 8px 0;
`;

export const PokemonImage = styled.img`
   width: 230px;
   height: 230px;
   margin-top: -240px;
   margin-left: 240px;

  @media only screen and (min-width: 480px) and (max-width: 768px){  
  width: 230px;
  height: 230px;
  margin-top: -240px;
  margin-left: 240px;
  }

  @media only screen and (max-width: 480px){
  width: 130px;
  height: 130px;
  margin-top: -180px;
  margin-left: 190px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 12px 0px;
  gap: 100px;

  .Detalhes {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-decoration: underline;
    cursor: pointer;

    appearance: none;
    background: none;
    border: none;
    color: inherit;
    color: white;
  } 

  .Capturar {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    cursor: pointer;

    letter-spacing: 0em;
    width: 146px; 
    height: 38px; 
    padding: 4px 10px; 
    border-radius: 8px;
    border: none;
  }

  .Excluir {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    cursor: pointer;
    color: white;
    background-color: #FF6262;

    letter-spacing: 0em;
    width: 146px; 
    height: 38px; 
    padding: 4px 10px; 
    border-radius: 8px;
    border: none;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px){
  margin: 18px 10px;
  gap: 100px;
  }

  @media only screen and (max-width: 480px){
  margin: 58px 22px;
  gap: 100px;
  }
`;

/* Adicione este código ao seu arquivo CSS ou estilização do componente Card.styled */
export const CapturarOverlay = styled.div` 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0); /* Ajuste a transparência desejada */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Certifique-se de que está na frente de outros elementos */
`

