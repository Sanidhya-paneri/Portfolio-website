import styled from "styled-components";

export const AboutmeContainer = styled.div`
background: #3D2D42;
display: flex;
justify-content: center;
align-items: center;
padding:0 30px;
height: 1300px;
position : relative;
z-index: -1;

@media screen and (max-width: 1000px){
   height: 1800px;
}

}
`;

export const AboutmeWrapper= styled.div`
display: grid;
z-index: 1;
padding: 0 24px;
height: 660px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
justify-content: center;
margin-bottom: 200px;
margin-top: -500px;

@media screen and (max-width: 768px){
    padding: 100px 0; 
    margin-top: -900px
`;

export const AboutmeRow = styled.div`
color: white;
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
/* margin-top: -120px; */

`;
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;

`;
export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;

`;

export const Img = styled.img`
width : 100%;
margin: 0 0 10px 0;

`;

export const TextWrapper = styled.div`
max-width: 540px;
margin-top: 100px;
padding-top: 0;
padding-bottom: 60px;
`
export const AboutmeWordwrap = styled.h1`
font-Size: "2.1em";
padding-Bottom: "20px";
justify-content: center;
padding-left: 160px;
font-weight: 500;

@media screen and (max-width: 768px){
    padding-left: 0;
}
`;

export const Introduction = styled.p`
color: #fff;
margin-bottom: 24px;
font-size: 25px;
line-height: 1.1;
font-weight: 300;

@media screen and (max-width: 480px){
    font-size:20px;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 500;
  padding-bottom:64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const SkillsetContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
`;

export const SkillsetWrapper = styled.div`
max-width:1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 50px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
}
`;

export const SkillCard = styled.div`
  box-shadow: 0 4px 5px 3px rgba(143, 39, 143, 0.459);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  color: white;
  background-color: transparent;
  opacity: 0.9;
  transition: all 0.5s ease 0s;
  height: auto;
  border: 1.7px solid rgba(200, 137, 230, 0.637);
  font-size: 4.5em;

&:hover{
  transform: scale(1.02);
  overflow: hidden;
  box-shadow: 0 4px 4px 5px rgba(129, 72, 144, 0.561);
  
}
`;