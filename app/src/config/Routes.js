import React, { Component } from 'react';
import Frontpage from './../components/Frontpage';
import Topbar from './../components/Topbar';
import Sidebar from './../components/Sidebar';

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Routes extends Component {
  render() {
    return (
      <Router>
				<div>
					<Route exact path="/" component={Frontpage}/>
				</div>
			</Router>
    );
  }
}

export default Routes;
