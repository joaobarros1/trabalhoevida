import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="page-container">
        <h4 className="page-title p-3">Contato</h4>
        <form action="#" method="POST" className="p-3 mb-5">
          <div className="form-group mb-3">
            <label for="inputName">Nome</label>
            <input
              type="text"
              className="form-control mt-1"
              id="inputName"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="form-group mb-3">
            <label for="inputEmail">Endereço de Email</label>
            <input
              type="email"
              className="form-control mt-1"
              id="inputEmail"
              placeholder="Digite seu endereço de Email"
            />
          </div>
          <div className="form-group mb-3">
            <label for="inputSubject">Assunto</label>
            <input
              type="text"
              className="form-control mt-1"
              id="inputSubject"
              placeholder="Digite o assunto de sua mensagem"
            />
          </div>
          <div className="form-group mb-3">
            <label for="inputMessage">Mensagem</label>
            <textarea
              className="form-control mt-1"
              id="inputMessage"
              rows="5"
              placeholder="Digite sua mensagem"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary" disabled>
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
