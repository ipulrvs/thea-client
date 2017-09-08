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

  selectMenu(param){
    this.props.dispatch({type: "SIDEBAR_SELECT_MENU", param: param})
    console.log(this, "WHAT AM I")
  }

  renderMainMenus(global){
    const _this = global
    let datas = _this.props.mainmenus
    let view = []
    datas.map(function(dataItem, index){
      if(dataItem.active){
        view.push(
          <ListItem button key={index} className="sidebarItemActive" onClick={_this.selectMenu.bind(_this, index)}>
            <Icon className="sidebarIcon">add_circle</Icon>
            <ListItemText className="sidebarText" primary={dataItem.name} />
          </ListItem>
        )
      }
      if(!dataItem.active){
        view.push(
          <ListItem button key={index} className="sidebarItem" onClick={_this.selectMenu.bind(_this, index)}>
            <Icon className="sidebarIcon">add_circle</Icon>
            <ListItemText className="sidebarText" primary={dataItem.name} />
          </ListItem>
        )
      }
    })
    return view
  }

  render() {
    let mainmenus = this.renderMainMenus(this)
    console.log(this, "SIDEBAR STATE")
    window.hahahah = this
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
            {mainmenus}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
