import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import _ from 'lodash';

class App extends React.Component {
  render () {
    return (<div>hello</div>)
  }
}

render(<App/>,document.querySelector('#root'));
