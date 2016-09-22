import injectTapEventPlugin from 'react-tap-event-plugin';

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
