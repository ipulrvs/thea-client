import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import UserIcon from 'material-ui-icons/AccountCircle';  
import Divider from 'material-ui/Divider';  
import DraftsIcon from 'material-ui-icons/Drafts';
import Icon from 'material-ui/Icon';

import connect from 'redux-connect-decorator'
@connect(store => ({ 
   user: store.user,
   mainmenus: store.switch.sidebar.mainmenus
}))
class Sidebar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this, "LALALALAL")
    return (
      <div className="sidebar">
        <Drawer type="permanent" open={false}>
          <AppBar position="static">
            <Toolbar style={{minHeight: 52}}>
              <Typography type="title" color="inherit">
                THEA
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem>
              <Avatar className="avatar">
                <UserIcon />
              </Avatar>
              <ListItemText primary={this.props.user.fullName} secondary={this.props.user.userRole} className="avatarText"/>
            </ListItem>
            <Divider />
            <ListItem button>
              <Icon>add_circle</Icon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <Icon>add_circle</Icon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
