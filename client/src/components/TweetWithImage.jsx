import React from "react";
import {findNewsPubName} from "./StringFunctions";
import _ from "lodash";

function TweetWithImage({socialdata, headlineLogoMap}){
    


    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name Twitter_image");
        window.dataLayer.push({
            event: 'outbound',
            site_name: 'Twitter_image',
        });
        window.open( 
            socialdata.url, "_blank");
    }

    function maxString(){
        if(socialdata.text.length > 100){
           // console.log("cutting it");
            socialdata.text = _.truncate(socialdata.text, {
                'length': 99
              })  
        }

        if(socialdata.name.length > 18){
            // console.log("cutting it");
             socialdata.name = _.truncate(socialdata.name, {
                 'length': 18
               })  
         }
        
    }
    maxString();


    return(
        <div className="twitter-koo-box twitter-box">
        
            
            <div onClick={handleClick} >
            
            <div className="twitter-koo-image-div">
                    <img className="tweet-koo-inline-image" src={socialdata.image}/>
                </div>
                
                <div className="twitter-koo-text">
                    {socialdata.text}
                </div>
               

                <div className="twitter-koo-biosection">
                <div className="twitter-koo-biopic-with-image">
                    <img className="twitter-koo-img-profile" src={socialdata.profilePic} />
                </div>
                <div className="twitter-koo-biotext">
                     {socialdata.name} 
                     <br></br>
                     {socialdata.handle} 
                </div>
                <div className="filler-div">

                </div>
                <div className="twitter-koo-logo-div">
                <img className="twitter-koo-logo twitter-logo-with-media" src={socialdata.sitelogo} />
                </div>
                
                
               
            </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default TweetWithImage;