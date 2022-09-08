import React, {useState} from 'react';
import Home from './Home';

function NewForm({onSubmission}){
    const[newPostForm, setNewPostForm]= useState({title:"", content:"",author:""})
    



;

    function handleOnChange(event){
        event.preventDefault()
        setNewPostForm(newPostForm=>({...newPostForm,[event.target.name]: event.target.value}))
        }

        function handleSubmit(event){
            event.preventDefault()
            onSubmission(newPostForm)
            setNewPostForm({title:"",content:"", author:""} )
           return <Home />
            
        }

    return(
        <div>
            <form>
            Title<br></br>
                <input name='title'></input><br></br>
                Author<br></br>
                <input name='author'></input><br></br>
                Content<br></br>
                <textarea name='content' rows={10}></textarea><br></br>
                <input type="submit" value="Post" />
            </form>
        </div>
    )
}
export default NewForm;