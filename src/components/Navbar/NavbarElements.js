import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  position: relative;
  width: 100%;
  transition: background-color var(--transition);
  background: ${(props) => (props.$isOpen ? "var(--color-black)" : "")};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0;
    background: var(--color-dark-grey);
  }
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.2rem 3.5rem;
  transition: padding var(--transition);

  @media screen and (max-width: 1030px) {
    padding: 3.5rem;
    flex-direction: column;
  }

  @media screen and (max-width: 830px) {
    flex-direction: row;
    padding: 1.2rem 2.5rem;
  }
`;

export const NavbarSiteLinkR = styled(Link)`
  text-decoration: none;
`;

export const NavbarLogo = styled.span`
  font-family: var(--ff-oswald);
  text-transform: uppercase;
  font-size: 2.8rem;
  font-weight: 400;
  color: var(--color-white);
  display: block;

  @media screen and (max-width: 1030px) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 830px) {
    margin-bottom: 0;
    font-size: 2.4rem;
  }
`;

export const NavbarMenuBtn = styled.button`
  background: none;
  border: none;
  width: 4rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 830px) {
    transform: translateX(10px);
    display: flex;
  }
`;

export const NavbarNavItems = styled.ul`
  display: flex;
  list-style: none;
  transform: translateX(20px);
  transition: var(--transition);

  @media screen and (max-width: 1030px) {
    transform: translateX(0);
  }

  @media screen and (max-width: 830px) {
    position: absolute;
    transform: ${(props) =>
      props.$isOpen ? `translateX(0)` : "translateX(-100%)"};
    left: 0;
    top: 59px;
    flex-direction: column;
    background-color: var(--color-black);
    width: 100%;
    min-height: calc(100vh - 59px);
    z-index: 1;
  }
`;

export const NavbarNavItem = styled.li`
  margin: 2rem 1rem;

  @media screen and (max-width: 830px) {
    margin: 1rem 2.5rem;
  }
`;

export const NavbarNavLinkR = styled(NavLink)`
  padding: 1.3rem 1rem 1rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-light-grey);
  transition: color var(--transition);
  text-decoration: none;
  font-weight: 700;
  position: relative;

  &:hover {
    color: var(--color-white);
  }

  &.mercury.active {
    color: var(--color-mercury);
  }
  &.mercury.active {
    color: var(--color-mercury);
  }
  &.venus.active {
    color: var(--color-venus);
  }
  &.earth.active {
    color: var(--color-earth);
  }
  &.mars.active {
    color: var(--color-mars);
  }
  &.jupiter.active {
    color: var(--color-jupiter);
  }
  &.saturn.active {
    color: var(--color-saturn);
  }
  &.uranus.active {
    color: var(--color-uranus);
  }
  &.neptune.active {
    color: var(--color-neptune);
  }

  @media screen and (max-width: 830px) {
    font-size: 1.4rem;
    padding-left: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &::before {
      content: "";
      position: absolute;
      top: 10px;
      left: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }

    &.mercury::before {
      background-color: var(--color-mercury);
    }
    &.venus::before {
      background-color: var(--color-venus);
    }
    &.earth::before {
      background-color: var(--color-earth);
    }
    &.mars::before {
      background-color: var(--color-mars);
    }
    &.jupiter::before {
      background-color: var(--color-jupiter);
    }
    &.saturn::before {
      background-color: var(--color-saturn);
    }
    &.uranus::before {
      background-color: var(--color-uranus);
    }
    &.neptune::before {
      background-color: var(--color-neptune);
    }
  }
`;

export const NavbarChevronWrapper = styled.div`
  display: none;

  @media screen and (max-width: 830px) {
    display: block;
  }
`;
