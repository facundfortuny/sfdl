import React, { Component } from 'react';
import TableRow from './TableRow';

class TableRows extends Component {
  render() {
    return (
        <tbody>
            {
              this.props.rows.map((row) => {
                return <TableRow key={row[0]} row={row}/>
              })
            }
        </tbody>
    );
  }
}

export default TableRows;
