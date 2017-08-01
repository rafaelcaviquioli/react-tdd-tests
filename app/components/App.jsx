import React from 'react';
import Paginacao from './paginacao/paginacao.jsx';

export default class App extends React.Component {
  render() {
    return (
        <Paginacao totalRegistros={10} quantidadePorPagina={3} paginaAtual={2} />
    );
  }
}