import { FrameInfoTitle } from "../FrameInfo/FrameInfoElements";
import {
  TabBtn,
  TabBtnTextDesktop,
  TabBtnTextMobile,
  TabBtnWrapper,
} from "./TabsElements";

const Tabs = ({ tabs, changeTab, activeTabBtns }) => {
  return (
    <TabBtnWrapper>
      {tabs.map((tab, i) => {
        return (
          <TabBtn
            key={i}
            onClick={() => changeTab(i)}
            className={activeTabBtns[i].active ? `${tab.className} active` : ""}
          >
            <FrameInfoTitle tabs >{`0${i + 1}`}</FrameInfoTitle>
            <TabBtnTextDesktop>{tab.textDesktop}</TabBtnTextDesktop>
            <TabBtnTextMobile>{tab.textMobile}</TabBtnTextMobile>
          </TabBtn>
        );
      })}
    </TabBtnWrapper>
  );
};

export default Tabs;
