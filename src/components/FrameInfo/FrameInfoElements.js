import styled from "styled-components";

export const FrameInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

export const FrameInfoCol = styled.div`
  border: solid 1px var(--color-dark-grey);
  padding: 2.4rem;
`;

export const FrameInfoTitle = styled.p`
  color: var(--color-light-grey);
  text-transform: uppercase;
  margin-bottom: 0.6rem;
`;
export const FrameInfoValue = styled.h3`
  font-size: 4rem;
  font-family: var(--ff-oswald);
  font-weight: 400;
  text-transform: uppercase;
`;
