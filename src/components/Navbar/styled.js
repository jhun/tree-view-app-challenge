import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  position: relative;
  width: 100%;
  padding: var(--header-paddingY) var(--header-paddingX);
  background-color: var(--secondary-color);
  z-index: var(--z-fixed);

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: var(--header-height);

  @media screen and (min-width: 1150px) {
    height: calc(var(--header-height) + 1rem);
  }
`;

export const NavMenu = styled.div`
  @media screen and (max-width: 1150px) {
    position: fixed;
    top: 0;
    right: -100%;
    background-color: hsla(0, 0%, 6%, 0.2);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    width: 80%;
    height: 100%;
    padding: 6rem 3rem 0;
    transition: right 0.4s;
  }

  &.show-menu {
    right: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  row-gap: 2.5rem;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1150px) {
    flex-direction: row;
    column-gap: 2.5rem;
  }
`;

export const NavItem = styled.li``;

export const NavLinkLogo = styled(NavLink)`
  color: var(--primary-color);
  transition: color 0.4s;
  font-size: var(--h2-font-size);
  font-family: var(--second-font);
`;

export const NavLinks = styled(NavLink)`
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
  transition: color 0.4s;

  &:hover {
    color: var(--primary-color);
  }

  &.nav__cta {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: var(--title-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 0.25rem 1rem;

    &:hover {
      background-color: var(--tertiary-color);
    }
  }
`;

export const NavIcon = styled.img`
  object-fit: cover;
  width: 25px;
  box-sizing: border-box;
  padding: 5px 5px 5px 0px;
`;

export const NavClose = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: var(--title-color);
  cursor: pointer;
  @media screen and (min-width: 1150px) {
    display: none;
  }
`;

export const NavToogle = styled.div`
  font-size: 1.5rem;
  color: var(--title-color);
  cursor: pointer;
  @media screen and (min-width: 1150px) {
    display: none;
  }
`;
