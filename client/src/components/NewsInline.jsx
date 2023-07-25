import React from "react";
import {findNewsPubName, subStringToMax} from "./StringFunctions";
import _ from "lodash";

function NewsInline({socialdata, headlineLogoMap}){
    var newsLogo = findNewsPubName(socialdata.newsInlineURL);
    //console.log('newsinline newslogo is '+newsLogo)
    //console.log('logo map is '+JSON.stringify(headlineLogoMap))
    //console.log('newsLogo is '+headlineLogoMap[newsLogo])
    
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
            socialdata.newsInlineURL, "_blank");
    }

    
    function maxString(){
        if(socialdata.newsInlineText.length > 100){
            //console.log("cutting it");
            socialdata.newsInlineText = _.truncate(socialdata.newsInlineText, {
                'length': 100 
              })
        }
        
    }
    maxString();


    return(
        
        <div className="news-inline-box" onClick={handleClick}>
        
         <div className="news-inline-text">
                <img className ="news-inline-sitelogo" src={headlineLogoMap[newsLogo]}></img>
        
            {socialdata.newsInlineText}
        </div>
            
        <div className="twitter-koo-image-div">
            <img className="tweet-koo-inline-image" src={socialdata.newsInlineImage}/>
        </div>
       
                
            
            
        </div>
        
    );
}

export default NewsInline;