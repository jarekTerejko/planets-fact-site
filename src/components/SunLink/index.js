import { NavbarSiteLinkR } from "../Navbar/NavbarElements";
import { ImageEl } from "../../components/Image/ImageElement";
import SunIcon from "../../images/sun.svg";
import { WrapperEl } from "../Wrapper/WrapperElement";
import { SunLinkLinkWrapper, SunLinkWrapper } from "./SunLinkElements";


const SunLink = ({data}) => {
    return (
      <WrapperEl>
        <SunLinkWrapper>
          <SunLinkLinkWrapper data-text="Click on sun to randomly choose a planet">
            <NavbarSiteLinkR
              to={`/${data[
                Math.floor(Math.random() * data.length)
              ].name.toLowerCase()}`}
            >
              <ImageEl src={SunIcon} />
            </NavbarSiteLinkR>
          </SunLinkLinkWrapper>
        </SunLinkWrapper>
      </WrapperEl>
    );
}
 
export default SunLink;