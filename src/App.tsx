import { Header } from "./componentes/Header";
import styled from "styled-components";
import { TestSection } from "./componentes/SectionTest";
import { SectionFeature } from "./componentes/SectionFeature";

const AppContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #282c34;
  background-image: linear-gradient(120deg, #282c34 45%, #353c4b);
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
