import React from 'react';
import {render} from 'react-dom';
import './../scss/main.scss';

import BottomAppBar from './components/BottomAppBar.jsx';

import User from './components/User.jsx';

class App extends React.Component {
  render () {
    return (
      <div className="home">
        <User />
        <BottomAppBar />
      </div>
    );
  }
}


render(<App />, document.querySelector('#app'));
