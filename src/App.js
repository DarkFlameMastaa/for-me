import React from 'react';
import NavHeader from './Component/NavHeader.js';
import Footer from './Component/Footer.js';
import LeftNav from './LeftNav.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      small:false
    }
  }
  checkWidth(){
    this.setState({
      small:window.innerWidth>760 ? false : true
    });
  }
  componentDidMount() {
    this.checkWidth();
    window.onresize=this.checkWidth.bind(this);
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.small ? <NavHeader /> : <LeftNav /> }
        <content className="content-main">
          {this.props.children}
        </content>
        {this.state.small ? <Footer /> : "" }
      </div>
    )
  }
}

export default App;
