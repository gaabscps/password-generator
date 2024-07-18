import { FaCheck, FaCopy, FaSpinner } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { slideInFromTop } from "../../utils/slideInFromTop";
import { useState } from "react";

const InputContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
  width: 50%;
  border-radius: 8px;
  background-color: #f4f4f4;
  animation: ${slideInFromTop(-30, 0)} 0.5s ease-in-out;
`;

const InputText = styled.input`
  border: none;
  width: 100%;
  align-self: center;
  padding: 1rem 0.5rem 1rem 1rem;
  background-color: #f4f4f4;
  border-radius: 6px;
  cursor: not-allowed;
  &:focus {
    outline: none;
  }
`;

const ButtonGenerate = styled.button`
  background-color: #2f5aa8;
  color: #fff;
  border: none;
  border-radius: 0 6px 6px 0;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 100%;
  align-self: end;
  &:hover {
    background-color: #2a5197;
  }
  &:active {
    background-color: #436ab0;
  }
`;

const ButtonCopy = styled.button`
  background-color: #f4f4f4;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 100%;
  align-self: center;
  padding: 0.5rem;
  border-radius: 6px;
  border: solid 1px transparent;
  &:hover {
    color: #2a5197;
  }
  &:active {
    background-color: #e9e9e9;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinningFaSpinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
  color: #000;
`;

interface InputProps {
  value: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ value, placeholder }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyValue = () => {
    console.log("copy-password");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
      setCopySuccess(true);
    }, 300);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <InputContainer>
      <InputText
        disabled
        placeholder={placeholder}
        value={value}
        onChange={() => { }}
      />
      <ButtonCopy onClick={() => handleCopyValue()}>
        {isCopied ? (
          <SpinningFaSpinner />
        ) : copySuccess ? (
          <FaCheck />
        ) : (
          <FaCopy />
        )}
      </ButtonCopy>
      <ButtonGenerate onClick={() => console.log("generate-password")}>
        Generate
      </ButtonGenerate>
    </InputContainer>
  );
};
