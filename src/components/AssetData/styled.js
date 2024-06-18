import styled from "styled-components";

export const AssetDataContainer = styled.div`
  width: 59.5%;
  height: 90%;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 20px;
  color: black;
  font-size: var(--medium-font-size);
  font-family: var(--body-font);

  @media screen and (max-width: 1150px) {
    width: 100%;
    height: auto;
    min-height: 50px;
    margin-top: 10px;
  }
`;
