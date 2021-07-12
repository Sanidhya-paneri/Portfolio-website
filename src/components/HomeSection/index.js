import React from "react";
import Type from "./Type";
import {
  HomeContainer,
  HomeBg,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Column2,
  Greetings,
  NameInfo,
  Img,
  ImgWrap,
} from "./HomeElements";
import logo from "../../Images/home-main.svg";

const HomeSection = () => {
  return (
    <HomeContainer id="home">
      <HomeBg >
        <InfoWrapper className="home-header">
          <InfoRow imgStart={false}>
            <Column1>
              <TextWrapper>
                <Greetings>Hi There!! <span className="wave">👋🏻</span> </Greetings>
                <NameInfo>
                  I'M <strong className="main-name">Sanidhya Paneri</strong>
                </NameInfo>
                <div style={{ padding: 5, textAlign: "left" }}>
                  <Type />
                </div>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={logo} alt="home pic" className="img-fluid" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </HomeBg>
    </HomeContainer>
  );
};

export default HomeSection;
