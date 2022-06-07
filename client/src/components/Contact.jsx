import React from "react";
import {Container} from "react-bootstrap";
import Margin from "./Margin";

function Contact(){

    return(
        <div>
             <Container className="about" fluid="lg">
             <div className="contactus">
                <div>
                    <p className="route-heading">Contact Us</p>
                </div>
                <div className="contactus-text">
                Want to get connected? email us at contact@andthenewsis.com
                </div>
             </div>
                    
                </Container> 
                <Margin />
        </div>
    );
}

export default Contact;