import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;

  @media screen and (min-width: 1150px) {
    height: calc(
      100vh -
        (
          var(--header-height) + var(--header-paddingY) + var(--header-paddingY) +
            1rem
        )
    );
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 1150px) {
    width: 90%;
    height: auto;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
  }
`;
