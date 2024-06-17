import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import {
  Header,
  NavClose,
  NavContainer,
  NavIcon,
  NavItem,
  NavLinkLogo,
  NavLinks,
  NavList,
  NavMenu,
  NavToogle,
} from "./styled";
import logotractian from "../../assets/images/LOGO TRACTIAN.svg";
import unitIcon from "../../assets/images/unit-icon.svg";
import { useParams } from "react-router-dom";
import { useCompanies } from "../../contexts/companies";

const Navbar = () => {
  const params = useParams();
  const { companies, setCompanies } = useCompanies();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Header>
      <NavContainer>
        <NavLinkLogo to="/">
          <img src={logotractian} alt="Logo Tractian" />
        </NavLinkLogo>

        <NavMenu className={`${showMenu ? "show-menu" : ""}`}>
          <NavList>
            {params.companyId ? (
              companies.map((company, index) => (
                <NavItem key={index}>
                  <NavLinks
                    to={`/companies/${company.id}`}
                    className={`nav__cta ${company.selected ? "selected" : ""}`}
                  >
                    <NavIcon src={unitIcon} alt="Apex Unit" />
                    {company.name}
                  </NavLinks>
                </NavItem>
              ))
            ) : (
              <></>
            )}
          </NavList>
          <NavClose onClick={toggleMenu}>
            <IoClose />
          </NavClose>
        </NavMenu>

        <NavToogle onClick={toggleMenu}>
          <IoMenu />
        </NavToogle>
      </NavContainer>
    </Header>
  );
};

export default Navbar;
