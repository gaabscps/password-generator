import { FaDice, FaLock, FaRandom } from "react-icons/fa";
import styled from "styled-components";
import { Card } from "../Card";
import { Feature } from "./type";
import { slideInFromTop } from "../../utils/slideInFromTop";

const SectionFeatureContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  padding: 32px;
  animation: ${slideInFromTop(-10, 0)} 0.5s ease-in-out;
  @media (max-width: 830px) {
    margin-top: 0px;   
  }
`;

const Title = styled.h3`
  margin-bottom: 48px;
  color: #f4f4f4;
  text-align: center;
  font-size: 1.8rem;
  @media (max-width: 830px) {
    font-size: 1.5rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 830px) {
  max-width: 100%;
  }
`;

const features: Feature[] = [
  {
    title: "Generate Random Password",
    description: "Generate a random password with a click",
    icon: <FaRandom />,
  },
  {
    title: "Customizable",
    description: "Customize your password with your preferences",
    icon: <FaDice />,
  },
  {
    title: "Secure",
    description: "Passwords are generated randomly and are not stored",
    icon: <FaLock />,
  },
];

export const SectionFeature: React.FC = () => {
  return (
    <SectionFeatureContainer>
      <Title>Why use Password Generator?</Title>
      <CardContainer>
        {features.map((feature: Feature) => (
          <Card
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </CardContainer>
    </SectionFeatureContainer>
  );
};
