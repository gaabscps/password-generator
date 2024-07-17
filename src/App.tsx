import { Header } from "./componentes/Header";
import styled from "styled-components";
import { TestSection } from "./componentes/TestSection";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #282c34;
  background-image: linear-gradient(120deg, #282c34 45%, #353c4b);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <TestSection />
    </AppContainer>
  );
}

export default App;
