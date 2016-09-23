import React, { PropTypes } from 'react'
import WorkCard from "../Component/WorkCard.js"
import WorkCard2 from "../Component/WorkCard2.js"

class Work extends React.Component {
  render () {
    return (
      <div className="wordcard-flex">
          <WorkCard imgsrc="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg"/>
          <WorkCard imgsrc="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg"/>
          <WorkCard imgsrc="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg"/>
          <WorkCard imgsrc="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg"/>
          <WorkCard imgsrc="http://odp3ysykq.bkt.clouddn.com/383c4a88256bc5e26c8c1ac5750f9dbd.jpg"/>
      </div>
    )
  }
}

export default Work;
