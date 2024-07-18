import { Header } from "./componentes/Header";
import styled from "styled-components";
import { TestSection } from "./componentes/SectionTest";
import { SectionFeature } from "./componentes/SectionFeature";

const AppContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(180deg,
  #2c81b7
  20%, 
  #21618c 
  );
  `;

const AppContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <AppContent>
        <TestSection />
        <SectionFeature />
      </AppContent>
    </AppContainer>
  );
}

export default App;
