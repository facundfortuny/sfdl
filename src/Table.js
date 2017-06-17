import React, { Component } from 'react';
import TableHeaders from './TableHeaders'
import TableRows from './TableRows'
import data from './data/data.json';

class Table extends Component {

  render() {
    let rows = data.rows,
      headers = data.headers;
    return (

      <table className='tableApp'>
        <TableHeaders headers={headers}/>
        <TableRows rows={rows}/>
      </table>
    );
  }
}

export default Table;
