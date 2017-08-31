import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Drawer type="permanent" open={true}>
          <AppBar position="static">
            <Toolbar style={{minHeight: 52}}>
              <Typography type="title" color="inherit">
                THEA
              </Typography>
            </Toolbar>
          </AppBar>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
