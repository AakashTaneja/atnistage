import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {headlineLogoObject} from "../staticdata";
import {findNewsPubName} from "./StringFunctions";
import {lowerCase} from 'lodash';

function HeadLine({headlineObj, headlineLogoMap}){

var newsLogo = findNewsPubName(headlineObj.newsURL);
console.log('NEWS LOGO IS '+ newsLogo+' '+headlineLogoObject[newsLogo]);

var headline_GA4 = "Headline_"+newsLogo;
let newsImageUri = headlineObj.newsImage;
//console.log('news image is '+newsImageUri);

function handleClick(){
    //window.location.href = tweetURL;
    //console.log("pushing to GA4 site_name"+headline_GA4);
    window.dataLayer.push({
        event: 'outbound',
        site_name: headline_GA4,
    });
    window.open( 
        headlineObj.newsURL, "_blank");
}

// var logo = "indianexpress";

// const myJSON = JSON.stringify(headlineLogoObject);
//console.log("logo url is "+headlineLogoObject[findNewsPubName(props.headline.newsURL)]);
// console.log(JSON.stringify(headlineLogoObject,["indianexpress"]));

const headLineDiv =() => lowerCase(headlineObj.type) === lowerCase("section")?
( <div className="site-logo-section">
    <div className="section-text">
        {headlineObj.headlineText}
    </div>
   
</div>

 ): (
    <div className="headline-box" onClick={handleClick}>
        <div className="site-logo-headline">
            <div>
                <img className ="site-logo" src={headlineLogoObject[newsLogo]} alt="site_logo"></img>
            </div>
            <div className="headline-text">
                {headlineObj.headlineText}
            </div>
        </div>
        <div className="headlineNewslogoContainer">
                    <img className ="headline-image" src={newsImageUri} alt="headline_logo"></img>
        </div>  

    </div>
    
)






    return(
        <div>

        {headLineDiv()}

        {/* {alert(JSON.stringify(props))} */}
      
           
        </div>

    );
}

export default HeadLine;