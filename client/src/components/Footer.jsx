import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <>

            <div className="footer-desktop">
                <div>
                    <a href="https://play.google.com/store/apps/details?id=com.andthenewsisapp">
                    <img  className="google-badge-desktop" src="google-play-badge.png" alt="google play badge"></img>              
                    </a>
                </div>
                <div>
                <a href="https://apps.apple.com/app/id6471580745">
                        <img  className="apple-badge-desktop" src="app-store-apple-iphone.png" alt="apple app store"></img>               
                    </a>
                </div>
                <div>
                    <p className="copyright-message">
                    Copyright &copy; {currentYear} nutshell
                    </p>
                </div>
           
        </div>

        </>
        
        
    );
} 

export default Footer;