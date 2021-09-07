import React from "react";
import {
  NavbarWrapper,
  NavbarInnerWrapper,
  NavbarSiteLinkR,
  NavbarMenuBtn,
  NavbarNavItems,
  NavbarNavItem,
  NavbarNavLinkR,
  NavbarLogo,
  NavbarChevronWrapper,
} from "./NavbarElements";
import Bars from "../../images/menu.svg";
import X from "../../images/close.svg";
import Chevron from "../../images/icon-chevron.svg";
import { ImageEl } from "../Image/ImageElement";

const Navbar = ({ isOpen, handleMenu }) => {

  const closeMenu = () => {
    if (isOpen) {
      handleMenu();
    } else {
      return;
    }
  };

  const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  return (
    <NavbarWrapper $isOpen={isOpen}>
      <NavbarInnerWrapper>
        <NavbarSiteLinkR to="/" $isOpen={isOpen} onClick={closeMenu}>
          <NavbarLogo>The Planets</NavbarLogo>
        </NavbarSiteLinkR>
        <NavbarMenuBtn onClick={handleMenu}>
          <ImageEl
            src={isOpen ? `${X}` : `${Bars}`}
            alt={isOpen ? "Close Menu" : "Open Menu"}
          />
        </NavbarMenuBtn>
        <NavbarNavItems $isOpen={isOpen}>
          {planets.map((planet, i) => {
            return (
              <NavbarNavItem key={i}>
                <NavbarNavLinkR
                  to={`/${planet}`}
                  $isOpen={isOpen}
                  onClick={closeMenu}
                  className={`${planet}`}
                  // exact={true}
                >
                  {planet}
                  <NavbarChevronWrapper>
                    <ImageEl src={Chevron} alt="" />
                  </NavbarChevronWrapper>
                </NavbarNavLinkR>
              </NavbarNavItem>
            );
          })}
        </NavbarNavItems>
      </NavbarInnerWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
