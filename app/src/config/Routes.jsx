import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Sidebar from './../components/Sidebar/Sidebar.jsx'
import Topbar from './../components/Topbar/Topbar.jsx'
import Home from './../components/Home/Home.jsx'

class Routes extends React.Component {
   render() {
      return (
        <Router>
          <div className="hbox hboxfix">
            <Route exact path="*" component={Sidebar} />
            <div className="main flex">
              <div className="window vbox">
                <Route exact path="*" component={Topbar} />
                <Route exact path="/" component={Home} />
              </div>
            </div>
          </div>
        </Router>
      );
   }
}

export default Routes