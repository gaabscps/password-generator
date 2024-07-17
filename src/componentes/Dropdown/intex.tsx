import { useEffect } from "react";
import "./styles.css";
import { Option } from "./type";

interface DropdownProps {
  isOpen: boolean;
  dropdownOptions: Option[];
  icon: JSX.Element | string;
  setIsOpen: (value: boolean) => void;
}

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
    <div className="user-dropdown-controller">
      {isOpen && (
        <div className="dropdown-container">
          <ul className="dropdown-list-group">
            {dropdownOptions.map((option: Option) => (
              <li
                onClick={() => {
                  console.log(option.link);
                }}
                id={`item-list-${option.title}`}
                key={`item-list-${option.title}`}
                className="dropdown-list-item"
              >
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-list-container header-user-group-container"
      >
        <ul className="dropdown-list-group">
          <li className="dropdown-icon-item">{icon}</li>
        </ul>
      </div>
    </div>
  );
};
