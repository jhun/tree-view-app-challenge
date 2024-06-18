import styled from "styled-components";

export const TreeHeaderContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 10%;
  justify-content: space-between;
`;

export const Breadcrumb = styled.div`
  display: flex;
  height: 100%;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: var(--small-font-size);
  color: var(--primary-color);
  white-space: pre-wrap;
`;

export const ButtonFilters = styled.div`
  display: flex;
  height: 100%;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: var(--small-font-size);
  color: var(--primary-color);
  white-space: pre-wrap;
`;
