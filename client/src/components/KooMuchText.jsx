import React from "react";
import {headlineLogoObject} from "../staticdata";
import _ from "lodash";

function KooMuchText(props){
    


    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name Koo_muchtext");
        window.dataLayer.push({
            event: 'outbound',
            site_name: 'Koo_muchtext',
        });
        window.open( 
            props.socialdata.kooURL, "_blank");
    }

    function maxString(){
        if(props.socialdata.kooText.length > 275){
            //console.log("cutting it");
            props.socialdata.kooText = _.truncate(props.socialdata.kooText, {
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
                <img className="twitter-koo-logo twitter-logo-with-media" src={headlineLogoObject["koo"]} />
                </div>
                
                
               
            </div>
            
                
                <div className="twitter-koo-text">
                    {props.socialdata.kooText}
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default KooMuchText;