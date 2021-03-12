import styled from 'styled-components';

export const LogoSite = styled.img `
    width: 150px;
    float: left;
    position: relative;
    left: -10%;
    top:45px;
    z-index: 10;
`;

export const Header = styled.header`
    background-color: rgb(25, 26, 83);
    height: 120px;
    padding: 8px;
    text-align: center;
    position:fixed;
    width:100%;
    top:0px;
    display: flex;
    justify-content: center;
    align-items: center;
        
`;

export const P = styled.p`
    flex: 2;
    font-size: 50px;
    font-family:tahoma;
    font-style: bold;
    box-shadow: 2px solid;
    color: #FFF;
`;
export const Span = styled.span`
    color: white;
    font-size: 20px;
    text-decoration: bold;
`;

export const H3 = styled.h3`
    flex: 1;
    & a{
        color: white;
        text-decoration: none;
        padding: 14px;
        font-size: 20px
    }`;

export const Itens = styled.div `
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-right: 100px;
`;

export const SubItens = styled.div `
    justify-content: space-between;
    display: flex;
    width: 500px;
    margin: 10px;
`;