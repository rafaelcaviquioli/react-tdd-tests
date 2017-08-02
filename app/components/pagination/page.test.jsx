import React from 'react';
import renderer from 'react-test-renderer';
import Page from './Page';

describe('Page', () => {
    it('Show a label with page number', () => {
        const page = 10;
        const wrapper = shallow(<Page value={page} />);

        expect(wrapper.find('label').text()).toEqual(page.toString());
    });

    it('Show a label selected with current page number', () => {
        const wrapper = shallow(<Page selected={true} />);

        expect(wrapper.find('label.selected')).toHaveLength(1);
    });
});