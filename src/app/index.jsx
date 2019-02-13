import React from 'react';
import {render} from 'react-dom';
import Button from '@material-ui/core/Button';

import './../scss/main.scss';

import User from './components/User.jsx';

class App extends React.Component {
  render () {
    return (
      <div className="home">
        <User />
        <p>Welcome to the ReactJS and ExpressJS generator</p>
        <p>Check out the <a href="https://github.com/kevin-wynn/reactjs-express-generator/wiki">documentation</a> to get started.</p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
