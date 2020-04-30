import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import _ from 'lodash';
import './index.scss';

function color(target) {
  target.color = 'red';
}

@color
class App extends React.Component {
  state = {
    name:1
  }

  clickBtn = () => {
    console.log('hhh')
  }

  render () {
    const {name} = this.state;
    const te = {
      ...this.state
    }

    return (<div>
      <button onClick={this.clickBtn}>click</button>
      <div className="box2">{te.name}</div>
    </div>)
  }
}

window.App = App;
render(<App/>,document.querySelector('#root'));
