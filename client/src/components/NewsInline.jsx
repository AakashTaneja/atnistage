import React from "react";
import {headlineLogoObject} from "../staticdata";
import {findNewsPubName, subStringToMax} from "./StringFunctions";
import _ from "lodash";

function NewsInline(props){
    var newsLogo = findNewsPubName(props.socialdata.newsInlineURL);
    var Newsinline_GA4 = "Inline_"+newsLogo;

    // headlineLogoObject[findNewsPubName(props.socialdata.newsInlineURL)]
    

    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name "+Newsinline_GA4);
        window.dataLayer.push({
            event: 'outbound',
            site_name: Newsinline_GA4,
        });
        window.open( 
            props.socialdata.newsInlineURL, "_blank");
    }

    
    function maxString(){
        if(props.socialdata.newsInlineText.length > 100){
            //console.log("cutting it");
            props.socialdata.newsInlineText = _.truncate(props.socialdata.newsInlineText, {
                'length': 100 
              })
        }
        
    }
    maxString();


    return(
        
        <div className="news-inline-box" onClick={handleClick}>
        
         <div className="news-inline-text">
                <img className ="news-inline-sitelogo" src={headlineLogoObject[newsLogo]}></img>
        
            {props.socialdata.newsInlineText}
        </div>
            
        <div className="twitter-koo-image-div">
            <img className="tweet-koo-inline-image" src={props.socialdata.newsInlineImage}/>
        </div>
       
                
            
            
        </div>
        
    );
}

export default NewsInline;