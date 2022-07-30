import React from "react";

function Youtube(props){
    const watchNowOff = "watchnow_off.png";
    const watchNow = "watchnow.png";
    const youttubeURL =  "https://www.youtube.com/watch?v="+props.socialdata.youtubeID;
      
    function handleClick(){
        //window.location.href = tweetURL;
        //console.log("pushing to GA4 site_name Twitter_image");
        window.dataLayer.push({
            event: 'outbound',
            site_name: 'Youtube',
        });

    }

    
   
    
    
    return(
        <div className="youtube-box" onClick={handleClick} >
        <a href={youttubeURL} target="_blank">
        <img className="youtube-image" src={"https://i.ytimg.com/vi/"+props.socialdata.youtubeID+"/hqdefault.jpg"} width="245" height="245"/>
        <img className="youtube-play" src={watchNow} width="50" />
        </a>
        
 
                    
          
       </div> 
        
    );
}

export default Youtube;