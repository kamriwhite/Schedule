import React, { Component } from 'react';

import Library from './library/library';
import Schedule from './schedule/schedule';
import Gradient from './gradient';
import Arrow from './arrow';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Library/>
        <Schedule/>
        <Gradient/>
      </div>
    );
  }
}

export default Home;