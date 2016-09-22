import React, { PropTypes } from 'react'
import Card from '../Component/Card.js'
import {getCardData} from '../utils/getData.js'
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount() {
    getCardData().then( (res) =>{
      this.setState({
        data:res,
        wait:false
      });
    } )
  }
  render () {
    let cards=this.state.data.map((item,i) => {
      return (
        <Card {...item} key={i}/>
      )
    })
    return (
      <div style={{width:"100%",marginTop:"20px"}}>
        {this.state.wait ? "请稍等" : cards }
      </div>
    )
  }
}

export default Blog;
