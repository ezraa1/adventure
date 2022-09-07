import React from "react";
import NewForm from "./NewForm";


function New({title, content, author}){


    return(
        <div>
     
           <h3>{title}</h3> 
            <p>{content}</p>
            <h4>{author}</h4>
<NewForm/>
            
        </div>
    )
}

export default New;