import styled from 'styled-components';

export const Footer = styled.footer`
    background-color: rgb(25, 26, 83);
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin:50px 0px 0px 0px;
    padding:5px;
    & img{ 
        max-height:90%;
        max-width:90%;
        
    }
    & .redesS{
        display: flex;
        justify-content:center;
        flex: 1;
        & a{
            margin: 20px;
            opacity: 1;
            filter: brightness(0)  invert(1);
            &:hover{
            opacity: 1;
            filter: brightness(1)  invert(0);
            }
        }
    }
    & .imgS{
       flex: 1;
       display: flex;
        justify-content: center ;
        height: 40px;
        & img{ 
            max-height:90%;
            max-width:90%;
            
        }
    }
`;

export const H2 = styled.h2`
    color: black;
    flex: 1;
    height: 100px;
`;

export const FotoDanilo = styled.img`
    height: 100px;
    width: 100px;
    box-shadow: 0 0 2em black;
    position: fixed;
    bottom:20px;
    right: 47%;
    border-radius: 50%;
`;
