import React from "react";
import {Container} from "react-bootstrap";
import Margin from "./Margin";

function About(){

    return(
        <div>
             <Container className="about" fluid="lg">
             <div className="contactus">
                <div>
                    <p className="route-heading">About Us</p>
                </div>
                <div className="contactus-text">
                News is not the same as we used to experience, when you had handful of media houses and experts monopolising perspectives.
                In today's world of social media and the constant scuffle of different views and noises, news is travelling to you via many sources with as many outlooks.
                AndTheNewsIs an attempt by news buffs to put together this chain of unfolding from many sources, using state of the art algorithms to aggregate and curate the content specially for our readers.
                </div>
             </div>
                    
                </Container> 
                <Margin />
        </div>
    );
}

export default About;