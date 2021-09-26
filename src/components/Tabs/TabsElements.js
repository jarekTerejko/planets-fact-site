import styled from "styled-components";

export const TabBtnWrapper = styled.div`
  align-self: end;
  margin-left: 2rem;

  @media screen and (max-width: 1030px) {
    margin-left: 0;
    grid-column: 2/3;
    align-self: center;
  }

  @media screen and (max-width: 650px) {
    grid-column: 1/3;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

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

    @media screen and (max-width: 650px) {
      background: none;

      &::before {
        background-color: var(--color-mercury);
      }
    }
  }

  &.venus.active {
    background-color: var(--color-venus);
    border-color: var(--color-venus);

    @media screen and (max-width: 650px) {
      background: none;

      &::before {
        background-color: var(--color-venus);
      }
    }
  }

  &.earth.active {
    background-color: var(--color-earth);
    border-color: var(--color-earth);

    @media screen and (max-width: 650px) {
      background: none;

      &::before {
        background-color: var(--color-earth);
      }
    }
  }

  &.mars.active {
    background-color: var(--color-mars);
    border-color: var(--color-mars);

    @media screen and (max-width: 650px) {
      background: none;

      &::before {
        background-color: var(--color-mars);
      }
    }
  }

  &.jupiter.active {
    background-color: var(--color-jupiter);
    border-color: var(--color-jupiter);

    @media screen and (max-width: 650px) {
      background: none;

      &::before {
        background-color: var(--color-jupiter);
      }
    }
  }

  &.saturn.active {
    background-color: var(--color-saturn);
    border-color: var(--color-saturn);

    @media screen and (max-width: 650px) {
      background: none;

      &::before {
        background-color: var(--color-saturn);
      }
    }
  }

  &.uranus.active {
    background-color: var(--color-uranus);
    border-color: var(--color-uranus);

    @media screen and (max-width: 650px) {
      background: none;

      &::before {
        background-color: var(--color-uranus);
      }
    }
  }

  &.neptune.active {
    background-color: var(--color-neptune);
    border-color: var(--color-neptune);

    @media screen and (max-width: 650px) {
      background: none;

      &::before {
        background-color: var(--color-neptune);
      }
    }
  }

  @media screen and (max-width: 650px) {
    margin-bottom: 0;
    display: initial;
    border: none;
    position: relative;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 1rem;
    color: var(--color-light-grey);

    &.active {
      color: var(--color-white);
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: calc(0 + 10%);
      left: 20%;
      height: 0.3rem;
      width: 60%;
    }
  }
`;

export const TabBtnTextMobile = styled.span`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
    margin-bottom: 0.6rem;
    text-align: center;
  }
`;

export const TabBtnTextDesktop = styled.span`
  color: var(--color-white);
  margin-left: 2rem;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    margin-bottom: 0.6rem;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
