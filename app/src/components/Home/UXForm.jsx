import React from 'react'
import Service from './Service'
import ServiceExtend from './ServiceExtend'
import Home from './Home.jsx'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';


import connect from 'redux-connect-decorator'
@connect(store => ({ 
  global: store.global,
  entity: store.entity
}))
export default class UXForm extends React.Component {
  service = ServiceExtend

  render() {
    return (
      <div className="window vbox">
        <AppBar position="static" className="toolbar">
          <Toolbar>
            <Typography type="title" className="toolbarTitle" >
              {this.service.alias + " Form"}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}