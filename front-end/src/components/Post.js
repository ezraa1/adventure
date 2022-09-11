import React from "react";



function Post({title, content, author,image}){

    
    return(
        <div>
     
           <h3>{title}</h3> 
           {image}
            <p>{content}</p>
            <h4>{author}</h4>

            
        </div>
    )
}

export default Post;