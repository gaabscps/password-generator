import styled from "styled-components";
import { CardProps } from "./type";

const CardContainer = styled.div`
  padding: 32px 16px;
  background-color: #f4f4f4;
  width: 200px;
  border-radius: 8px;
  border: 2px solid #303030;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  display: grid;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
`;

const CardImage = styled.div`
  color: #2f5aa8;
  font-size: 2.5rem;
`;

const CardTitle = styled.h2`
  color: #282c34;
  font-size: 1.4rem;
  text-wrap: wrap;
`;

const CardDescription = styled.p`
  color: #748ab6;
  font-weight: 300;
  align-self: end;
`;

export const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <CardContainer>
      <CardImage>{icon}</CardImage>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};
