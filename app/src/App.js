import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './App.css';
import blue from 'material-ui/colors/blue';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Frontpage from './components/Frontpage';

/* begin Redux Configuration */
import connect from 'redux-connect-decorator'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppRedux from './reducers'
let store = createStore(AppRedux, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* end Redux Configuration */

// console.log(store.dispatch({type: "SAVE_DATA", data: "SOME OBJECT"}))

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
    console.log("Connected to Redux", this)
    return (
      <MuiThemeProvider theme={defaultTheme}>
      <div className="App hbox">
        <Sidebar />
        <div className="main flex">
          <div className="window vbox">
            <Topbar />
            <Frontpage />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
