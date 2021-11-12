import React from 'react';
import Main from './Main';
import Side from './Side';

import styles from './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id={styles.app}>
        <Main />
        <Side />
      </div>
    )
  }
}

export default App;
