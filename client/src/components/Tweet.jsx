import React from "react";
//import {headlineLogoObject} from "../staticdata";
import {findNewsPubName} from "./StringFunctions";

function Tweet({socialdata, headlineLogoMap}){
    


    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name Twitter_plain");
        window.dataLayer.push({
            event: 'outbound',
            site_name: 'Twitter_plain',
        });
        window.open( 
            socialdata.url, "_blank");
    }


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
                <img className="twitter-koo-logo twitter-logo-with-media" src={socialdata.sitelogo} />
                </div>
                
                
               
            </div>
            
                
                <div className="twitter-koo-text">
                    {socialdata.text}
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default Tweet;