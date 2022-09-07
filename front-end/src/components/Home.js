import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home({title, content, author}){
    fetch("http://localhost:9292/comments")
    .then((r) => r.json())
    .then((data) => console.log(data));

return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {content}
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
)
}
export default Home;
