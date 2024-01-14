import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function SummaryItem({summarytext}){

    return(
        <div className="summary-item">
            {summarytext}
        </div>
    )

}

export default SummaryItem