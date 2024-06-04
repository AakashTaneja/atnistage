import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar2(){
    return(
        <div>
            <Navbar bg="primary" expand="md" className="p-0">
            <Container className="navbarcontainer mx-mobile-2 mx-lg-6" >
                <Navbar.Brand href="/"> <img class="navbar-brand" className="hamaralogo" src="FullLogo_Transparent_NoBufferPNG.png" alt="nutshell news"></img></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <div className="navbarcontainer">
                <div className="hidden-desktop">
                {/* <Nav className="ms-auto">
                        <Nav.Link href="/contact" style=
                        {{color:"black", "font-family": 'Roboto' , "font-weight": "bold","font-size": "14px","line-height": "150%", "text-align": "left", "margin-top": "2px", "margin-left": "2px", "margin-bottom": "4px", "margin-right": "4px",}}>Trending</Nav.Link>
                    </Nav> */}
                </div>
                   
                    {/* <Nav className="ms-auto">
                        <Nav.Link href="/contact" style=
                        {{color:"black", "font-family": 'Roboto', "font-weight": "bold", "font-size": "14px","line-height": "150%", "text-align": "left", "margin-top": "2px", "margin-left": "2px", "margin-bottom": "4px", "margin-right": "2px",}}>Search</Nav.Link>
                        
                    </Nav> */}
                </div>
                 
                {/* </Navbar.Collapse> */}
            </Container>
            </Navbar>
            <Container className="mx-mobile-2 mx-lg-6">
            <hr className="horizontalline"/>

            </Container>
            <Container className="desktopcontainer mx-lg-6" >
            <div className="hidden-mobile left-div">
                News for you
            </div>
            {/* <div className="hidden-mobile right-div padding-right-div">
                Trending
            </div> */}
                
            </Container>
            
        </div>

       

    );
}

export default Navbar2;