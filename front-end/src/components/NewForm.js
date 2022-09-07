import React from 'react';

function NewForm(){

    return(
        <div>
            <form>
            Title<br></br>
                <input name='title'></input><br></br>
                Author<br></br>
                <input name='author'></input><br></br>
                Content<br></br>
                <textarea name='content' rows={10}></textarea>
            </form>
        </div>
    )
}
export default NewForm;