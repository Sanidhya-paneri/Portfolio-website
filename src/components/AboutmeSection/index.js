import React from "react";
import { ImPointRight } from "react-icons/im";
import {
  AboutmeContainer,
  AboutmeWrapper,
  AboutmeRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  TextWrapper,
  AboutmeWordwrap,
  Introduction
} from "./AboutmeElements";
import aboutme1 from "../../Images/Aboutme1.svg";
const Aboutme = () => {
  return (
    <AboutmeContainer id="about">
      <AboutmeWrapper className="home-header">
        <AboutmeRow
          imgStart={false}
          style={{ justifyContent: "center", padding: "10px" }}
        >
          <Column1>
          <TextWrapper>
            <AboutmeWordwrap>
              About <strong className="color-text">Me</strong>
            </AboutmeWordwrap>
            <Introduction>
            <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="color-text">Sanidhya Paneri </span>
            from <span className="color-text"> Udaipur, India. </span>
             I am a pursuing MCA in SPPU
            Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!</p>
            <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

            </Introduction>



            </TextWrapper>
          </Column1>

          <Column2 >
            <ImgWrap>
            <Img src={aboutme1} alt="Developer image"/>
            </ImgWrap>
          </Column2>
        </AboutmeRow>
      </AboutmeWrapper>
    </AboutmeContainer>
  );
};

export default Aboutme;
