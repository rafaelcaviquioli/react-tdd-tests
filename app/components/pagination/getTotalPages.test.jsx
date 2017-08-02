import React from 'react';
import renderer from 'react-test-renderer';
import Page from './page';
import getTotalPages from './getTotalPages';

describe('getTotalPages', () => {
    it('Should return page total', () => {
        const pages = getTotalPages(100, 5);

        expect(pages).toEqual(20);
    });
    it('Should return page total consider rounding of value', () => {
        const pages = getTotalPages(100, 3);
        
        expect(pages).toEqual(34);
    });
});