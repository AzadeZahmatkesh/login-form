import React, { Component } from 'react'
import Comments from './Comments'
import Post from './Post'

export default class Content extends Component {
    constructor(props){
        super(props)
        this.state={
            comments:null
        }
    }
    async getComment(){
      const comments=await fetch(`http://localhost:3001/comments?post-id=${this.props.post.id}`)
      return await comments.json()
    }
    componentDidMount(){
      this.getComment().then(el=>this.setState({
        comments:el
      }))
    }
    componentDidUpdate(prevProps){
      if(prevProps.post.id !== this.props.post.id){
        this.getComment().then(el=>this.setState({
          comments:el
        }))
      }
    }
  render() {
    return (
        <div className="container">
        <Post post={this.props.post}/>
        {null != this.state.comments &&<Comments comments={this.state.comments}/>}
    </div>
    )
  }
}
