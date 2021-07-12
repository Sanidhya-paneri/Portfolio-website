import styled from "styled-components";

export const ProjectsContainer = styled.div`
background: #3D2D42;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
padding-bottom: 30px;

@media screen and (max-width: 768px){
    height: auto;
    padding-bottom: 30px;
    padding-top: 60px;
}
@media screen and (max-width: 480px){
    height: auto;
    padding-bottom: 30px;
}
`;
export const ProjectWrapper = styled.div`
max-width:1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 30px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

export const ProjectCard = styled.div`
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
&:hover {
  transform: scale(1.02);
  overflow: hidden;
  box-shadow: 0 4px 4px 5px rgba(143, 39, 143, 0.561);
  
}
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 500;
  padding-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;
export const ProjectIcon = styled.img`
height:160px;
width: 160px;
`;

export const ProjectTitle=styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;

export const ProjectDesc = styled.p`
font-size: 1rem;
text-align: center;
font-weight: 550;
`;
