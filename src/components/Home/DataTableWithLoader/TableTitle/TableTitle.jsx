import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import * as schemas from '../../../../schemas/propTypes';

const styles = {
  container: {
    height: 54,
    minHeight: 54,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginLeft: 24,
    marginTop: 0,
    marginBottom: 0,
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '160%',
    fontWeight: 100,
  },
  iconButtonsContainer: {
    marginLeft: 'auto',
    marginRight: 24,
  },
  icon: {
    opacity: '0.54',
  },
};

const TableTitle = ({ selection, onShowDeleteDialog }) => (
  <div style={styles.container}>
    <h2 style={styles.title}>Basketball Players</h2>
    <div style={styles.iconButtonsContainer}>
      <IconButton
        disabled={!(selection.selected && selection.selected.length > 0)}
        onClick={() => onShowDeleteDialog(selection.selected)}
        iconStyle={styles.icon}
      >
        <i
          className="material-icons"
          disabled={!(selection.selected && selection.selected.length > 0)}
        >
          delete
        </i>
      </IconButton>
    </div>
  </div>
);

TableTitle.propTypes = {
  selection: schemas.selection,
  onShowDeleteDialog: PropTypes.func,
};

TableTitle.defaultProps = {
  selection: {},
  onShowDeleteDialog: () => {},
};

export default TableTitle;
