import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
};

const Home = () => (
  <div style={styles.container}>
    <AppBar title="Title" />
    <div>Hello World</div>
  </div>
);

export default Home;
