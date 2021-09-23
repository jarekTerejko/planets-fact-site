import styled from "styled-components";

export const TabBtnWrapper = styled.div``;

export const TabBtn = styled.button`
  padding: 1.6rem 2rem 1rem 2rem;
  border: solid 1px var(--color-dark-grey);
  background: none;
  color: var(--color-white);
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 3px;
  font-weight: 700;
  display: block;
  width: 100%;
  text-align: left;
  display: flex;
  margin-bottom: 1.4rem;
  cursor: pointer;
  transition: var(--transition);

  &:last-of-type {
    margin-bottom: 0;
  }

  &.mercury.active {
    background-color: var(--color-mercury);
    border-color: var(--color-mercury);
  }
  &.venus.active {
    background-color: var(--color-venus);
    border-color: var(--color-venus);
  }
  &.earth.active {
    background-color: var(--color-earth);
    border-color: var(--color-earth);
  }
  &.mars.active {
    background-color: var(--color-mars);
    border-color: var(--color-mars);
  }
  &.jupiter.active {
    background-color: var(--color-jupiter);
    border-color: var(--color-jupiter);
  }
  &.saturn.active {
    background-color: var(--color-saturn);
    border-color: var(--color-saturn);
  }
  &.uranus.active {
    background-color: var(--color-uranus);
    border-color: var(--color-uranus);
  }
  &.neptune.active {
    background-color: var(--color-neptune);
    border-color: var(--color-neptune);
  }
`;

export const TabBtnTextMobile = styled.span`
  display: none;
  @media screen and (max-width: 375px) {
    display: block;

    margin-left: 2rem;
  }
`;
export const TabBtnTextDesktop = styled.span`
  color: var(--color-white);
  margin-left: 2rem;
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
