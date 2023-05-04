import React from "react";


function Koo({socialdata, headlineLogoMap}){
    function handleClick(){
        //window.location.href = tweetURL;
        console.log("pushing to GA4 site_name Koo");
        window.dataLayer.push({
            event: 'outbound',
            site_name: 'Koo_plain',
        });
        window.open( 
            socialdata.kooURL, "_blank");
    }

    return(
        <div className="twitter-koo-box koo-box" onClick={handleClick}>
            <div className="twitter-koo-biosection">
                <div className="twitter-koo-biopic">
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
                    <img className="twitter-koo-logo" src={headlineLogoMap["koo"]} />
                </div>

            </div>
            <div className="twitter-koo-text">
                    {socialdata.kooText}
                </div>
        

        </div>

    );
}

export default Koo;

