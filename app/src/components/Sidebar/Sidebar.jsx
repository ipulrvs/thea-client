import React from 'react'

class Sidebar extends React.Component {
  render() {
    window.hahahaSidebar = this
    return (
      <div className="sidebar">
				Sidebar READY
      </div>
    );
  }
}

export default Sidebar