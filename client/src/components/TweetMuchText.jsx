import React from "react";
import {headlineLogoObject} from "../staticdata";
import {findNewsPubName} from "./StringFunctions";
import _ from "lodash";

function TweetMuchText(props){
    


    function handleClick(){
        //window.location.href = tweetURL;
        window.open( 
            props.socialdata.tweetURL, "_blank");
    }

    function maxString(){
        if(props.socialdata.tweetText.length > 275){
            //console.log("cutting it");
            props.socialdata.tweetText = _.truncate(props.socialdata.tweetText, {
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
                    <img className="twitter-koo-img-profile" src={props.socialdata.profilePic} />
                </div>
                <div className="twitter-koo-biotext">
                     {props.socialdata.name} 
                     <br></br>
                     {props.socialdata.handle} 
                </div>
                <div className="filler-div-tweet">

                </div>
                <div className="twitter-koo-logo-div">
                <img className="twitter-koo-logo twitter-logo-with-media" src={headlineLogoObject[findNewsPubName(props.socialdata.tweetURL)]} />
                </div>
                
                
               
            </div>
            
                
                <div className="twitter-koo-text">
                    {props.socialdata.tweetText}
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default TweetMuchText;