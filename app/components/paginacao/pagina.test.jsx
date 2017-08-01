import React from 'react';
import renderer from 'react-test-renderer';
import Pagina from './pagina';

describe('Pagina', () => {
    it('Quando pagina recebe prop valor deve ter label com conteudo igual ao valor', () => {
        const pagina = 10;
        const wrapper = shallow(<Pagina valor={pagina} />);

        expect(wrapper.find('label').text()).toEqual(pagina.toString());
    });

    it('Quando pagina recebe prop selecionada = true label deve ter class .selected', () => {
        const wrapper = shallow(<Pagina selecionada={true} />);

        expect(wrapper.find('label.selected')).toHaveLength(1);
    });
});