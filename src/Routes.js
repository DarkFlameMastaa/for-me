import { render } from 'react-dom'
import { Router, Route,IndexRoute, hashHistory } from 'react-router'
import App from './App.js'
import Home from './Home/Home.js'
import About from './About/About.js'
import Work from './Work/Work.js'
import Blog from './Blog/Blog.js'
import React, { PropTypes } from 'react'
// <Route path="/about" component={About}/>
// <Route path="/users" component={Users}>
//   <Route path="/user/:userId" component={User}/>
// </Route>
// <Route path="*" component={NoMatch}/>

class Routes extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/work" component={Work}/>
        </Route>
      </Router>
    )
  }
}

export default Routes;
