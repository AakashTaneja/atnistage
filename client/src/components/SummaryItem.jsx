import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function SummaryItem({summarytext, index}){
    //console.log('index is '+index)
    var point_number = index + 1
    var dot = '•'

    return(
        <div className = 'summary-items-container-desktop'>
             <div className = 'summary-item-container-desktop-numbers'>
             <div className = 'one-third-container-desktop-numbers'>
                <div className='summary-number'>
                        {dot}
                    </div>
                    <div className="summary-item-desktop-text">
                    {summarytext}
                    </div>
                </div>
             </div>
               
            {/* <div className = 'summary-item-container-desktop-text'>
                
            </div> */}
           
        </div>
       
       
    )

}

export default SummaryItem