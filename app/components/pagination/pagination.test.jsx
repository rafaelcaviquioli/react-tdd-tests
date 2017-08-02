import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';
import Page from './Page';

describe('Pagination', () => {
    it('Should show pages according records and quantity per page', () => {
        const wrapper1 = shallow(<Pagination totalRecords={100} totalPerPage={3} />);
        const wrapper2 = shallow(<Pagination totalRecords={100} totalPerPage={10} />);

        expect(wrapper1.find(Page)).toHaveLength(34);
        expect(wrapper2.find(Page)).toHaveLength(10);
    });

    it('Should render null when props is null', () => {
        const wrapper = shallow(<Pagination />);

        expect(wrapper.html()).toEqual(null);
    });

    it('Should show a label selected with current page number', () => {
        const wrapper = mount(
            <Pagination totalRecords={100} totalPerPage={3} currentPage={2} />
        );

        const labelSelected = wrapper.find('label.selected');

        expect(labelSelected).toHaveLength(1);
        expect(labelSelected.text()).toEqual('2');
    });
});