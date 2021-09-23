import {
  NotFoundHeading,
  NotFoundHomeLink,
  NotFoundWrapper,
} from "./NotFoundElements";

const NotFound = () => {
  return (
    <>
      <NotFoundWrapper>
        <NotFoundHeading>404 This page could not be found</NotFoundHeading>
        <NotFoundHomeLink to="/">Visit Homepage</NotFoundHomeLink>
      </NotFoundWrapper>
    </>
  );
};

export default NotFound;
