import React from 'react';
import getTotalPages from './getTotalPages.jsx';
import Page from './Page.jsx';

const Paginacao = props => {
    if (props.totalRecords === undefined || props.totalPerPage === undefined) {
        return null;
    }

    const totalPages = getTotalPages(
        props.totalRecords,
        props.totalPerPage
    );

    return (
        <ul>
            {
                [...Array(totalPages)].map((x, value) => {
                    return (
                        <ul key={value}>
                            <Page
                                value={value + 1}
                                key={value}
                                selected={
                                    props.currentPage === (value + 1) ? true : false
                                }
                            />
                        </ul>
                    );
                })
            }
        </ul>
    );
}

export default Paginacao;