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

const isSelected = (entity, selection) => {
  if (selection && selection.selected && selection.selected.length > 0) {
    return selection.selected.includes(entity.id);
  }

  return false;
};

const DataTable = ({ users, selection, onTableRowSelection }) => (
  <Table
    multiSelectable
    onRowSelection={selectedRows => onTableRowSelection(selectedRows, users)}
  >
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>First Name</TableHeaderColumn>
        <TableHeaderColumn>Last Name</TableHeaderColumn>
        <TableHeaderColumn>Age</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody deselectOnClickaway={false}>
      {
        users
          ? users.map(user => (
            <TableRow key={user.id} selected={isSelected(user, selection)}>
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
  selection: schemas.selection,
  onTableRowSelection: PropTypes.func,
};

DataTable.defaultProps = {
  users: [],
  selection: {},
  onTableRowSelection: () => {},
};

export default DataTable;
