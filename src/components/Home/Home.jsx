import React from 'react';
import AppBar from 'material-ui/AppBar';
import DataTable from './DataTable';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
};

const Home = () => (
  <div style={styles.container}>
    <AppBar title="Data Table" />
    <DataTable />
  </div>
);

export default Home;
