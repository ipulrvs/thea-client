import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
				<AppBar position="static">
					<Toolbar disableGutters={true} style={{minHeight: 52}}>
						<IconButton color="contrast" aria-label="Menu">
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
    );
  }
}

export default Topbar;
