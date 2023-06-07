import React, { Component } from "react";
import trabalho from "../assets/images/trabalho.jpg";

export class NextEvents extends Component {
  render() {
    return (
      <div className="d-flex page-container">
        <div className="d-flex flex-column">
          <h4 className="page-title p-3">Próximos Eventos</h4>
          <div className="container">
            <a
              href="https://brasilparticipativo.presidencia.gov.br/processes/programas/f/1/proposals/51"
              target="_blank"
              rel="noreferrer"
            >
              <img src={trabalho} alt="banner evento" />
            </a>
            <h5 className="mt-3">
              Promoção do Trabalho Digno, Emprego e Renda
            </h5>
            <p className="pt-4 pb-5">
              O Governo Federal abriu opção para a população escolher 03
              prioridades dentro de uma lista de programas para o PPA 2024/27.
              <br />
              Entre os programas, está o “Promoção do Trabalho Digno, Emprego e
              Renda”, lançado pelo Ministério do Trabalho e Emprego, que caminha
              no mesmo sentido da Campanha Nacional de Prevenção de Acidentes do
              Trabalho – CANPAT, que a gente ajuda a fazer.
              <br />E olha a sua importância: o trabalho dignifica o ser humano
              e dá sentido à sua vida. É preciso que todos tenham acesso a
              condições de trabalho e renda, de forma digna, decente e saudável,
              sem acidentes e adoecimentos do trabalho. Isso é bom para todos:
              PARA QUEM TRABALHA, PARA QUEM EMPREGA E PARA TODA A NOSSA
              SOCIEDADE.
              <br />
              Assim, pedimos o seu voto. Acesse o site do PPA Participativo e
              escolha o programa “Promoção do Trabalho Digno, Emprego e Renda” e
              nos ajude a fazer um País cada vez melhor.
              <br />
              <a
                href="https://brasilparticipativo.presidencia.gov.br/processes/programas/f/1/proposals/51"
                target="_blank"
                rel="noreferrer"
              >
                Vote já.
              </a>{" "}
              É fácil e rápido. Acesse o site e siga os passos do site. O futuro
              agradece, com dignidade, segurança e saúde.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NextEvents;
