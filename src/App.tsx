import React from 'react';
import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>123</div>
    </div>
  );
}

export default App;
