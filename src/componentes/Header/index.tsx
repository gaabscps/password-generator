import logo from "../../assets/image/logo-clean.png";
import { Option } from "./type";
import { FiMenu, FiUser } from "react-icons/fi";
import { useState } from "react";
import { Dropdown } from "../Dropdown/intex";
import { HeaderList } from "./HeaderList";
import styled from "styled-components";
import useMediaQuery from "@custom-react-hooks/use-media-query";
import { FaHamburger } from "react-icons/fa";


const HeaderContainer = styled.header`
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  height: fit-content;
  padding: 24px;
  user-select: none;
  @media (max-width: 830px) {
    gap: 0px;
    justify-content: space-between;
  }
  .header-logo-container {
    width: 100px;
    background-color: #f4f4f4;
    height: 100%;
  }

  .header-logo {
    width: 100px;
    object-fit: contain;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(1.1);
    }
  }
`;

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 830px)");

  const options: Option[] = isMobile ? [] : [
    {
      title: "Docs",
      link: "/docs",
    },
    {
      title: "How to Use",
      link: "/how-to-use",
    },
    {
      title: "Personalize",
      link: "/personalize",
    },
  ];

  const dropdownOptions: Option[] = [
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "Register",
      link: "/register",
    },
    {
      title: "About us",
      link: "/about-us",
    },
    ...(isMobile ? [
      {
        title: "Docs",
        link: "/docs",
      },
      {
        title: "How to Use",
        link: "/how-to-use",
      },
      {
        title: "Personalize",
        link: "/personalize",
      },
    ] : []),
  ];

  return (
    <>
      <HeaderContainer>
        <div onClick={() => { }} className="header-logo-container">
          <img className="header-logo" src={logo} alt="logo" />
        </div>
        <HeaderList options={options} />
        <Dropdown
          icon={isMobile ? <FiMenu size="2rem" /> : <FiUser size="2rem" />}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dropdownOptions={dropdownOptions}
        />
      </HeaderContainer>
    </>
  );
};
