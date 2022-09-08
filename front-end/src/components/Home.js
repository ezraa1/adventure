import React, { useState } from "react";
import NewForm from "./NewForm";


function Home(){
const [posts, setPosts] =useState([])

const [show, setShow] = useState(false);


function handleClick(){
  setShow(show=>!show)
}
function handleNewPost(newFormData){
  const serverOptions={
      method:"POST",
      headers:{
      "Content-Type":"application/json",
      'Accept': 'application/json'
      },
      body:JSON.stringify(newFormData
      )
      }
      fetch('http://localhost:9292/posts', serverOptions)
      .then(r=>r.json())
      .then(addedPost=>setPosts(posts=>[...posts, addedPost]))
  }
 

       return(
<div>
      <button onClick={handleClick} >{show? "Close":"Create "} Post</button><br></br>
      {show ? <NewForm onSubmission={handleNewPost} />: null}
     
      </div>
    )
    
}
export default Home;


















