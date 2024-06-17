import styled from "styled-components";

export const CardComponent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 15px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const CardContainer = styled.div`
  width: 100%;
  padding: 2px 16px;
`;
export const CardImage = styled.img`
  width: 50%;
  border-radius: 5px 5px 0 0;
`;
export const CardTitle = styled.h4`
  color: var(--secondary-color);
`;
export const CardDescription = styled.p`
  color: var(--primary-color);
`;
