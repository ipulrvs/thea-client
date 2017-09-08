import React, { Component } from 'react';

import PageFront from './../components/PageFront.jsx';
import PageAbout from './../components/PageAbout.jsx';

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
				<div className="content flex">
					<Route exact path="/" component={PageFront}/>
          <Route exact path="/about" component={PageAbout}/>
				</div>
			</Router>
    );
  }
}

export default Routes;
