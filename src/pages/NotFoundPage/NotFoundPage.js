import Header from "../../components/Header/Header";
import styled from "styled-components"

function NotFoundPage(props) {
  return (
    <div>
      <Header />
      <H1>Ops! Essa página foi levada pela Equipe Rocket!</H1>
    </div>
  );
}

export default NotFoundPage;

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`