import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DataTable from './DataTable';
import Progress from './Progress';

const styles = {
  fab: {
    position: 'fixed',
    right: 20,
    bottom: 20,
  },
};

const DataTableWithLoader = ({ data: { loading, users } }) => {
  if (loading) {
    return (
      <Progress />
    );
  }

  return (
    <div>
      <DataTable users={users} />
      <FloatingActionButton style={styles.fab}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  );
};

DataTableWithLoader.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    users: PropTypes.array,
  }),
};

DataTableWithLoader.defaultProps = {
  data: {
    loading: false,
    error: null,
    users: [],
  },
};

export default DataTableWithLoader;
