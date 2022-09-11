import React, { useEffect, useState } from "react";
import NewForm from "./NewForm";
import Post from "./Post";
import PostDelete from "./PostDelete";
import Comment from "./Comment";

const Card = (props) => {
  return ( 
   
<div class="row">
  <div class="col-md-8" >
    <div className="shadow p-3 mb-5 bg-white rounded">
    <div className="card">
    <div class="card-body">

      <a href={props.data.src}><h5 className="card-header">{props.data.title}</h5></a>
      <img className="image" src={props.data.image} alt="alt message"></img>
      <div className="card-body">{props.data.content}
      
      <Comment/>
        {/* <h4 className="card-title">{props.data.title}</h4> */}
      
      </div>
    </div>
    </div>
    </div>
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
    console.log(posts)
      }

       return(
        <div >
        
        {cardData(posts)}
    
        
       { <PostDelete
                                 key={posts.id}
                                 posts={posts}
                                onDeleteClick={handleDeleteClick}
         
                              />}     
  
<div>

      {/* <button onClick={handleClick} >{show? "Close":"Create "} Post</button><br></br> */}
      {/* {show ? <NewForm onSubmission={handleNewPost} />: null} */}
     
      </div>
      <footer id="footer">
          <p>infor@adventures.co.ke</p>
          <p>Designed by : Ezra Kipchirchir</p>
          <p>contact : +254706103204</p>
</footer>
		
 
      </div>
    )
    
}
export default Home;


















