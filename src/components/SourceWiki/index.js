import {
  SourceWikiAncor,
  SourceWikiTitle,
  SourceWikiWrapper,
} from "./SourceWikiElements";
import { ImageEl } from "../Image/ImageElement";

const SourceWiki = ({ tabs, tabIndex, iconSource }) => {
  return (
    <>
      <SourceWikiWrapper>
        <SourceWikiTitle>Source :</SourceWikiTitle>
        <SourceWikiAncor href={tabs[tabIndex].source} target="_blank">
          Wikipedia
          <ImageEl src={iconSource} style={{ marginLeft: ".8rem" }} />
        </SourceWikiAncor>
      </SourceWikiWrapper>
    </>
  );
};

export default SourceWiki;
