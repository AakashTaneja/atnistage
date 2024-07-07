import React from "react";
import { useMediaQuery } from 'react-responsive';
import MobileSummary from "./MobileSummary";
import SummaryDesktop from "./SummaryDesktop";
import Highlight from "./Highlight";

const HeadLineSummary = ({headlineObj, sumamryObj, published, highlightTerm}) => {
    // Define a single condition for desktop and tablet
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    // Define a condition for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    console.log('HeadLineSummary headlineObj is '+headlineObj)

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
                <Highlight text={headlineObj} highlight={highlightTerm} />
                    {/* {headlineObj}           */}
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
                    isDesktopOrTablet && <SummaryDesktop sumamryObj={sumamryObj} highlight={highlightTerm}/>
                    
                }

                    {isMobile && <MobileSummary sumamryObj={sumamryObj} highlight={highlightTerm}/>}

                

                </div>
            }
        </div>
    )
}

export default HeadLineSummary