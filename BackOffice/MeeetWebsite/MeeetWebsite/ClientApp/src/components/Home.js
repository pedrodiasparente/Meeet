import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Bem vindo ao backoffice da aplicacao Meeet!</h1>
        <p>Aqui pode facilmente dar manage em dados presentes na base de dados como:</p>
        <ul>
          <li>Os users, atraves do Fetch Users</li>
          <li>Os eventos, atraves do Fetch Events</li>
          <li>Os grupos, atraves do Fetch Groups</li>
        </ul>
        <p>Dentro destes pode facilmente</p>
        <ul>
          <li><strong>Ver que dados estao presentes na BD</strong> pois estes estao presentes numa <em>table</em> de facil interpretacao.</li>
          <li><strong>Adicionar novos dados e relacoes</strong> usando os botoes de <em>Add</em></li>
          <li><strong>Remover por completo o dado que esta a dar manage (e todas as suas relacoes!)</strong> usando os botoes de <em>Remove</em></li>
        </ul>
      </div>
    );
  }
}
