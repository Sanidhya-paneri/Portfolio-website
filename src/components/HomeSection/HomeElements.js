import styled from "styled-components";


export const HomeContainer = styled.div`
background: #3D2D42;
display: flex;
justify-content: center;
align-items: center;
padding:0 30px;
height: 800px;
position : relative;
z-index: -1;
/* background-image: url(../../images/home-bg.jpg) */
@media screen and (max-width: 768px){
    padding: 100px 0; 
}
`

export const HomeBg= styled.div`
position : absolute;
top:0;
bottom:0;
left:0;
right:0;
width: 100%;
height: 100vh;
overflow: hidden;
`

export const InfoWrapper= styled.div`
display: grid;
z-index: 1;
padding: 0 24px;
height: 660px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
justify-content: center;

`

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
}

`
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;

`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;

`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const Greetings = styled.h3`
color: #fff;
font-size: 30px;
line-height: 16px;
font-weight: 500;
letter-spacing: 1.4px;
margin-bottom: 16px;
`
export const NameInfo = styled.h2`
color: #fff;
margin-bottom: 24px;
font-size: 40px;
line-height: 1.1;
font-weight: 500;

@media screen and (max-width: 480px){
    font-size:32px;
}
`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;

`

export const Img = styled.img`
width : 100%;
margin: 0 0 10px 0;


`