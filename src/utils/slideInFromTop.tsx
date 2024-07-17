import { keyframes } from "styled-components";

export const slideInFromTop = (
  initial: string | number,
  end: string | number
) => {
  const effect = keyframes`
 0% {
   transform: translateY(${initial}%);
   opacity: 0;
 }
 100% {
   transform: translateY(${end}%);
   opacity: 1;
 }
 `;

  return effect;
};
