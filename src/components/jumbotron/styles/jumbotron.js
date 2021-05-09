import styled from 'styled-components/macro';


export const Inner = styled.div `
    display: flex;
    justify-content:center;
    justify-content:space-between;
    max-width:1100px;
    flex-direction: ${({direction}) => direction};
    margin:auto;
    width:100%;

    @media(max-width:1000px){
        flex-direction:column;
    }

`;

export const Container = styled.div `


    @media(max-width:1000px){
        padding: 0 45px;
    }

`;

export const Pane = styled.div `
    width:50%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

@media(max-width:1000px){
    width:100%;
    text-align:center;
   
}
`;

export const Title = styled.h1 `
    font-size:26px;
    font-weight:bold;
    line-height:40px;
    margin-bottom:10px;
    @media(max-width:599px){
        font-size:22px
    }
`;
export const Subtitle = styled.h2 `
    font-size:22px;
    font-weight:bold;
    line-height:33px;
    margin-bottom:5px;

    @media(max-width:599px){
        font-size:18px
    }

`;

export const Img = styled.img `
    width:100%;
    height:auto;

`;
export const Item = styled.div `
    border-bottom:8px solid #222;
    color:#fff;
    padding: 50px 5%;
    display:flex;
    overflow: hidden;
    :last-of-type h2{ margin-bottom:50px;}


`;


