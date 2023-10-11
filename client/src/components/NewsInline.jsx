import React from "react";
import {findNewsPubName, subStringToMax} from "./StringFunctions";
import _ from "lodash";

function NewsInline({socialdata}){
    
    var Newsinline_GA4 = "Inline_"+socialdata.sitelogo;

    // headlineLogoObject[findNewsPubName(props.socialdata.newsInlineURL)]
    

    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name "+Newsinline_GA4);
        window.dataLayer.push({
            event: 'outbound',
            site_name: Newsinline_GA4,
        });
        window.open( 
            socialdata.url, "_blank");
    }

    
    function maxString(){
        if(socialdata.text.length > 100){
            //console.log("cutting it");
            socialdata.text = _.truncate(socialdata.text, {
                'length': 100 
              })
        }
        
    }
    maxString();


    return(
        
        <div className="news-inline-box" onClick={handleClick}>
        
         <div className="news-inline-text">
                <img className ="news-inline-sitelogo" src={socialdata.sitelogo}></img>
        
            {socialdata.text}
        </div>
            
        <div className="twitter-koo-image-div">
            <img className="tweet-koo-inline-image" src={socialdata.image} onError={(e) => e.target.style.display='none' }/>
        </div>
       
                
            
            
        </div>
        
    );
}

export default NewsInline;