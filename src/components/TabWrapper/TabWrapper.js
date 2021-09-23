import styled from "styled-components";
import { ImageEl } from "../Image/ImageElement";

export const TabWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 14rem;
  padding-bottom: 9rem;
`;

export const TabPlanetImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/3;
  min-height: 47rem;
  min-height: 52.4rem;
  position: relative;
`;

export const ImageSurface = styled(ImageEl)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 15rem;
`;

export const TabPlanetInfoWrapper = styled.div`
  display: grid;
  grid-column: 3/4;
  margin-left: 2rem;
  align-content: space-between;
`;

export const TabTextWrapper = styled.div``;
