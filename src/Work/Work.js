import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from '../MyAwesomeReactComponent.js';

class Work extends React.Component {
  render () {
    return (
      <div>
        <MuiThemeProvider>
          <MyAwesomeReactComponent />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Work;
