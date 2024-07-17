import logo from "../../assets/image/logo-clean.png";
import "./styles.css";
import { Option } from "./type";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { Dropdown } from "../Dropdown/intex";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options: Option[] = [
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
  ];

  return (
    <>
      <header className="header">
        <div onClick={() => {}} className="header-logo-container">
          <img className="header-logo" src={logo} alt="logo" />
        </div>
        <div className="header-list-container">
          <ul className="header-list-group">
            {options.map((option: Option) => (
              <li
                onClick={() => {}}
                id={`item-list-${option.title}`}
                key={`item-list-${option.title}`}
                className="header-list-item"
              >
                {option.title}
              </li>
            ))}
          </ul>
        </div>
        <Dropdown
          icon={<FiUser size="2rem" />}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dropdownOptions={dropdownOptions}
        />
      </header>
    </>
  );
};
