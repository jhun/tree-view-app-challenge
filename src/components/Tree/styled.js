import styled from "styled-components";

export const TreeContainer = styled.div`
  width: 40%;
  height: 90%;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 3px;
`;

export const TreeListSearch = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #cccccc;
  border-left: none;
  border-right: none;
`;

export const TreeListContainer = styled.ul`
  width: 100%;
  height: calc(100% - 50px);
  overflow-x: auto;
  overflow-y: auto;
  padding: 10px 20px;
  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export const TreeInternList = styled.ul`
  padding-left: 20px;
`;

export const TreeItemAccordion = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  color: black;
`;
