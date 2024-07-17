import { useEffect } from "react";
import { Option } from "./type";
import styled from "styled-components";

interface DropdownProps {
  isOpen: boolean;
  dropdownOptions: Option[];
  icon: JSX.Element | string;
  setIsOpen: (value: boolean) => void;
}

const UserDropdownController = styled.div`
  position: relative;
`;

const DropdownContainer = styled.div`
  background-color: #f0f0f0;
  border: solid 1px #4752668e;
  border-radius: 8px;
  top: 40px;
  right: 0px;
  position: absolute;
  width: 180px;
  height: fit-content;
`;

const DropdownListContainer = styled.div`
  height: 100%;
`;

const DropdownListItem = styled.li`
  border-radius: 8px;
  cursor: pointer;
  padding: 16px;
  &:hover {
    background-color: #e4e4e4;
  }
  &:active {
    background-color: #d8d8d8;
  }
`;

const DropdownIconItem = styled.li`
  color: #282c34;
  cursor: pointer;
  height: 100%;
  &:hover {
    color: #2f5aa8;
  }
  &:active {
    color: #3c72d6;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  dropdownOptions,
  isOpen,
  icon,
  setIsOpen,
}) => {
  // This useEffect is responsible for closing the dropdown when the user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Check if the target element is an instance of HTMLElement
      if (event.target instanceof HTMLElement) {
        // Check if the target element is not a child of the dropdown container
        if (!event.target.closest(".dropdown-container")) {
          setIsOpen(false);
        }
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <UserDropdownController>
      {isOpen && (
        <DropdownContainer>
          <ul>
            {dropdownOptions.map((option: Option) => (
              <DropdownListItem
                onClick={() => {
                  console.log(option.link);
                }}
                id={`item-list-${option.title}`}
                key={`item-list-${option.title}`}
              >
                {option.title}
              </DropdownListItem>
            ))}
          </ul>
        </DropdownContainer>
      )}
      <DropdownListContainer onClick={() => setIsOpen(!isOpen)}>
        <ul>
          <DropdownIconItem>{icon}</DropdownIconItem>
        </ul>
      </DropdownListContainer>
    </UserDropdownController>
  );
};
