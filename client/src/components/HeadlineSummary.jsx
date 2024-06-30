import React from "react";
import { useMediaQuery } from 'react-responsive';
import MobileSummary from "./MobileSummary";
import SummaryDesktop from "./SummaryDesktop";

const HeadLineSummary = ({headlineObj, sumamryObj, published}) => {
    // Define a single condition for desktop and tablet
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    // Define a condition for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    //console.log('summary obj is '+sumamryObj)
    const hanldeScroll = () => {
        window.dataLayer.push({
            event: 'scrolled',
            site_name: 'summary',
        });          
        }
    return(
        <div className="headline-summary-container">
        
       
        <div>
             <div className="headline-text">
                    {headlineObj}          
                </div>
                <div className="published-text">
                    {published + ' IST'}          
                </div>
        </div>
               
                <div className="in-a-nutshell">
                    {'In a nutshell...'}          
                </div>
        
            {  
                
                <div className="summary-items-container" onScroll={hanldeScroll}>
                { 
                    isDesktopOrTablet && <SummaryDesktop sumamryObj={sumamryObj}/>
                    
                }

                    {isMobile && <MobileSummary sumamryObj={sumamryObj}/>}

                

                </div>
            }
        </div>
    )
}

export default HeadLineSummary