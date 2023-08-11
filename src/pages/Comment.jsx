/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// const data=[
// {id:1, name:'kjnb', matiere:'lkj', price:'989786', classe:'uihg'}
// ];


export default class Comment extends React.Component {
  render() {
    return (
      <BootstrapTable striped={ true } hover={ true } condensed={ true }>
          <TableHeaderColumn dataField='id' isKey={ true }>Nom</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Prenom</TableHeaderColumn>
          <TableHeaderColumn dataField='matiere'>Matiere</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Coordonnees</TableHeaderColumn>

          <TableHeaderColumn dataField='classe'>Classe</TableHeaderColumn>
          {/* <TableHeaderColumn dataField='price'>Action</TableHeaderColumn> */}


      </BootstrapTable>
    );
  }
}
