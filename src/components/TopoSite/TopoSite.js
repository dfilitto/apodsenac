import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/styleAll.css';
import * as S from './TopoStyles';

export function TopoSite(){
    return(
        <>
            <S.Header>
                <S.LogoSite id="nasa" src="./imagens/nasa.png"/>
                <S.Itens>
                    <S.P>Astronomy Picture of the Day</S.P>
                    <S.SubItens>
                        <S.Span>|</S.Span>
                        <S.H3 id="details"><Link to="/">Foto do Dia</Link></S.H3>
                        <S.Span>|</S.Span>
                        <S.H3 id="details"><Link to="/Desenvolvedores">Desenvolvedores</Link></S.H3>
                        <S.Span>|</S.Span>
                    </S.SubItens>
                </S.Itens>  
            </S.Header>
        </>
    );
}

export default TopoSite;