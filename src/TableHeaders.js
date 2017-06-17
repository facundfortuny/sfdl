import React, { Component } from 'react';

class TableHeaders extends Component {
  render() {
    return (
      <thead>
        <tr>
          {
            this.props.headers.map((title) => {
                return <th key={title}>{title}</th>
            })
          }
        </tr>
      </thead>
    );
  }
}

export default TableHeaders;
