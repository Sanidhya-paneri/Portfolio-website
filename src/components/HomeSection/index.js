import React from "react";
import Particle from "../Particle";
import { HomeContainer, HomeBg, InfoWrapper, InfoRow, Column1, TextWrapper, Column2, Greetings, NameInfo, Img, ImgWrap } from "./HomeElements";
import logo from '../../Images/home-main.svg';
const HomeSection = () => {
  return (
    <HomeContainer>
      <HomeBg>
        <Particle />
        <InfoWrapper>
          <InfoRow imgStart={false}>
            <Column1>
            <TextWrapper>
             <Greetings>Hi There!!</Greetings>
             <NameInfo>I'M <strong className="main-name">Sanidhya Paneri</strong></NameInfo>
             
             </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
            <Img src={logo} alt="home pic"/>
            </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>

      </HomeBg>
    </HomeContainer>
  );
};

export default HomeSection;
