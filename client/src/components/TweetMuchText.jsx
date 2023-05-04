import React from "react";
import {findNewsPubName} from "./StringFunctions";
import _ from "lodash";

function TweetMuchText({socialdata, headlineLogoMap}){
    


    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name Twitter_muchtext");
        window.dataLayer.push({
            event: 'outbound',
            site_name: 'Twitter_muchtext',
        });
        window.open( 
            socialdata.tweetURL, "_blank");
    }

    function maxString(){
        if(socialdata.tweetText.length > 275){
            //console.log("cutting it");
            socialdata.tweetText = _.truncate(socialdata.tweetText, {
                'length': 275
              })
        }
        
    }
    maxString();


    return(
        <div className="twitter-koo-box twitter-box">
        
            
            <div onClick={handleClick} >
            <div className="twitter-koo-biosection">
                <div className="twitter-koo-biopic-with-image">
                    <img className="twitter-koo-img-profile" src={socialdata.profilePic} />
                </div>
                <div className="twitter-koo-biotext">
                     {socialdata.name} 
                     <br></br>
                     {socialdata.handle} 
                </div>
                <div className="filler-div-tweet">

                </div>
                <div className="twitter-koo-logo-div">
                <img className="twitter-koo-logo twitter-logo-with-media" src={headlineLogoMap[findNewsPubName(socialdata.tweetURL)]} />
                </div>
                
                
               
            </div>
            
                
                <div className="twitter-koo-text">
                    {socialdata.tweetText}
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default TweetMuchText;