import React from "react";



function getOS() {
    var uA = navigator.userAgent || navigator.vendor || window.opera;
    if ((/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS';
  
    var i, os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry'];
    for (i = 0; i < os.length; i++) if (new RegExp(os[i],'i').test(uA)) return os[i];
  }

var os = getOS()



function osMessage(){
    
    if (os === 'Android')
    {
    return(
        <div>
            
                <a href="https://play.google.com/store/apps/details?id=com.andthenewsisapp">
                <img  className="google-badge" src="google-play-badge.png" alt="google play badge"></img>              
                </a>
           
        </div>
    )
    }
    else if (os === 'iOS')
    {
    return(
        <div>
           
                
                    <a href="https://apps.apple.com/app/id6471580745">
                        <img  className="apple-badge" src="app-store-apple-iphone.png" alt="apple app store"></img>               
                    </a>
             
               

        </div>
    )
    }
    // case when this is opened from Desktop and reduced in width to match tablet or mobile
    else {
        return(
            <div className="footer-desktop-mobile">
                <div>
                    <a href="https://play.google.com/store/apps/details?id=com.andthenewsisapp">
                    <img  className="google-badge-desktop-mobile" src="google-play-badge.png" alt="google play badge"></img>              
                    </a>
                </div>
                <div>
                <a href="https://apps.apple.com/app/id6471580745">
                        <img  className="apple-badge-desktop-mobile" src="app-store-apple-iphone.png" alt="apple app store"></img>               
                    </a>
                </div>
           
        </div>
        )
    }
}

function Appbanner(){

    return(   
          
                <div className="banner-message">
                    {
                     osMessage()

                    }
                </div>                   
    
    );
}

export default Appbanner;