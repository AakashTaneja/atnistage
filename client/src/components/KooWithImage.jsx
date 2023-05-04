import React from "react";
import _ from "lodash";

function KooWithImage({socialdata, headlineLogoMap}){
    


    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name Koo_image");
        window.dataLayer.push({
            event: 'outbound',
            site_name: 'Koo_image',
        });
        window.open( 
            socialdata.kooURL, "_blank");
    }

    function maxString(){
        if(socialdata.kooText.length > 100){
           // console.log("cutting it");
            socialdata.kooText = _.truncate(socialdata.kooText, {
                'length': 100
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
        <div className="twitter-koo-box koo-box">
        
            
            <div onClick={handleClick} >
            <div className="twitter-koo-biosection">
                <div className="twitter-koo-biopic-with-image">
                    <img className="twitter-koo-img-profile" src={socialdata.profilePic} alt="image_profile"/>
                </div>
                <div className="twitter-koo-biotext">
                     {socialdata.name} 
                     <br></br>
                     {socialdata.handle} 
                </div>
                <div className="filler-div">

                </div>
                <div className="twitter-koo-logo-div">
                <img className="twitter-koo-logo twitter-logo-with-media" src={headlineLogoMap["koo"]} alt="koo_logo"/>
                </div>
                
                
               
            </div>
            
                
                <div className="twitter-koo-text">
                    {socialdata.kooText}
                </div>
                <div className="twitter-koo-image-div">
                    <img className="tweet-koo-inline-image" src={socialdata.kooImage} alt="koo_image"/>
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default KooWithImage;