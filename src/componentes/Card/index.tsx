import styled from "styled-components";
import { CardContainerProps, CardProps } from "./type";
import useMediaQuery from "@custom-react-hooks/use-media-query";

const CardContainer = styled.div`
  padding: 32px 16px;
  background-color: #f4f4f4;
  width: 200px;
  border-radius: 8px;
  display: grid;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
  @media (max-width: 830px) {
    width: 300px;
  }
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
`;

const CardImage = styled.div`
  color: #21618c ;
  font-size: 2.5rem;
`;

const CardTitle = styled.h2`
  color: #2c3e50  ;
  font-size: 1.4rem;
  text-wrap: wrap;
  @media (max-width: 830px) {
  padding: 0 8px;
  }
`;

const CardDescription = styled.p`
  color: #1f618d ;
  font-weight: 300;
  align-self: end;
`;

export const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  const isMobile = useMediaQuery("(max-width: 830px)");
  return (
    <CardContainer>
      <CardImage>{icon}</CardImage>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};
