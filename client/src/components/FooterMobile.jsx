import React, {useState} from "react";
import Appbanner from "./Appbanner";
function FooterMobile(){

    function getOS() {
        var uA = navigator.userAgent || navigator.vendor || window.opera;
        if ((/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS';
      
        var i, os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry'];
        for (i = 0; i < os.length; i++) if (new RegExp(os[i],'i').test(uA)) return os[i];
      }

      var os = getOS()

    const [isFooterVisible, setIsFooterVisible] = useState(true);

    const handleCloseFooter = () => {
        setIsFooterVisible(false);
    };

    function closeButton(){
        if (os === 'Android' || os === 'iOS'){
            return(
                <div className="footer-close">
                    <button className="close-button" onClick={handleCloseFooter}>
                     <img src={`${process.env.PUBLIC_URL}/closebutton.png`} alt="Close" className="close-button-img" />
                     </button>
                </div>
            )

        }
    }

    return(
        <>

       
            <div className={`footer ${isFooterVisible ? 'visible' : 'hidden'}`}>
            <div className="footer-message">
               <Appbanner />
            </div>
            {closeButton()}
            
           
        </div>


        </>
        
        
    );
} 

export default FooterMobile;