import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import New from "./New";

function Home({title, content, author}){
    const [posts, setPosts]= useState([])
    useEffect (() => {
    fetch("http://localhost:9292/posts")
    .then((r) => r.json())
    .then((posts) => setPosts(posts));
    }, [])
    

return(
    <div>
  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {content}
        </Card.Text>
        {posts.map((posts)=>(<New key={posts.id} title={posts.title} content={posts.content} author = {posts.author} >
  
  </New>)) }
        <Button variant="primary">Read More</Button>
      </Card.Body>
      
    </Card>
    </div>
)
}
export default Home;
