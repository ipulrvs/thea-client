import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

class Sidebar extends React.Component {
  render() {
    window.hahahaSidebar = this
    return (
      <Drawer className="sidebar" type="persistent" open={true}>
				<div className="window vbox">
					<div className="topbar">
            <AppBar position="static" className="topbarMain">
              <Toolbar>
                <Typography type="title" color="inherit" className="topbarTitle">
                  <strong>LOCKBOARD</strong>
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
					<div className="content flex">
            <List className="sidebarMenu">
              <ListItem button className="menu">
                <ListItemIcon>
                  <Icon>more_vert</Icon>
                </ListItemIcon>
                <ListItemText inset primary="Menu" />
              </ListItem>
              <ListItem button className="menu">
                <ListItemIcon>
                  <Icon>more_vert</Icon>
                </ListItemIcon>
                <ListItemText inset primary="Another Menu" />
              </ListItem>
              <ListItem button className="menu active">
                <ListItemIcon>
                  <Icon>more_vert</Icon>
                </ListItemIcon>
                <ListItemText inset primary="Collapse Menu" />
                {true ? <Icon><span class="material-icons">arrow_drop_down</span></Icon> : <Icon><span class="material-icons">keyboard_arrow_right</span></Icon>}
              </ListItem>
              <Collapse in={true} transitionDuration="auto" unmountOnExit>
                <ListItem button className="submenu active">
                  <ListItemIcon>
                    <Icon>chevron_right</Icon>
                  </ListItemIcon>
                  <ListItemText inset primary="Child Menu" />
                </ListItem>
                <ListItem button className="submenu">
                  <ListItemIcon>
                    <Icon>chevron_right</Icon>
                  </ListItemIcon>
                  <ListItemText inset primary="Child Menu" />
                </ListItem>
              </Collapse>
            </List>
					</div>
				</div>
      </Drawer>
    );
  }
}

export default Sidebar