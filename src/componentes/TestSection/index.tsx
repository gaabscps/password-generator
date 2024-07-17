import styled from "styled-components";
import { slideInFromTop } from "../../utils/slideInFromTop";
import { useState } from "react";
import { Input } from "../Input";

interface TestSectionProps {
  a?: string;
}

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1024px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.3rem;
  letter-spacing: 2px;
  animation: ${slideInFromTop(-30, 0)} 0.5s ease-in-out;
`;

export const TestSection: React.FC<TestSectionProps> = () => {
  const [password] = useState("");

  return (
    <SectionContainer>
      <Title>Test a random password generated</Title>
      <Input placeholder="Generate a random password" value={password} />
    </SectionContainer>
  );
};
