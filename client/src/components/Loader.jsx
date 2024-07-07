import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useMediaQuery } from 'react-responsive';
import HeadLineSummary from "./HeadlineSummary";

function Loader(){
    // Define a single condition for desktop and tablet
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    // Define a condition for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return(
       <>
        {isDesktopOrTablet && 
            <div className="desktop-skeleton grey-gradient-background">
    
                
            </div>
        }
        { isMobile &&
            <div className="mobile-skeleton grey-gradient-background">
        
                
            </div>
        }
       </>
    
    )
}

export default Loader;