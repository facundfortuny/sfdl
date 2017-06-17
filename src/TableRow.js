import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    let row = this.props.row;

    return (
        <tr>
          {
            Object.keys(row).map((key) => {
              return <td key={key} >{row[key]}</td>
            })
          }
        </tr>
    );
  }
}

export default TableRow;
