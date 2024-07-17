import styled from "styled-components";
import { Option } from "../type";

interface HeaderListProps {
  options: Option[];
}

const HeaderListContainer = styled.ul`
  height: 100%;
  display: flex;
  gap: 4rem;
  height: 100%;
`;

const HeaderListItem = styled.li`
  font-size: 1.3rem;
  cursor: pointer;
  text-align: center;
  height: 100%;
  font-weight: 600;
  text-wrap: nowrap;
  color: #282c34;
  &:hover {
    color: #2f5aa8;
  }
  &:active {
    color: #3c72d6;
  }
`;

export const HeaderList: React.FC<HeaderListProps> = ({ options }) => {
  return (
    <HeaderListContainer>
      {options.map((option: Option) => (
        <HeaderListItem
          onClick={() => {}}
          id={`item-list-${option.title}`}
          key={`item-list-${option.title}`}
          className="header-list-item"
        >
          {option.title}
        </HeaderListItem>
      ))}
    </HeaderListContainer>
  );
};
