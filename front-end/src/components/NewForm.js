import React, {useState} from 'react';
import Home from './Home';

function NewForm({onSubmission}){
    const[newPostForm, setNewPostForm]= useState({title:"", content:"", author:""})
    

    function handleOnChange(event){
        event.preventDefault()
        setNewPostForm(newPostForm=>({...newPostForm,[event.target.name]: event.target.value}))
        }

        function handleSubmit(event){
            event.preventDefault()
            onSubmission(newPostForm)
            setNewPostForm({title:"",content:"", author:""} )
           
            
        }

    return(
        <div>
        
            <form onSubmit={handleSubmit}>
            Title<br></br>
                <input onChange={handleOnChange} name='title' value={newPostForm.title}></input><br></br>
                Author<br></br>
                <input onChange={handleOnChange} name='author' value={newPostForm.author}></input><br></br>
                Content<br></br>
                <textarea onChange={handleOnChange} name='content'  value={newPostForm.content} rows={10} ></textarea><br></br>
                <input type="submit" value="Publish" />

            </form>
        </div>
    )
}
export default NewForm;