import React from "react";
import {Container} from "react-bootstrap";
import {MobileView} from 'react-device-detect';


function getOS() {
    var uA = navigator.userAgent || navigator.vendor || window.opera;
    if ((/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS';
  
    var i, os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry'];
    for (i = 0; i < os.length; i++) if (new RegExp(os[i],'i').test(uA)) return os[i];
  }

var os = getOS()



function osMessage(){
    
    if (os === 'Android')
    return(
        <>
            <MobileView>
                <a href="https://play.google.com/store/apps/details?id=com.andthenewsisapp">
                <img  className="google-badge" src="google-play-badge.png" alt="google play badge"></img>              
                </a>
            </MobileView>
           
        </>
    )
    else if (os === 'iOS')
    return(
        <>
            <MobileView>
                <a href="https://apps.apple.com/app/id6471580745">
                    <img  className="apple-badge" src="app-store-apple-iphone.png" alt="apple app store"></img>               
                </a>
            </MobileView>
        </>
    )
}

function Appbanner(){

    return(
        <div>
         <MobileView>
            <Container className="banner-mobile-container" fluid="lg">
                <div className="banner-message">
                    {
                     osMessage()

                    }
                </div>                   
            </Container> 
         </MobileView>
            
               
        </div>
    );
}

export default Appbanner;