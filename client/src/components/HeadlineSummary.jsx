import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function HeadLineSummary({headlineObj, sumamryObj}){
    function hanldeScroll(){
        window.dataLayer.push({
            event: 'scrolled',
            site_name: 'summary',
        });
       
            
        }
    return(
        <div class="container-fluid">
       
        <Row>
            <Col className="p-0">
                <div className="headline-text">
                    {headlineObj}          
                </div>
            </Col>
        </Row> 
       

       
        
        <Row>
            <Col className="p-0" >
            {  
                <div className="summary-items-container" onScroll={hanldeScroll}>
                { Array.isArray(sumamryObj)
                    ? sumamryObj.map(element => {
                    return <div className="summary-item">{element}</div>
                    {/* return <SummaryItem summarytext={element} /> */}
                })
                    : null}

                </div>
            }
            </Col>
        </Row> 
    
        </div>
    )
}

export default HeadLineSummary