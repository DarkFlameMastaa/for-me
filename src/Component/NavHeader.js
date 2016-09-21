import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return(
      <div className="content-header">
        <span className="xx">
          <span className="fa fa-angle-left" aria-hidden="true"></span>
          <span className="left">Back</span>
        </span>
        <h1>FOR ME</h1>
        <span className="fa fa-bars right" aria-hidden="true"></span>
      </div>
    )
  }
}

export default NavHeader;
