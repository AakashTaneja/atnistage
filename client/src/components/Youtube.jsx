import React from "react";
import _ from "lodash";

function Youtube(props){
    const youttubeURL =  "https://www.youtube.com/embed/"+props.socialdata.youtubeID;

    function maxString(){
        if(props.socialdata.text.length > 85){
           // console.log("cutting it");
           props.socialdata.text = _.truncate(props.socialdata.text, {
                'length': 85
              })  
        }
    }

    maxString();
      
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
            <iframe src={youttubeURL}
                height={'80%'}
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
            />
            <div className="youtube-text">
                    {props.socialdata.text}
            </div>
                    
          
       </div> 
        
    );
}

export default Youtube;