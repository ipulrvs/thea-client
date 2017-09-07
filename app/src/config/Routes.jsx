import React, { Component } from 'react';

import Frontpage from './../components/Frontpage.jsx';

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Routes extends Component {
  render() {
    return (
      <Router>
				<div className="content flex">
					<Route exact path="/" component={Frontpage}/>
				</div>
			</Router>
    );
  }
}

export default Routes;
