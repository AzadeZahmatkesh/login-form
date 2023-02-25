import React from 'react'
import Comment from './Comment'

export default function Comments({comments}) {
  const commentList=comments?comments.map(el=><Comment body={el.body} key={el.id}/>):null
  return (
    <div className="comments">
    <p>Comments:</p>
    {commentList}
</div>
  )
}
