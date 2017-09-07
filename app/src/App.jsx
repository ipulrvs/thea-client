import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Routes from './config/Routes.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const defaultTheme = createMuiTheme({
  palette: {
    primary: blue
  },
  overrides: {
    MuiAppBar: {
      root: {
        height: 52
      }
    }
  }
});

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <MuiThemeProvider theme={defaultTheme}>
      <div className="App hbox">
        <Sidebar />
        <div className="main flex">
          <div className="window vbox">
            <Topbar />
            <Routes />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
