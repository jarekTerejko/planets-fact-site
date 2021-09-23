import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FrameInfo from "../../components/FrameInfo";
import useFetch from "../../useFetch";
import Loader from "../../components/Loader/index";
import { ImageEl } from "../../components/Image/ImageElement";
import { WrapperEl } from "../../components/Wrapper/WrapperElement";
import Tabs from "../../components/Tabs";
import {
  TabPlanetImgWrapper,
  TabWrapper,
  TabTextWrapper,
  TabPlanetInfoWrapper,
  ImageSurface,
} from "../../components/TabWrapper/TabWrapper";
import { Heading } from "../../components/Heading/Heading";
import { DescriptionText } from "../../components/Description/DescriptionText";
import IconSource from "../../images/icon-source.svg";
import SourceWiki from "../../components/SourceWiki";
import NotFound from "../../components/NotFound";

const Planet = () => {
  const { name } = useParams();
  const { data, isLoading } = useFetch("./data.json");
  let planet;
  let frameInfo;
  let tabs;
  const [planetName, setPlanetName] = useState(name);
  const [activeTabBtns, setActiveTabBtns] = useState([
    { active: true },
    { active: false },
    { active: false },
  ]);

  const toggleActiveTabBtn = (index) => {
    setActiveTabBtns(
      activeTabBtns.map((btn, i) => {
        if (i === index) {
          btn.active = true;
        } else {
          btn.active = false;
        }
        return btn;
      })
    );
  };

  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    setPlanetName(name);
    resetTabs();
    // return () => {
    //   cleanup
    // }
    // eslint-disable-next-line
  }, [name, planet]);

  const changeTab = (index) => {
    setTabIndex(index);
    toggleActiveTabBtn(index);
  };

  const resetTabs = () => {
    setTabIndex(0);
    toggleActiveTabBtn(0);
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? null : (
        <>
          {data.map((item, i) => {
            if (item.name.toLowerCase() === planetName) {
              planet = [
                item,
                (tabs = [
                  {
                    className: item.name.toLowerCase(),
                    textDesktop: "overview",
                    textMobile: "overview",
                    content: item.overview.content,
                    source: item.overview.source,
                    img: item.images.overview,
                  },
                  {
                    className: item.name.toLowerCase(),
                    textDesktop: "internal structure",
                    textMobile: "internal",
                    content: item.structure.content,
                    source: item.structure.source,
                    img: item.images.structure,
                  },
                  {
                    className: item.name.toLowerCase(),
                    textDesktop: "surface geology",
                    textMobile: "surface",
                    content: item.geology.content,
                    source: item.geology.source,
                    img: item.images.geology,
                  },
                ]),
                (frameInfo = [
                  { text: "rotation", value: item.rotation },
                  { text: "revolution", value: item.revolution },
                  { text: "radius", value: item.radius },
                  { text: "temperature", value: item.temperature },
                ]),
              ];
              return (
                <WrapperEl key={i}>
                  <TabWrapper>
                    {tabIndex === 2 ? (
                      <TabPlanetImgWrapper>
                        <ImageEl
                          src={tabs[0].img}
                          style={{ maxWidth: "450px" }}
                        />
                        <ImageSurface src={tabs[tabIndex].img} />
                      </TabPlanetImgWrapper>
                    ) : (
                      <TabPlanetImgWrapper>
                        <ImageEl
                          src={tabs[tabIndex].img}
                          style={{ maxWidth: "450px" }}
                        />
                      </TabPlanetImgWrapper>
                    )}
                    <TabPlanetInfoWrapper>
                      <TabTextWrapper>
                        <Heading>{planet[0].name}</Heading>
                        <DescriptionText>
                          {tabs[tabIndex].content}
                        </DescriptionText>
                        <SourceWiki
                          tabs={tabs}
                          tabIndex={tabIndex}
                          iconSource={IconSource}
                        />
                      </TabTextWrapper>
                      <Tabs
                        tabs={planet[1]}
                        activeTabBtns={activeTabBtns}
                        changeTab={changeTab}
                      />
                    </TabPlanetInfoWrapper>
                  </TabWrapper>
                  <FrameInfo frameInfo={frameInfo} />
                </WrapperEl>
              );
            } else {
              return null;
            }
          })}
        </>
      )}
      {!planet && !isLoading && <NotFound />}
    </>
  );
};

export default Planet;
