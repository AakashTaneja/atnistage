import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {headlineLogoObject} from "../staticdata";
import {findNewsPubName} from "./StringFunctions"

function HeadLine(props){

var newsLogo = findNewsPubName(props.headline.newsURL);
var headline_GA4 = "Headline_"+newsLogo;
// var logo = "indianexpress";

// const myJSON = JSON.stringify(headlineLogoObject);
//console.log("logo url is "+headlineLogoObject[findNewsPubName(props.headline.newsURL)]);
// console.log(JSON.stringify(headlineLogoObject,["indianexpress"]));


function handleClick(){
    //window.location.href = tweetURL;
    //console.log("pushing to GA4 site_name "+headline_GA4);
    window.dataLayer.push({
        event: 'outbound',
        site_name: headline_GA4,
    });
    window.open( 
        props.headline.newsURL, "_blank");
}

    return(
        <div onClick={handleClick} className="headline-box">

        {/* {alert(JSON.stringify(props))} */}
            <div className="site-logo-headline">
                <div>
                     <img className ="site-logo" src={headlineLogoObject[newsLogo]} alt="site_logo"></img>
                </div>
                <div className="headline-text">
                    {props.headline.headlineText}
                </div>
            </div>
            
    
            <div>
                <img className ="headline-image" src={props.headline.newsImage} alt="headline_logo"></img>
            </div>   
        </div>

    );
}

export default HeadLine;