import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DataTable from './DataTable';
import TableTitle from './TableTitle';
import Progress from './Progress';
import UserDialog from './UserDialog';
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
  onStartAdding,
  onCancelUserDialog,
  data: { loading, users },
  mutate,
  listQuery,
  selection,
  onStartDeleting,
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
        onStartDeleting={onStartDeleting}
      />
      <DataTable
        users={users}
        selection={selection}
        onTableRowSelection={onTableRowSelection}
      />
      <FloatingActionButton style={styles.fab} onClick={onStartAdding}>
        <ContentAdd />
      </FloatingActionButton>
      <UserDialog adding={adding} onCancel={onCancelUserDialog} mutate={mutate} listQuery={listQuery} />
    </div>
  );
};

DataTableWithLoader.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    users: PropTypes.array,
  }),
  onStartAdding: PropTypes.func,
  onCancelUserDialog: PropTypes.func,
  mutate: PropTypes.func,
  adding: PropTypes.bool,
  listQuery: PropTypes.object,
  selection: schemas.selection,
  onStartDeleting: PropTypes.func,
  onTableRowSelection: PropTypes.func,
};

DataTableWithLoader.defaultProps = {
  data: {
    loading: false,
    error: null,
    users: [],
  },
  onStartAdding: () => {},
  onCancelUserDialog: () => {},
  mutate: () => {},
  adding: false,
  listQuery: {},
  selection: {},
  onStartDeleting: () => {},
  onTableRowSelection: () => {},
};

export default DataTableWithLoader;
