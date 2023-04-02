import React, { Component } from "react";
import SimposioImg from "../assets/images/simposio.jpeg";

class About extends Component {
  render() {
    return (
      <div>
        <h4 className="page-title p-3">Sobre nós</h4>
        <div className="row p-3">
          <div className="col-md-5">
            <img src={SimposioImg} alt="Simposio" className="img-fluid" />
          </div>
          <div className="col-md-6 mt-3">
            <p>
              O Instituto Para Promoção do Trabalho Empreendedor –{" "}
              <strong>Trabalho e Vida</strong> foi fundado em 1º de março de
              2008 com o objetivo de operacionalizar e organizar eventos,
              palestras, seminários e congressos possibilitando ao seu público
              ter acesso aos mais diversificados temas e informações sobre
              capacitação, empreendedorismo e principalmente qualidade de vida
              no mundo do trabalho.
              <br />
              <br />
              <strong>Nossa visão</strong> é de que a sociedade pode se
              organizar melhor quando adota a disseminação de cultura do
              trabalho nas diferentes fases da vida gerando produtividade e bem
              estar social individual e coletivo.
              <br />
              <br />
              <strong>Nossa missão</strong> é atuar como facilitador das ações
              de empreendedorismo, seja na divulgação de novas tecnologias
              simplificadoras do trabalho, ou ainda, na formulação e execução de
              projetos de qualidade de vida relacionados ao trabalho nas
              diversas atividades laborais, propondo mudanças no planejamento
              das ações das empresas, empregadores e da sociedade como um todo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
