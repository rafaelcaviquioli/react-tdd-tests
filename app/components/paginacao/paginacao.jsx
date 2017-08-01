import React from 'react';
import getTotalPaginas from './getTotalPaginas.jsx';
import Pagina from './pagina.jsx';

export default class Paginacao extends React.Component {
    render() {

        if(this.props.totalRegistros === undefined || this.props.quantidadePorPagina === undefined){
            return null;
        }

        const totalPaginas = getTotalPaginas(
            this.props.totalRegistros,
            this.props.quantidadePorPagina
        );

        return (
            <ul>
                {
                    [...Array(totalPaginas)].map((x, valor) =>{
                        return (
                            <ul key={valor}>
                                <Pagina
                                    valor={valor + 1}
                                    key={valor}
                                    selecionada={
                                        this.props.paginaAtual === (valor + 1) ? true : false
                                    }
                                />
                            </ul>
                        );
                    })
                }
            </ul>
        );
    }
} 