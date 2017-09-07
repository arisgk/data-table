import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import * as schemas from '../../../../schemas/propTypes';

const DataTable = ({ users }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>First Name</TableHeaderColumn>
        <TableHeaderColumn>Last Name</TableHeaderColumn>
        <TableHeaderColumn>Age</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        users
          ? users.map(user => (
            <TableRow key={user.id}>
              <TableRowColumn>{user.id}</TableRowColumn>
              <TableRowColumn>{user.firstName}</TableRowColumn>
              <TableRowColumn>{user.lastName}</TableRowColumn>
              <TableRowColumn>{user.age}</TableRowColumn>
            </TableRow>
          ))
          : null
      }
    </TableBody>
  </Table>
);

DataTable.propTypes = {
  users: PropTypes.arrayOf(schemas.user),
};

DataTable.defaultProps = {
  users: [],
};

export default DataTable;
