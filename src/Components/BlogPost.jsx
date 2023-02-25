import React, { Component } from 'react'
import Content from './Content'
import Sidebar from './Sidebar'
import Signin from './Signin'

export default class BlogPost extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:null,
            currentPost:null,
            isLogging:false
        }
    }
    async getPost(){
        const post=await fetch('http://localhost:3001/posts')
        return await post.json()
    }
    componentDidMount(){
        this.getPost().then(data=>this.setState({
            posts:data,
            currentPost:0
        }))
        // fetch('http://localhost:3001/posts')
        //     .then(response=>response.json())
        //     .then(data=>this.setState())
    }

    handleCurrentPost(el){
        this.setState({
            currentPost:el
        })
    }
    handelClick(){
        this.setState({
            isLogging:!this.state.isLogging
        })
    }

  render() {
    return (
        <>
        {this.state.isLogging==true?<Signin/>:<>
           <Sidebar posts={this.state.posts} handleCurrentPost={this.handleCurrentPost.bind(this)}/>
            {null != this.state.currentPost &&<Content post={this.state.posts[this.state.currentPost]}/>}
            <button className='logout btn btn-primary' onClick={this.handelClick.bind(this)}>Logout</button>
            </>
  }
        </>
    )
  }
}
