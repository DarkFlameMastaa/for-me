import React from 'react';
import NavHeader from './Component/NavHeader.js';
import Footer from './Component/Footer.js';
import LeftNav from './LeftNav.js';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      small:false,
      title:"home"
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

  componentWillReceiveProps(nextProps) {
    this.setTitle();
  }
  componentWillMount() {
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive('/', true) ? 'HOME' :
        this.context.router.isActive('/blog')? 'BLOG' :
        this.context.router.isActive('/work')? 'WORK' :
        this.context.router.isActive('/about')? 'ABOUT' : 'ITEM'
    });
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.small ? <NavHeader title={this.state.title} /> : <LeftNav title={this.state.title}/> }
        <content className="content-main">
          {this.props.children}
        </content>
        {this.state.small ? <Footer /> : "" }
      </div>
    )
  }
}
App.contextTypes={
  router:React.PropTypes.object.isRequired
}
export default App;
