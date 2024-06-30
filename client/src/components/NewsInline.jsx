import React from "react";
import {findNewsPubName, subStringToMax} from "./StringFunctions";
import _ from "lodash";

function NewsInline({socialdata}){
    
    var Newsinline_GA4 = "Inline_"+socialdata.sitelogo;
    //console.log(socialdata)
    let resize_mode = 'cover'
    if (socialdata.image_ratio > 0.9) {
        resize_mode = 'contain'
    }

    //console.log('image rations is '+socialdata.image_ratio)
    //console.log('resize mode is '+resize_mode)



    // headlineLogoObject[findNewsPubName(props.socialdata.newsInlineURL)]
    

    function handleClick(){
        //window.location.href = tweetURL;
        //console.log("pushing to GA4 site_name "+Newsinline_GA4);
        window.dataLayer.push({
            event: 'outbound',
            site_name: Newsinline_GA4,
        });
        window.open( 
            socialdata.url, "_blank");
    }

    
    function maxString(){
        if(socialdata.text.length > 110){
            //console.log("cutting it");
            socialdata.text = _.truncate(socialdata.text, {
                'length': 109
              })
        }
        
    }
    maxString();


    return(
        
        <div className="news-inline-box" onClick={handleClick}>
        
       
            
        <div className="twitter-koo-image-div">
            <img 
            className="tweet-koo-inline-image" 
            style={{ objectFit: resize_mode}}
            src={socialdata.image} onError={(e) => e.target.style.display='none' }/>
        </div>
        <div className="news-inline-text-container">
            <div className="news-inline-text">
                {socialdata.text}
            </div>
            <div class="readmore-container">
                {'Read more...'}
            </div>
            <div class="site-logo-container">
                <img className ="news-inline-sitelogo" src={socialdata.sitelogo}></img>
            </div>
        </div>
      
       
                
            
            
        </div>
        
    );
}

export default NewsInline;