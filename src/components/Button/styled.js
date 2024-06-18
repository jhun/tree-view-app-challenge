import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary-color);
  font-size: 1rem;
  font-family: var(--second-font);
  font-weight: var(--font-semi-bold);
  color: var(--primary-color);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0.5rem 0.75rem;
  margin: 0px 0px 0px 15px;

  &.selected {
    background-color: var(--tertiary-color);
    color: var(--title-color);
    border: none;
  }

  &:hover {
    background-color: var(--tertiary-color);
    color: var(--title-color);
    border: none;
  }
`;

export const ButtonIcon = styled.img`
  object-fit: cover;
  width: 25px;
  box-sizing: border-box;
  padding: 5px 5px 5px 0px;
`;
