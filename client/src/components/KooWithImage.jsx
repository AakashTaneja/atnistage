import React from "react";
import {headlineLogoObject} from "../staticdata";
import _ from "lodash";

function KooWithImage(props){
    


    function handleClick(){
        //window.location.href = tweetURL;
        window.open( 
            props.socialdata.tweetURL, "_blank");
    }

    function maxString(){
        if(props.socialdata.kooText.length > 100){
           // console.log("cutting it");
            props.socialdata.kooText = _.truncate(props.socialdata.kooText, {
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
        <div className="twitter-koo-box koo-box">
        
            
            <div onClick={handleClick} >
            <div className="twitter-koo-biosection">
                <div className="twitter-koo-biopic-with-image">
                    <img className="twitter-koo-img-profile" src={props.socialdata.profilePic} alt="image_profile"/>
                </div>
                <div className="twitter-koo-biotext">
                     {props.socialdata.name} 
                     <br></br>
                     {props.socialdata.handle} 
                </div>
                <div className="filler-div">

                </div>
                <div className="twitter-koo-logo-div">
                <img className="twitter-koo-logo twitter-logo-with-media" src={headlineLogoObject["koo"]} alt="koo_logo"/>
                </div>
                
                
               
            </div>
            
                
                <div className="twitter-koo-text">
                    {props.socialdata.kooText}
                </div>
                <div className="twitter-koo-image-div">
                    <img className="tweet-koo-inline-image" src={props.socialdata.kooImage} alt="koo_image"/>
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default KooWithImage;