import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  container: {
    flex: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Progress = () => (
  <div style={styles.container}>
    <CircularProgress size={30} thickness={3} />
  </div>
);

export default Progress;
