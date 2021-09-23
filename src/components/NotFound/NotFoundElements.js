import styled from "styled-components";
import { NavbarSiteLinkR } from "../Navbar/NavbarElements";

export const NotFoundWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NotFoundHeading = styled.h1`
  margin-bottom: 4rem;
  font-size: 4rem;
  max-width: 50rem;
  text-align: center;
`;

export const NotFoundHomeLink = styled(NavbarSiteLinkR)`
  color: var(--color-white);
  font-size: 3rem;
  font-family: var(--ff-oswald);
  border: 2px solid var(--color-white);
  padding: 1rem 2rem;
  transition: var(--transition);

  &:hover {
    color: var(--color-dark-grey);
    background-color: var(--color-white);
  }
`;
