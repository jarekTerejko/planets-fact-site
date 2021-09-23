import styled from "styled-components";

export const SunLinkLinkWrapper = styled.div`
  position: relative;

  position: relative;
  &::before {
    content: attr(data-text);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100% + 12px);
    width: 200%;
    text-align: center;
    font-size: 1.2rem;
    background: var(--color-white);
    padding: 1rem;
    border-radius: 0.2rem;
    color: var(--color-black);
    transition: 0.3s opacity;
    opacity: 0;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100% - 8px);
    border: 10px solid;
    width: 10px;
    height: 10px;
    border-color: transparent transparent var(--color-white) transparent;
    transition: 0.3s opacity;
    opacity: 0;
    pointer-events: none;
  }

  &:hover:before,
  &:hover:after {
    opacity: 1;
  }
`;

export const SunLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 98px);
`;
