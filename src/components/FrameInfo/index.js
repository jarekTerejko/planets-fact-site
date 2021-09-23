import {
  FrameInfoCol,
  FrameInfoTitle,
  FrameInfoValue,
  FrameInfoWrapper,
} from "./FrameInfoElements";

const FrameInfo = ({ frameInfo }) => {
  return (
    <>
      <FrameInfoWrapper>
        {frameInfo.map((frame, i) => {
          return (
            <FrameInfoCol key={i}>
              <FrameInfoTitle>{frame.text}</FrameInfoTitle>
              <FrameInfoValue>{frame.value}</FrameInfoValue>
            </FrameInfoCol>
          );
        })}
      </FrameInfoWrapper>
    </>
  );
};

export default FrameInfo;
