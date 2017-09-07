import React from 'react';
import AppBar from 'material-ui/AppBar';
import DataTableContainer from '../../containers/Home/DataTableContainer';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  table: {
    flex: 'auto',
    display: 'flex',
  },
};

const Home = () => (
  <div style={styles.container}>
    <AppBar title="Data Table" />
    <div style={styles.table}>
      <DataTableContainer />
    </div>
  </div>
);

export default Home;
