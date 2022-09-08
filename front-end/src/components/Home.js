import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import New from "./New";

function Home({title, content, author}){
   
    const [posts, setPosts]= useState([])
    const [show, setShow] = useState(false);
    
    useEffect (() => {
    fetch("http://localhost:9292/posts")
    .then((r) => r.json())
    .then((posts) => setPosts(posts));
    }, [])
    
    function handleClick(){
        setShow(show=>!show)
      }

return(
    <div className="hmm">
    {show ? posts : null} 
    <div className="row row-cols-1 row-cols-md-3">
    <div className="col mb-4">
    <div class="card h-100">
    <div className="card">
      {/* <img src="adv1.jpg" class="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title"> {title}</h5>
        <p className="card-text">{content}</p>
      </div>
      {posts.map((posts)=>(<New key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  
  </New>)) }
    </div>
    </div>
  </div>
        {/* {posts.map((posts)=>(<New key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  
  </New>)) } */}
        
     
      
    
    

    <div className="col mb-4">
    <div class="card h-100">
    <div className="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
      <h5 className="card-title"> {title}</h5>
        <p className="card-text">{content}</p>
      </div>
      {posts.map((posts)=>(<New key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  
  </New>)) }
    </div>
    </div>
  </div>

  <div className="col mb-4">
  <div class="card h-100">
    <div className="card">
      {/* <img src="..." class="card-img-top" alt="..."> </img> */}
      <div className="card-body">
      <h5 className="card-title"> {title}</h5>
        <p className="card-text">{content}</p>
      </div>
      {posts.map((posts)=>(<New key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  
  </New>)) }
    </div>
    </div>
  </div>

  <div className="col mb-4">
  <div class="card h-100">
    <div className="card">
      {/* <img src="..." class="card-img-top" alt="..."> </img> */}
      <div className="card-body">
      <h5 className="card-title"> {title}</h5>
        <p className="card-text">{content}</p>
      </div>
      {posts.map((posts)=>(<New key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  
  </New>)) }
    </div>
    </div>
  </div>

   {/* {posts.map((posts)=>(<New key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  
  </New>)) } */}
    </div>
    </div>
)
}
export default Home;
