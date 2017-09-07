import React from 'react';
import PropTypes from 'prop-types';
import DataTable from './DataTable';
import Progress from './Progress';

const DataTableWithLoader = ({ data: { loading, users } }) => {
  if (loading) {
    return (
      <Progress />
    );
  }

  return (
    <DataTable users={users} />
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
