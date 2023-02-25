import React from "react";
import ListPost from "./ListPost";

export default function Sidebar({posts,handleCurrentPost}) {
    const listPost=posts?posts.map((el,index)=><ListPost title={el.title} key={el.id} handleCurrentPost={handleCurrentPost} indexPost={index}/>):null
  return (
    <aside>
      <ul>
        {listPost}
      </ul>
    </aside>
  );
}
