import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import AppBarExampleIcon from './AppBarExampleIcon.js';
class App extends React.Component {
  render () {
    return(
      <div>
      <MuiThemeProvider>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
      <MuiThemeProvider>
        <AppBarExampleIcon />
      </MuiThemeProvider>
    </div>
    )
  }
}

export default App;
