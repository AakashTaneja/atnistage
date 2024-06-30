import React from "react";

function SummaryDesktop({sumamryObj}){
    return(
        <div className="desktop-summary-container">
            <ul>
            { Array.isArray(sumamryObj)
                    ? sumamryObj.map(element => {
                    return <li><div className="summary-item-desktop">{element}</div></li>
                })
                    : null}

            </ul>

            
        </div>
    )
}

export default SummaryDesktop;