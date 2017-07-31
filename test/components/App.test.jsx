import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../app/components/App';
import jest from 'enzyme';

describe('App', () => {
    it('Teste Hello World', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
    it('adds 2 + 2 to equal 4', () => {
        expect(2 + 2).toBe(4);
    });
});