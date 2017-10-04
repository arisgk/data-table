import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DataTable from './DataTable';
import TableTitle from './TableTitle';
import Progress from './Progress';
import UserDialog from './UserDialog';
import DeleteDialog from './DeleteDialog';
import * as schemas from '../../../schemas/propTypes';

const styles = {
  fab: {
    position: 'fixed',
    right: 20,
    bottom: 20,
  },
};

const DataTableWithLoader = ({
  adding,
  deleting,
  onShowCreateDialog,
  onShowDeleteDialog,
  onCancel,
  data: { loading, users },
  add,
  remove,
  selection,
  onTableRowSelection,
}) => {
  if (loading) {
    return (
      <Progress />
    );
  }

  return (
    <div>
      <TableTitle
        selection={selection}
        onShowDeleteDialog={onShowDeleteDialog}
      />
      <DataTable
        users={users}
        selection={selection}
        onTableRowSelection={onTableRowSelection}
      />
      <FloatingActionButton style={styles.fab} onClick={onShowCreateDialog}>
        <ContentAdd />
      </FloatingActionButton>
      <UserDialog
        adding={adding}
        onCancel={onCancel}
        mutate={add}
      />
      <DeleteDialog
        deleting={deleting}
        deletingProgress={false}
        selected={selection.selected}
        mutate={remove}
        onCancel={onCancel}
      />
    </div>
  );
};

DataTableWithLoader.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    users: PropTypes.array,
  }),
  onShowCreateDialog: PropTypes.func,
  onShowDeleteDialog: PropTypes.func,
  onCancel: PropTypes.func,
  add: PropTypes.func,
  remove: PropTypes.func,
  adding: PropTypes.bool,
  deleting: PropTypes.bool,
  selection: schemas.selection,
  onTableRowSelection: PropTypes.func,
};

DataTableWithLoader.defaultProps = {
  data: {
    loading: false,
    error: null,
    users: [],
  },
  onShowCreateDialog: () => {},
  onShowDeleteDialog: () => {},
  onCancel: () => {},
  add: () => {},
  remove: () => {},
  adding: false,
  deleting: false,
  selection: {},
  onTableRowSelection: () => {},
};

export default DataTableWithLoader;
