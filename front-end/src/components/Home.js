import React, { useEffect, useState } from "react";
import NewForm from "./NewForm";
import Post from "./Post";
import PostDelete from "./PostDelete";

const Card = (props) => {
  return (  
    <div className="card">
      <a href={props.data.url}><h5 className="card-header">{props.data.title}</h5></a>
      <img className="image" src="adv1.jpg" alt="alt message"></img>
      <div className="card-body">{props.data.content}
        {/* <h4 className="card-title">{props.data.title}</h4> */}
      </div>
    </div>
  )
}

function cardData(posts) {
  var values = Object.values(posts);
  return values.map((info, idx) => {
    return <Card data={info} key={idx} />;
  })
}

function Home({title, content, author, onDeletePost}){
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

 
  function handleDeleteClick(id) {
    fetch(`http://localhost:9292/posts/${posts.id}`, {
		  method: "DELETE",
		})
		.then((r) => r.json())
		.then((post) => onDeletePost(post));
	  
    if (window.confirm("Do you want to delete this post?")){
    posts.splice(id,1);
    }
    setPosts([...posts])
      }

       return(
        <div>
        
        {cardData(posts)}
    <div>
        <PostDelete
                                 key={posts.id}
                                 posts={posts}
                                onDeleteClick={handleDeleteClick}
         
                              />
                              
  </div>
<div>

      {/* <button onClick={handleClick} >{show? "Close":"Create "} Post</button><br></br> */}
      {/* {show ? <NewForm onSubmission={handleNewPost} />: null} */}
     
      </div>
     
 
      </div>
    )
    
}
export default Home;


















