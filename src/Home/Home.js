import React, { PropTypes } from 'react'
import bg from '../images/383c4a88256bc5e26c8c1ac5750f9dbd.jpg'

class Home extends React.Component {
  render () {
    return (
      <div className="home-container">
        <div className="mengban">
          <h1 style={{padding:"0px"}}>Hi,I am <span>Yago</span></h1>
          <p style={{padding:"30px 0 20px 0"}}>Web Developer</p>
          <button className="btn btn-info">Click Me</button>
        </div>
      </div>
    )
  }
}

export default Home;
