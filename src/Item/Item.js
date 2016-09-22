
import React, { PropTypes } from 'react'
import {getArticle} from '../utils/getData.js'
import marked from 'marked'
import highlight from 'highlight.js'
import '../styles/markdown.css'
class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount() {
    getArticle(this.props.params.url).then( (res) =>{
      this.setState({
        data:marked(res),
        wait:false
      });
    } )
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    });
    return(
      <div className="post-content">
        {this.state.wait ? "请等一哈": <div dangerouslySetInnerHTML={{__html:this.state.data}} />}
      </div>
    )
  }
}

export default Item;
