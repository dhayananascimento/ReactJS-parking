import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
    </Container>
  );
}

export default App;
