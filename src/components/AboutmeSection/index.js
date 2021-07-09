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
  Introduction,
  H1,
  SkillsetContainer,
  SkillsetWrapper,
  SkillCard
} from "./AboutmeElements";
import aboutme1 from "../../Images/Aboutme1.svg";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiDjango
} from "react-icons/di";
import { SiFirebase } from "react-icons/si";


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
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Interests
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
            <hr style={{ color: "#800080" }}/>
            </Introduction>
            </TextWrapper>
          </Column1>

          <Column2 >
            <ImgWrap>
            <Img src={aboutme1} alt="Developer image"/>
            </ImgWrap>
          </Column2>
        </AboutmeRow>

        <SkillsetContainer>
        <H1>
        Skill<strong className="color-text">set</strong>
      </H1>
      <SkillsetWrapper>
        <SkillCard> <CgCPlusPlus /> </SkillCard>
        <SkillCard> <DiPython /> </SkillCard>
        <SkillCard> <DiReact /> </SkillCard>
        <SkillCard> <DiGit />  </SkillCard>
        <SkillCard> <DiJavascript1 />  </SkillCard>
        <SkillCard> <SiFirebase />  </SkillCard>
        <SkillCard> <DiMongodb />  </SkillCard>
        <SkillCard> <DiDjango />  </SkillCard>
      </SkillsetWrapper>
      </SkillsetContainer>


      </AboutmeWrapper>
    </AboutmeContainer>
  );
};

export default Aboutme;
