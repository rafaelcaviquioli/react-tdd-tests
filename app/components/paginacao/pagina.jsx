import React from 'react';

export default class Pagina extends React.Component {
    render() {
        return (
            <label className={this.props.selecionada ? 'selected' : ''}>
                {this.props.valor}
            </label>
        );
    }
}