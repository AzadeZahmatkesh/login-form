import React from 'react'

export default function Post({post}) {
  return (
    <div className="post">
            <img src={`assets/${post.image}`} alt=""/>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </div>
  )
}
