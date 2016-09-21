import React, { PropTypes } from 'react'

class Son extends React.Component {
  render () {
    return(
      <div>
        <button onClick={this.context.update}>我来更新我堂弟</button>
      </div>
    )
  }
}

Son.childContextTypes = {
  text: React.PropTypes.any,
}

export default Son;
