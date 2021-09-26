import styled from "styled-components";
import { ImageEl } from "../Image/ImageElement";

export const TabWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 14rem;
  padding-bottom: 9rem;
  position: relative;

  @media screen and (max-width: 1030px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 3rem 9rem 3rem;
    margin-top: 10rem;
    row-gap: 60px;
    column-gap: 40px;
  }

  @media screen and (max-width: 800px) {
    padding: 0 0 9rem 0;
  }
`;

export const TabPlanetImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/3;
  min-height: 52.4rem;
  position: relative;
  grid-row: 1/3;

  @media screen and (max-width: 1030px) {
    grid-column: 1/3;
    grid-row: 1/2;
  }

  @media screen and (max-width: 650px) {
    grid-row: 2/3;
  }
`;

export const ImageStandard = styled(ImageEl)`
  max-width: 45rem;

  @media screen and (max-width: 490px) {
    max-width: 100%;
  }
`;

export const ImageSurface = styled(ImageEl)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 15rem;
`;

export const TabPlanetInfoWrapper = styled.div`
  margin-left: 2rem;

  @media screen and (max-width: 1030px) {
    grid-column: 1/2;
    grid-row: 2/3;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    margin-left: 0;
    max-width: 38rem;
  }

  @media screen and (max-width: 650px) {
    grid-row: 3/4;
    grid-column: 1/3;
    text-align: center;
    max-width: 100%;
  }
`;
