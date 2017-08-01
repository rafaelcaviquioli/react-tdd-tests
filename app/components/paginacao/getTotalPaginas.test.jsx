import React from 'react';
import renderer from 'react-test-renderer';
import Pagina from './pagina';
import getTotalPaginas from './getTotalPaginas';

describe('getTotalPaginas', () => {
    it('Quando total de registros for 100 e quantidade por pagina for 5 deve retornar 20', () => {
        const paginas = getTotalPaginas(100, 5);

        expect(paginas).toEqual(20);
    });
    it('Quando total de registros for 100 e quantidade por pagina for 3 deve retornar 34', () => {
        const paginas = getTotalPaginas(100, 3);
        
        expect(paginas).toEqual(34);
    });
});