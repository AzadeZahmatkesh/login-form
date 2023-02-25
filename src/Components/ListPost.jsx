import React from 'react'

export default function ListPost(props) {
  return (
    <li onClick={()=>props.handleCurrentPost(props.indexPost)}>{props.title}</li>
  )
}
