import React from "react";
import {
  FooterContainer,
  /* FooterWrap,
  FooterMain, */
  FooterWrapper,
  /* DandD,
  WebsiteRights, */
  SocialIcons /* , SocialIconsLink */,
  Col1,
  Col2
} from "./FooterElements";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <FooterContainer className="footer">
      <FooterWrapper>
        <Col1 className="footer-copywright">
          <h3> Desgined and Developed by Sanidhya Paneri</h3>
        </Col1>
        <Col2 className="footer-copywright">
          <h3>Copyright © {year} SP</h3>
        </Col2>

        <SocialIcons className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Sanidhya-paneri"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="/" style={{ color: "white" }}>
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sanidhya-paneri-484a19194/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href="/" style={{ color: "white" }}>
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </SocialIcons>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
