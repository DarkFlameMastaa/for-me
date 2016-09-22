import React, { PropTypes } from 'react'
import {Link} from "react-router"

class LeftNav extends React.Component {
  render () {
    return(
      <div className="content-leftnav">
          <h2 style={{padding:"20px"}}>DarkFlameMastaa</h2>
          <Link to="/" activeStyle={{background:"rgb(122, 18, 135)"}} onlyActiveOnIndex={true}><span  className="fa fa-home" aria-hidden="true"></span><span>Home</span></Link>
          <Link to="/blog" activeStyle={{background:"rgb(122, 18, 135)"}}><span  className="fa fa-file-text-o" aria-hidden="true"></span><span>Blog</span></Link>
          <Link to="/work" activeStyle={{background:"rgb(122, 18, 135)"}}><span  className=""></span><span>Work</span></Link>
          <Link to="/about" activeStyle={{background:"rgb(122, 18, 135)"}}><span  className=""></span><span>About</span></Link>
      </div>
    )
  }
}

export default LeftNav;
