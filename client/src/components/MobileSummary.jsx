import React from "react";
import Highlight from "./Highlight";

function MobileSummary({sumamryObj, highlight}){
    return(
        <div className="mobile-summary-container">
            <ul>
            { Array.isArray(sumamryObj)
                    ? sumamryObj.map(element => {
                    return <li><div className="summary-item-mobile"><Highlight text={element} highlight={highlight} /></div></li>
                })
                    : null}

            </ul>

            
        </div>
    )
}

export default MobileSummary;