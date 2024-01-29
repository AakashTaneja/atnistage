import React from "react";
import SmartBanner from 'react-smartbanner';
import 'react-smartbanner/dist/main.css';

function AppBannerSmart(){
    return (

        <div>
            <SmartBanner 
                position="bottom"
                daysHidden={1}
                daysReminder={1}
            />

        </div>
        

    )
}

export default AppBannerSmart