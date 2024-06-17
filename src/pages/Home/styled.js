import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(
    100vh -
      (var(--header-height) + var(--header-paddingY) + var(--header-paddingY))
  );

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
