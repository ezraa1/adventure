
import { Fragment, useState } from "react";
import React from "react";
import Comments from "./Comments";

 function Comment(){
    const [comment, setComment] = useState([]);
	// const [isSending, setIsSending] = useState(false);
	 

	function handleNewComment(newCommentData){

        const serverOptions={
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            
            },
            body:JSON.stringify(newCommentData
            )
            }
            fetch('https://advent1121.herokuapp.com/comments', serverOptions)
            .then(r=>r.json())
            .then(addedComment=>setComment(comments=>[...comments, addedComment]))
			
        }
	return (
			<Comments onSubmission={handleNewComment}/>
	);
}
export default  Comment;