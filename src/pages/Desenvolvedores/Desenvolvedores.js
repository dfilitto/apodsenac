import React from 'react';
import TopoSite from '../../components/TopoSite/TopoSite';
import RodapeSite from '../../components/RodapeSite/RodapeSite';

function Desenvolvedores(){
    return(
        <>
            <TopoSite />
            <main>
                
                <h2>Danilo Filitto</h2>         
                <section>
                   
                    <img src="imagens/danilo.jpg" alt="Danilo Filitto" />
                    
                    <p>Meu nome é Danilo Filitto, sou Mestre em Ciência da Computação pela Universidade Estadual de Maringá – UEM, Pós-Graduado em Redes de Computadores e Comunicação de Dados pela Universidade do Estado do Paraná – UEL, Bacharel em Ciência da Computação pela Universidade do Oeste Paulista – UNOESTE.

Atuo na área acadêmica como professor desde 2006. Atualmente leciono na UNOESTE (Universidade do Oeste Paulista) e no SENAC (Serviço Nacional de Aprendizagem Comercial) da cidade de Presidente Prudente. Além de professor sou desenvolvedor de jogos e palestrante.

As Área de Pesquisa em qual atuo são: desenvolvimento de Softwares, estrutura de dados, processamento de imagens digitais, redes de computadores e desenvolvimento de jogos.

Sou defensor de várias causas, como a da igualdade para todos, não importa o sexo, cor da pele, religião, condição social ou qualquer outra forma antiguada de classificação. Somos todos iguais.</p>
                </section>    
            </main>
            <RodapeSite />
        </>
    );
}

export default Desenvolvedores;