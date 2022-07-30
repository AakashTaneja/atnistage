import React from "react";
import {headlineLogoObject} from "../staticdata";
import {findNewsPubName} from "./StringFunctions";
import _ from "lodash";

function TweetWithImage(props){
    


    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name Twitter_image");
        window.dataLayer.push({
            event: 'outbound',
            site_name: 'Twitter_image',
        });
        window.open( 
            props.socialdata.tweetURL, "_blank");
    }

    function maxString(){
        if(props.socialdata.tweetText.length > 92){
           // console.log("cutting it");
            props.socialdata.tweetText = _.truncate(props.socialdata.tweetText, {
                'length': 100
              })  
        }

        if(props.socialdata.name.length > 18){
            // console.log("cutting it");
             props.socialdata.name = _.truncate(props.socialdata.name, {
                 'length': 18
               })  
         }
        
    }
    maxString();


    return(
        <div className="twitter-koo-box twitter-box">
        
            
            <div onClick={handleClick} >
            <div className="twitter-koo-biosection">
                <div className="twitter-koo-biopic-with-image">
                    <img className="twitter-koo-img-profile" src={props.socialdata.profilePic} />
                </div>
                <div className="twitter-koo-biotext">
                     {props.socialdata.name} 
                     <br></br>
                     {props.socialdata.handle} 
                </div>
                <div className="filler-div">

                </div>
                <div className="twitter-koo-logo-div">
                <img className="twitter-koo-logo twitter-logo-with-media" src={headlineLogoObject[findNewsPubName(props.socialdata.tweetURL)]} />
                </div>
                
                
               
            </div>
            
                
                <div className="twitter-koo-text">
                    {props.socialdata.tweetText}
                </div>
                <div className="twitter-koo-image-div">
                    <img className="tweet-koo-inline-all-image" src={props.socialdata.tweetImage}/>
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default TweetWithImage;