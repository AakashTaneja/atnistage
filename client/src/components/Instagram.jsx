import React from "react";
import {findNewsPubName} from "./StringFunctions";

function Instagram({socialdata, headlineLogoMap}){
    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name Instagram");
        window.dataLayer.push({
            event: 'outbound',
            site_name: 'insta',
        });
        window.open( 
            socialdata.instaURL, "_blank");
    }

    return(
        <div className="twitter-koo-box insta-box">
         <div onClick={handleClick} >
         {/* <div className="twitter-koo-biosection">
                <div className="twitter-koo-logo-div">
                <img className="twitter-koo-logo twitter-logo-with-media" src={headlineLogoMap[findNewsPubName(socialdata.instaURL)]} />
                </div> 
                
                
               
            </div> */}
        
                <img className="insta-all-image" src={socialdata.instaImage} />
           
         </div>
        
        </div>
    );

}

export default Instagram;