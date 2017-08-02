import React from 'react';
import Pagination from './pagination/Pagination.jsx';

export default class App extends React.Component {
  render() {
    return (
        <Pagination totalRecords={10} totalPerPage={3} currentPages={2} />
    );
  }
}