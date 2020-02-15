import React, {Component} from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';

import Stats from './Stats';
import Burger from './Burger';
import Booster from './Booster';
import Menu from './Menu';

import './App.css';

class Clicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
    this.mouseClicked = this.mouseClicked.bind(this);
  }

  mouseClicked() {
    const clicks = this.state.clicks;
    this.setState({
      clicks: clicks + 1
    });
  }

  render(){
    return(
      <div className="clicker">
        <div className='header'>
          <h1>Burger Clicker</h1>
        </div>
        <div className="content content--justified">
          <Stats count={this.state.clicks} />
          <Burger onClick={this.mouseClicked} />
          <Booster boost={5.3} />
        </div>
        <Menu claimableCoupons={23}/>
      </div>
      );
    }
  }

export default Clicker;