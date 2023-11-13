import styled from "styled-components"
import backgroundImage from "../../img/backgroundImage.svg"

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    min-height: 90vh; /* Pelo menos 100% da altura da viewport */
    width: 100%;
    background-color: rgba(94, 94, 94, 1);
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    /* Ajuste a posição do background */
    background-position: center -340px; /* Posição à direita e no topo */
    background-size: cover;
`;

export const Title = styled.h1`
  margin-right: 40vw;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 48px; 
  padding: 40px;

  @media only screen and (min-width: 480px) and (max-width: 768px){
    font-size: 40px;
    }

  @media only screen and (max-width: 480px){
    font-size: 20px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 60vh;
    width: 70vw;
    border-radius: 38px;
    background-color: #729F92;
    padding: 20px;
    margin-bottom: 20px;
    gap: 40px;
    position: relative; /* Defina position: relative no container pai */

    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    /* Ajuste a posição do background */
    background-position: right; /* Posição à direita e no topo */
    background-size: contain; /* Isso fará com que a imagem de fundo cubra todo o card */
    
    @media only screen and (min-width: 1025px) and (max-width: 1366px){
    height: 70vh;
    width: 90vw;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 190vh;
    width: 94vw;
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 180vh;
    width: 94vw;
    }

    @media only screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 190vh;
    width: 94vw;
    }
;
`

export const DivPixel = styled.div`
  /* order: 1; */

  @media only screen and (min-width: 768px) and (max-width: 1024px){
    order: 3;
    }

  @media only screen and (min-width: 480px) and (max-width: 768px){
    order: 3;
    }

  @media only screen and (max-width: 480px){
      order: 3;
    }
`

export const ImgPixel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  border-radius: 8px;
  border: 2px;
  background-color: white;
  padding: 20px;
  margin: 20px;

  img {
    width: 220px;
    height: 220px;
  }
`

export const InfoPoke = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  gap: 4px;
  margin-bottom: 30px;

  .infoId {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    color: white;
  }

  .infoName {
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0em;
    color: white;
  }

  .infoType {
  display: flex; // Usar flexbox para alinhar as imagens
  gap: 8px; // Espaçamento entre as imagens
  }
`

export const Moves = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 260px;
  height: 300px;
  border-radius: 8px;
  background-color: white;
  padding: 14px;
  gap: 20px;
  overflow: scroll;
  overflow-x: hidden;
  order: 1;

  h2 {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  }

  .div-list {
  gap: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  flex-wrap: wrap;
  }

  .move-list {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  padding: 12px; 
  background-color: lightgray;
  border-radius: 10px;
  border: 2px dashed gray; /* Adiciona um pontilhado em volta da borda */
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px){
    order: 1;
    }

  @media only screen and (min-width: 480px) and (max-width: 768px){
    
    }

  @media only screen and (max-width: 480px){
    
    } 
`

export const ImgLateral = styled.img`
    width: 260px;
    height: 260px;
    position: absolute; /* Defina position: absolute para a imagem */
    top: -80px; /* Ajuste a posição superior conforme necessário */
    right: 80px; /* Ajuste a posição esquerda conforme necessário */

    @media only screen and (min-width: 1025px) and (max-width: 1366px){
    width: 260px;
    height: 260px;

    position: absolute; /* Defina position: absolute para a imagem */
    top: -160px; /* Ajuste a posição superior conforme necessário */
    right: 20px; /* Ajuste a posição esquerda conforme necessário */
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
    width: 260px;
    height: 260px;

    position: absolute; /* Defina position: absolute para a imagem */
    top: -140px; /* Ajuste a posição superior conforme necessário */
    right: -20px; /* Ajuste a posição esquerda conforme necessário */
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
    width: 220px;
    height: 220px;

    position: absolute; /* Defina position: absolute para a imagem */
    top: -140px; /* Ajuste a posição superior conforme necessário */
    right: -20px; /* Ajuste a posição esquerda conforme necessário */
    }

    @media only screen and (max-width: 480px){
    width: 160px;
    height: 160px;

    position: absolute; /* Defina position: absolute para a imagem */
    top: -100px; /* Ajuste a posição superior conforme necessário */
    right: -10px; /* Ajuste a posição esquerda conforme necessário */
    }
`;







