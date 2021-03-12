import React from 'react';
import * as S from './RodapeStyles';


function RodapeSite(){
    return(
        <>
            <S.Footer>
                <div className="redesS">
                    <a href="https://www.facebook.com/danilo.filitto" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="https://www.instagram.com/dfilitto/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="https://www.youtube.com/channel/UCryuJNaryiAa4vQaO2_RXtw" target="_blank"><i class="fab fa-youtube  fa-2x"></i></a>
                </div>
                
                <div className="imgS">
                    <img id="banner" src="imagens/dfilitto.png"/>
                </div>
                
            </S.Footer>
        </>
    );
}

export default RodapeSite;