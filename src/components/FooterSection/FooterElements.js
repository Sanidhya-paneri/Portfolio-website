import styled from "styled-components";

export const FooterContainer = styled.footer`
     background-color: #2A1F2E;
    bottom: 0 !important;
    padding-top: 10px !important;
    padding-bottom: 8px !important ;

`;

export const FooterWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1400px;
margin-left: 20px;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`;

export const Col1 = styled.h3`
text-align: center;
margin-left: 30px;
`;

export const Col2 = styled.h3`
text-align: center;
margin-right: 20px;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;;
align-items: center;

`;

export const SocialIconsLink = styled.a`
color: #fff;
font-size: 18px;
`;

