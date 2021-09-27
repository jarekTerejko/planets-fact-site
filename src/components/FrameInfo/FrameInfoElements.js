import styled from "styled-components";

export const FrameInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 5rem;

  @media screen and (max-width: 1030px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media screen and (max-width: 800px) {
    padding: 0;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FrameInfoCol = styled.div`
  border: solid 1px var(--color-dark-grey);
  padding: 2.4rem;

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FrameInfoTitle = styled.p`
  color: var(--color-light-grey);
  text-transform: uppercase;
  margin-bottom: 0.6rem;

  @media screen and (max-width: 800px) {
    display: ${(props) => (props.tabs ? "none" : "")};
  }
`;

export const FrameInfoValue = styled.h3`
  font-size: 3.6rem;
  font-family: var(--ff-oswald);
  font-weight: 400;
  text-transform: uppercase;

  @media screen and (max-width: 1130px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 930px) {
    font-size: 2rem;
  }
`;
