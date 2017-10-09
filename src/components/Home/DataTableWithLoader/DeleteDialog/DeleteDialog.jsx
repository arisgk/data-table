import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  progressIndicator: {
    position: 'absolute',
    top: 16,
    right: 24,
  },
  hidden: {
    display: 'none',
  },
};

const handleDelete = (mutate, selected, close) => {
  mutate({ ids: selected });
  close();
};

const DeleteDialog = ({ deleting, deletingProgress, selected, mutate, onCancel }) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary
      onClick={onCancel}
    />,
    <FlatButton
      label="Delete"
      secondary
      onClick={() => handleDelete(mutate, selected, onCancel)}
    />,
  ];

  return (
    <Dialog
      title={
        (selected && selected.length > 1)
          ? 'Delete users?'
          : 'Delete user?'
      }
      actions={actions}
      modal={false}
      open={deleting}
      onRequestClose={onCancel}
    >
      <CircularProgress
        size={30}
        thickness={2}
        style={
          deletingProgress
            ? styles.progressIndicator
            : { ...styles.progressIndicator, ...styles.hidden }
        }
      />

      {
        (selected && selected.length > 1)
          ? 'Delete users?'
          : 'Delete user?'
      }
    </Dialog>
  );
};

DeleteDialog.propTypes = {
  deleting: PropTypes.bool,
  deletingProgress: PropTypes.bool,
  selected: PropTypes.arrayOf(PropTypes.string),
  mutate: PropTypes.func,
  onCancel: PropTypes.func,
};

DeleteDialog.defaultProps = {
  deleting: false,
  deletingProgress: false,
  selected: [],
  mutate: () => {},
  onCancel: () => {},
};

export default DeleteDialog;
