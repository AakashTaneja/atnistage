import React from "react";

function Youtube(props){

    
    return(
       <div className="">
        <iframe className="youtube-box" src={props.socialdata.youtubeURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            
        </iframe>
       </div> 
        
    );
}

export default Youtube;