import injectTapEventPlugin from 'react-tap-event-plugin';
<<<<<<< HEAD

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.js';

import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './Routes.js'
import './styles/main.css'
import '../node_modules/highlight.js/styles/darcula.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

injectTapEventPlugin();



render(<Routes />,document.getElementById('app'));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js"
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
>>>>>>> 4d7327b063aaee3d4c14453628e70a2423cf0f8f
