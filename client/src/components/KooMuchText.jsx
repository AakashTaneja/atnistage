import React from "react";

import _ from "lodash";

function KooMuchText({socialdata, headlineLogoMap}){
    


    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name Koo_muchtext");
        window.dataLayer.push({
            event: 'outbound',
            site_name: 'Koo_muchtext',
        });
        window.open( 
            socialdata.url, "_blank");
    }

    function maxString(){
        if(socialdata.text.length > 275){
            //console.log("cutting it");
            socialdata.text = _.truncate(socialdata.text, {
                'length': 275
              })
        }
        
    }
    maxString();


    return(
        <div className="twitter-koo-box koo-box">
        
            
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

export default KooMuchText;