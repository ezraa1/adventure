import React, {useState} from 'react';
import NewForm from './NewForm';
import Comment from './Comment';
function New(){
    const [posts, setPosts] =useState([])
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

    return(
 <div>
 
<NewForm onSubmission={handleNewPost}/>

 </div>

    )
}

export default New;