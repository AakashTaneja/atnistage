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
                Want to get connected, or delete account url information? please email us at admin@nutshellnews.in
                </div>
             </div>
                    
                </Container> 
                <Margin />
        </div>
    );
}

export default Contact;