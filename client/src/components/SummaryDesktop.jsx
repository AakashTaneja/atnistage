import React from "react";
import Highlight from "./Highlight";

function SummaryDesktop({sumamryObj, highlight}){
    return(
        <div className="desktop-summary-container">
            <ul>
            { Array.isArray(sumamryObj)
                    ? sumamryObj.map(element => {
                    return <li><div className="summary-item-desktop"><Highlight text={element} highlight={highlight} /></div></li>
                })
                    : null}

            </ul>

            
        </div>
    )
}

export default SummaryDesktop;