import React from 'react';
import renderer from 'react-test-renderer';
import Paginacao from './paginacao';
import Pagina from './pagina';

describe('Paginacao', () => {
    it('Quando paginação receber props totalRegistros = 100 e quantidadePorPagina = 3 deve redenrizar 34 paginas ', () => {
        const wrapper = shallow(
            <Paginacao totalRegistros={100} quantidadePorPagina={3} />
        );

        expect(wrapper.find(Pagina)).toHaveLength(34);
    });

    it('Quando paginação não receber props totalRegistros ou quantidadePorPagina deve redenrizar null', () => {
        const wrapper = shallow(<Paginacao />);

        expect(wrapper.html()).toEqual(null);
    });

    it('Quando paginação receber props totalRegistros = 100 e quantidadePorPagina = 3 paginaAtual = 2 deve redenrizar um label com class .selected e conteudo 2 ', () => {
        const wrapper = mount(
            <Paginacao totalRegistros={100} quantidadePorPagina={3} paginaAtual={2} />
        );

        const labelSelected = wrapper.find('label.selected');

        expect(labelSelected).toHaveLength(1);
        expect(labelSelected.text()).toEqual('2');
    });
});