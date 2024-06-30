import React from "react";

function MobileSummary({sumamryObj}){
    return(
        <div className="mobile-summary-container">
            <ul>
            { Array.isArray(sumamryObj)
                    ? sumamryObj.map(element => {
                    return <li><div className="summary-item-mobile">{element}</div></li>
                })
                    : null}

            </ul>

            
        </div>
    )
}

export default MobileSummary;