import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DataTable from './DataTable';
import Progress from './Progress';
import UserDialog from './UserDialog';

const styles = {
  fab: {
    position: 'fixed',
    right: 20,
    bottom: 20,
  },
};

const DataTableWithLoader = ({
  adding, onStartAdding, onCancelUserDialog, data: { loading, users },
}) => {
  if (loading) {
    return (
      <Progress />
    );
  }

  return (
    <div>
      <DataTable users={users} />
      <FloatingActionButton style={styles.fab} onClick={onStartAdding}>
        <ContentAdd />
      </FloatingActionButton>
      <UserDialog adding={adding} onCancel={onCancelUserDialog} />
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
  adding: PropTypes.bool,
};

DataTableWithLoader.defaultProps = {
  data: {
    loading: false,
    error: null,
    users: [],
  },
  onStartAdding: () => {},
  onCancelUserDialog: () => {},
  adding: false,
};

export default DataTableWithLoader;
