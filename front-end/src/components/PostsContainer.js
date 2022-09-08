import React, {useEffect, useState} from "react";

import Post from "./Post"

function PostsContainer(){
    const [posts, setPosts]= useState([])

   

    useEffect(() => {
        fetch('http://localhost:9292/posts' )
          .then((r) => r.json())
          .then((posts) => setPosts(posts));
      }, []);


//   function handleDeleteClick(id) {
// if (window.confirm("Do you want to delete this post?")){
// posts.splice(id,1);
// }
// setPosts([...posts])
//   }
    return(
        <div>

{posts.map((posts)=>(<Post key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  
  </Post>)) }
  
        </div>
    )
}

export default PostsContainer;