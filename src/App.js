import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Header from "./components/Header";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

function App() {
  return (
    <Container>
      <Header />
      <GlobalStyles />
    </Container>
  );
}

export default App;
