import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Frontpage from './components/Frontpage';

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

import connect from 'redux-connect-decorator'
@connect(store => ({ 
   switch: store.switch
}))
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
