import React, { useEffect, useState } from "react";
import NewForm from "./NewForm";
import Post from "./Post";
import PostDelete from "./PostDelete";

function Home({title, content, author}){
const [posts, setPosts] =useState([])

const [show, setShow] = useState(false);
useEffect(() => {
  fetch('http://localhost:9292/posts' )
    .then((r) => r.json())
    .then((posts) => setPosts(posts));
}, []);

function handleClick(){
  setShow(show=>!show)
}
function handleNewPost(newFormData){
  const serverOptions={
      method:"POST",
      headers:{
      "Content-Type":"application/json",
      
      },
      body:JSON.stringify(newFormData
      )
      }
      fetch('http://localhost:9292/posts', serverOptions)
      .then(r=>r.json())
      .then(addedPost=>setPosts(posts=>[...posts, addedPost]))
  }
 
  function handleDeleteClick(id) {
    if (window.confirm("Do you want to delete this post?")){
    posts.splice(id,1);
    }
    console.log([...posts])
      }

       return(
        <div>
        {posts.map((posts)=>(<Post key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
    
    </Post>)) }
<div>

      <button onClick={handleClick} >{show? "Close":"Create "} Post</button><br></br>
      {show ? <NewForm onSubmission={handleNewPost} />: null}
     
      </div>
      <div>
      {title}
      {content}
</div>
  <div>
        <PostDelete
                                 key={posts.id}
                                 posts={posts}
                                onDeleteClick={handleDeleteClick}
         
                              />
                              
  </div>
      </div>
    )
    
}
export default Home;


















